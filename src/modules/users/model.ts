import { fetch, fetchAll } from "../../lib/postgres.js";
import { GETANSWERS, GETEXAM, GETSUBJECTS, GETUSER } from "./query.js";

const GET = async (userId: any) => {
  try {
    let getUser = await fetch(GETUSER, [userId as never]);
    let exams = await fetchAll(GETEXAM, [userId as never]);
    let answers = await fetchAll(GETANSWERS, [userId as never]);
    let subjects = await fetchAll(GETSUBJECTS);
    if (exams.length > 0) {
      answers = answers.map((answer: any) => {
        if (answer.answer == answer.test[0].test_answer) {
          answer.answerCheck = true;
        } else if (answer.answer != answer.test[0].test_answer) {
          answer.answerCheck = false;
        }
        delete answer.user_id;
        delete answer.test_id;

        return answer;
      });

      exams = exams.map((exam) => {
        let answersLength = answers.filter((answer: any) => {
          return answer.answerCheck && answer.exam_id == exam.exam_id;
        });
        exam.faculty = exam.faculty.filter((fac: any) => {
          return (
            delete fac.unversity_id,
            (fac.subjects = subjects.filter((subject) => {
              return (
                fac.subject_1 == subject.subject_id ||
                subject.subject_id == fac.subject_2
              );
            })),
            delete fac.subject_1,
            delete fac.subject_2
          );
        });
        let result = exam.faculty.map((fac: any) => {
          if (fac.grand_mark <= answersLength.length * 6.3) {
            return "grand";
          }
          if (fac.contract_mark <= answersLength.length * 6.3) {
            return "contract";
          } else {
            return "reject";
          }
        });
        exam.result = result[0];
        exam.mark = {
          trueAnswers: answersLength.length,
          overAllMark: +(answersLength.length * 6.3).toFixed(2),
          overAllPercent: Math.round((100 / 30) * answersLength.length),
          subjects: exam.faculty[0].subjects.map((subject: any) => {
            subject.trueAnswers = answers.filter((answer: any) => {
              return (
                answer.test[0].subject_id == subject.subject_id &&
                answer.answerCheck == true &&
                answer.exam_id == exam.exam_id
              );
            }).length;
            delete exam.faculty[0].subjects;
            subject.mark = subject.trueAnswers * 6.3;
            subject.percent = Math.round((100 / 15) * subject.trueAnswers);
            return subject;
          }),
        };
        return exam;
      });

      getUser.exams = exams;
    } else {
      getUser.exams = [];
    }

    return getUser;
  } catch (error) {
    console.log(error);
  }
};

export default {
  GET,
};

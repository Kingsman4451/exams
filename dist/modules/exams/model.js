import { fetch, fetchAll } from "../../lib/postgres.js";
import { GETANSWERS, GETEXAM, POSTEXAM, GETSUBJECTS, UPDATEXAM, GETEXAM2, GETANSWERS2, GETSUBJECTS2, } from "./query.js";
const POST = async (body, userId) => {
    try {
        const { subject_1, subject_2, unversityId, facultyId } = body;
        let data = await fetch(POSTEXAM, [
            userId,
            subject_1,
            subject_2,
            unversityId,
            facultyId,
        ]);
        return data;
    }
    catch (error) {
        console.log(error);
    }
};
const GET = async (params) => {
    try {
        let exam = await fetch(GETEXAM, [params.examId]);
        let answers = await fetchAll(GETANSWERS, [params.examId]);
        let updateExam = await fetch(UPDATEXAM, [params.examId]);
        let subjects = await fetchAll(GETSUBJECTS, [
            exam.faculty[0].subject_1,
            exam.faculty[0].subject_2,
        ]);
        exam.user = exam.user.filter((user) => {
            return delete user.password;
        });
        exam.faculty = exam.faculty.filter((fac) => {
            return (delete fac.unversity_id && delete fac.subject_2 && delete fac.subject_1);
        });
        answers = answers.map((answer) => {
            if (answer.answer == answer.test[0].test_answer) {
                answer.answerCheck = true;
            }
            else if (answer.answer != answer.test[0].test_answer) {
                answer.answerCheck = false;
            }
            delete answer.user_id;
            delete answer.test_id;
            return answer;
        });
        let answersLength = answers.filter((answer) => {
            return answer.answerCheck;
        });
        subjects = subjects.map((subject) => {
            subject.trueAnswers = answers.filter((answer) => {
                return (answer.test[0].subject_id == subject.subject_id &&
                    answer.answerCheck == true);
            }).length;
            subject.mark = subject.trueAnswers * 6.3;
            subject.percent = Math.round((100 / 15) * subject.trueAnswers);
            return subject;
        });
        let result = exam.faculty.map((fac) => {
            if (fac.grand_mark <= answersLength.length * 6.3) {
                return "grand";
            }
            if (fac.contract_mark <= answersLength.length * 6.3) {
                return "contract";
            }
            else {
                return "reject";
            }
        });
        let data = {
            user: exam.user[0],
            unversity: exam.unversity[0],
            faculty: exam.faculty[0],
            exam: {
                result: result[0],
                mark: {
                    trueAnswers: answersLength.length,
                    overAllMark: +(answersLength.length * 6.3).toFixed(2),
                    overAllPercent: Math.round((100 / 30) * answersLength.length),
                    subjects,
                },
                tests: answers,
            },
        };
        return data;
    }
    catch (error) {
        console.log(error);
    }
};
const GETEXAMS = async () => {
    try {
        let exams = await fetchAll(GETEXAM2);
        let answers = await fetchAll(GETANSWERS2);
        let subjects = await fetchAll(GETSUBJECTS2);
        answers = answers.map((answer) => {
            if (answer.answer == answer.test[0].test_answer) {
                answer.answerCheck = true;
            }
            else if (answer.answer != answer.test[0].test_answer) {
                answer.answerCheck = false;
            }
            delete answer.user_id;
            delete answer.test_id;
            return answer;
        });
        exams = exams.map((exam) => {
            let answersLength = answers.filter((answer) => {
                return answer.answerCheck && answer.exam_id === exam.exam_id;
            });
            function millisToMinutesAndSeconds(millis) {
                var minutes = Math.floor(millis / 60000);
                var seconds = ((millis % 60000) / 1000).toFixed(0);
                return minutes + ":" + (+seconds < 10 ? "0" : "") + seconds;
            }
            exam.time = millisToMinutesAndSeconds(exam.finished_at - exam.created_at);
            exam.user = exam.user.filter((user) => {
                return delete user.password;
            });
            exam.faculty = exam.faculty.filter((fac) => {
                return (delete fac.unversity_id,
                    (fac.subjects = subjects.filter((subject) => {
                        return (fac.subject_1 == subject.subject_id ||
                            subject.subject_id == fac.subject_2);
                    })),
                    delete fac.subject_1,
                    delete fac.subject_2);
            });
            let result = exam.faculty.map((fac) => {
                if (fac.grand_mark <= answersLength.length * 6.3) {
                    return "grand";
                }
                if (fac.contract_mark <= answersLength.length * 6.3) {
                    return "contract";
                }
                else {
                    return "reject";
                }
            });
            exam.result = result[0];
            exam.mark = {
                trueAnswers: answersLength.length,
                overAllMark: +(answersLength.length * 6.3).toFixed(2),
                overAllPercent: Math.round((100 / 30) * answersLength.length),
            };
            return exam;
        });
        exams = exams.filter((exam) => {
            return exam.result == "grand" || exam.result == "contract";
        });
        return exams;
    }
    catch (error) {
        console.log(error);
    }
};
export default {
    POST,
    GET,
    GETEXAMS,
};

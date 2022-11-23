const POSTANSWER = `
  insert into user_answers (user_id, test_id, answer, exam_id) values ($1, $2, $3, $4) returning *
`;
const GETANSWER = `
  select * from user_answers where test_id = $1 and exam_id = $2
  `;
const UPDATAANSWER = `
  update user_answers
    set answer = $2
  where answer_id = $1 returning *
  `;
export { POSTANSWER, GETANSWER, UPDATAANSWER };

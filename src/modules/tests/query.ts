const POSTANSWER = `
  insert into user_answers (user_id, test_id, answer, exam_id) values ($1, $2, $3, $4) returning *
`;

const GETTEST = `
  select * from tests where subject_id = $1 or subject_id = $2 order by random() limit 1000
  `;

const UPDATAANSWER = `
  update user_answers
    set answer = $2
  where answer_id = $1 returning *
  `;

export { POSTANSWER, GETTEST, UPDATAANSWER };

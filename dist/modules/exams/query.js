const POSTEXAM = `
  insert into exams (user_id, subject_1, subject_2, unversity_id, faculty_id) values ($1, $2, $3, $4, $5) returning *
`;
const GETEXAM = `
  select 
    e.exam_id,
    e.subject_1,
    e.subject_2,
    e.unversity_id,
    e.faculty_id,
    e.created_at,
    e.finished_at,
    json_agg(
      u.*
    ) as user,
    json_agg(
      un.*
    ) as unversity,
    json_agg(
      f.*
    ) as faculty
  from exams as e
  left join users as u on e.user_id = u.user_id
  left join unversities as un on e.unversity_id = un.unversity_id
  left join faculties as f on e.faculty_id = f.faculty_id
  where e.exam_id = $1
  group by e.user_id, e.exam_id, e.unversity_id, e.faculty_id
  order by e.created_at desc
  `;
const GETANSWERS = `
  select 
    u.* ,
  json_agg(
    t.*
  ) as test
  from user_answers as u
  left join tests as t on u.test_id = t.test_id
  where u.exam_id = $1
  group by u.exam_id, u.test_id, u.answer_id, t.test_id
  `;
const GETSUBJECTS = `
  select 
    *
  from subjects where subject_id = $1 or subject_id = $2
`;
const UPDATEXAM = `
    update exams
      set finished_at = current_timestamp
    where exam_id = $1
`;
const GETEXAM2 = `
select 
e.exam_id,
e.subject_1,
e.subject_2,
e.unversity_id,
e.faculty_id,
e.created_at,
e.finished_at,
json_agg(
  u.*
) as user,
json_agg(
  un.*
) as unversity,
json_agg(
  f.*
) as faculty
from exams as e
left join users as u on e.user_id = u.user_id
left join unversities as un on e.unversity_id = un.unversity_id
left join faculties as f on e.faculty_id = f.faculty_id
group by e.user_id, e.exam_id, e.unversity_id, e.faculty_id
order by e.created_at desc
  `;
const GETANSWERS2 = `
  select 
    u.* ,
  json_agg(
    t.*
  ) as test
  from user_answers as u
  left join tests as t on u.test_id = t.test_id
  group by u.exam_id, u.test_id, u.answer_id, t.test_id
  `;
const GETSUBJECTS2 = `
  select 
    *
  from subjects
  `;
export { POSTEXAM, GETEXAM, GETANSWERS, GETSUBJECTS, UPDATEXAM, GETEXAM2, GETANSWERS2, GETSUBJECTS2, };

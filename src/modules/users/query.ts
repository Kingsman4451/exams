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
    json_agg(
      un.*
    ) as unversity,
    json_agg(
      f.*
    ) as faculty
  from exams as e
  left join unversities as un on e.unversity_id = un.unversity_id
  left join faculties as f on e.faculty_id = f.faculty_id
  left join subjects as s on f.subject_1 = s.subject_id
  where e.user_id = $1 and e.finished_at is not null
  group by e.exam_id, e.unversity_id, e.faculty_id
  `;

const GETANSWERS = `
  select 
    u.* ,
  json_agg(
    t.*
  ) as test
  from user_answers as u
  left join tests as t on u.test_id = t.test_id
  where user_id = $1
  group by u.test_id, u.answer_id, t.test_id
  `;

const GETSUBJECTS = `
  select 
    *
  from subjects
`;

const GETUSER = `
    select
      u.fullname,
      u.username,
      u.contact,
      u.gender,
      r.region
    from users as u
    left join regions as r on u.region_id = r.region_id 
    where user_id = $1
    group by u.user_id, u.region_id, r.region
`;

export { POSTEXAM, GETEXAM, GETANSWERS, GETSUBJECTS, GETUSER };

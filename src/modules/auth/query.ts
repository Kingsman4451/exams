const SIGNINQUERY = `
  select u.* from users as u where lower(username) = lower($1) and password = crypt($2, u.password)
`;

const SIGNUPQUERY = `
  insert into users (fullname, contact, username, password, region_id, gender) values ($1, $2, $3, crypt($4, gen_salt('bf')), $5, $6) returning *
  `;

const CHECKUSER = `
  select u.* from users as u where lower(username) = lower($1) and contact = $2
`;

export { SIGNINQUERY, SIGNUPQUERY, CHECKUSER };

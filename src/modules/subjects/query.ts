const GETSUBJECTS = `
  select * from subjects where subject = 'Matematika' or subject = 'Kimyo'
`;

const GETSUB = `
  select * from subjects
  `;

const GETMAIN = `
  select 
    * 
  from subjects where subject_id = $1
  `;

export { GETSUBJECTS, GETSUB, GETMAIN };

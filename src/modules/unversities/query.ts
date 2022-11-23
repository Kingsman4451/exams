const GETUNVERSITY = `
  select
    u.*,
    json_agg(
      f.*
    ) as faculties
  from unversities as u
  left join faculties as f on f.unversity_id = u.unversity_id
  group by u.unversity_id
`;

const GETUNV = `
select
u.*,
json_agg(
  f.*
) as faculties
from unversities as u
left join faculties as f on f.unversity_id = u.unversity_id
where u.unversity_id = $1
group by u.unversity_id
  `;

export { GETUNVERSITY, GETUNV };

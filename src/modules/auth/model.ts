import { fetch } from "../../lib/postgres.js";
import { SIGNINQUERY, SIGNUPQUERY, CHECKUSER } from "./query.js";

interface signinBody {
  username: never;
  password: never;
}

interface signupBody {
  fullname: never;
  contact: never;
  region: never;
  username: never;
  password: never;
  gender: never;
}

const SIGNIN = async (body: signinBody) => {
  try {
    const { username, password } = body;

    return await fetch(SIGNINQUERY, [username, password]);
  } catch (error) {}
};

const SIGNUP = async (body: signupBody) => {
  try {
    const { fullname, contact, username, password, region, gender } = body;
    const user = await fetch(CHECKUSER, [username, contact]);

    if (user) {
      return;
    }
    return await fetch(SIGNUPQUERY, [
      fullname,
      contact,
      username,
      password,
      region,
      gender,
    ]);
  } catch (error) {}
};

export default {
  SIGNIN,
  SIGNUP,
};

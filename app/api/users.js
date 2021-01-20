import client from "./client";

const ENDPOINT = "/users";

const register = (userInfo) => client.post(ENDPOINT, userInfo);

export default {
  register,
};

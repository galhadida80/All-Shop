import client from "./client";

const ENDPOINT = "/auth";

const login = (email, password) => client.post("/auth", { email, password });

export default {
  login,
};

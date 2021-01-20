import api from "./client";

const ENDPOINT = "/expoPushTokens";

const register = (pushToken) => api.post(ENDPOINT, { token: pushToken });

export default {
  register,
};

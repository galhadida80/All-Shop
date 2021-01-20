import * as SecureStore from "expo-secure-store";
import jwt_decode from "jwt-decode";

const KEY = "authToken";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(KEY, authToken);
  } catch (error) {
    console.log("Error storing the auth token", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(KEY);
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwt_decode(token) : null;
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(KEY);
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};

export default {
  storeToken,
  getUser,
  removeToken,
  getToken,
};

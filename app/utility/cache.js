import { AsyncStorage } from "react-native";
import moment from "moment";
//import logger from './logger'
const PREFIX = "cashe";
const EXPIRY_IN_MINUTES = 5;

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };

    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    // logger.log(error);
  }
};
const isExpired = (item) => {
  const now = moment(Date.now);
  const storedTime = moment(item.timestamp);
  return now.diff(storedTime, "minute") > EXPIRY_IN_MINUTES;
};

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  } catch (error) {
    // logger.log(error);
  }
};

export default {
  store,
  get,
};

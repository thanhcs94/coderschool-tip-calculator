import { AsyncStorage } from 'react-native';

export default {
  getFromStorage: getFromStorage,
  setToStorage: setToStorage
};

async function getFromStorage(key) {
  try {
    return await AsyncStorage.getItem(key);

  } catch (e) {
    // TODO test the reject case here,
    // currently, it may not work
    return Promise.reject(e);
  }
}

async function setToStorage(key, stringValue) {
  try {
    return await AsyncStorage.setItem(
      key, stringValue
    );

  } catch (e) {
    return Promise.reject(e);
  }
}
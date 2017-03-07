import { AsyncStorage } from 'react-native';

export default {
  getFromStorage: getFromStorage,
  setToStorage: setToStorage
};

async function getFromStorage(key) {
  try {
    return await AsyncStorage.getItem(key);

  } catch (e) {
    Promise.reject(e);
  }
}

async function setToStorage(key, stringValue) {
  try {
    return await AsyncStorage.setItem(
      key, stringValue
    );

  } catch (e) {
    Promise.reject(e);
  }
}
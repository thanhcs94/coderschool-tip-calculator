import { 
  AsyncStorage
} from 'react-native';

const KEY_SCENE_TRANSLATION = '@setting:scene_translation';

function getSceneTranslationSetting() {
  
}

async function setSceneTranslationSetting(value) {
  try {
     return await AsyncStorage.setItem(KEY_SCENE_TRANSLATION, value);

  } catch (e) {
    Promise.reject(e);
  }
}

async function getSceneTranslationSetting(value) {
  try {
     return await AsyncStorage.getItem(KEY_SCENE_TRANSLATION);

  } catch (e) {
    Promise.reject(e);
  }
}

export default {
  setSceneTranslationSetting: setSceneTranslationSetting,
  getSceneTranslationSetting: getSceneTranslationSetting
}
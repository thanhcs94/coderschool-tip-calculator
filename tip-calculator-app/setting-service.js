import { 
  AsyncStorage
} from 'react-native';

const STORAGE_KEY_SCENE_TRANSLATION = '@setting:scene_translation';
const OPTIONS_SCENE_TRANSLATION = [
  {
    label: 'Float From Right',
    value: 'FloatFromRight'
  },
  {
    label: 'Float From Left',
    value: 'FloatFromLeft'
  },
  {
    label: 'Float From Bottom',
    value: 'FloatFromBottom'
  },
  {
    label: 'Float From Bottom Android',
    value: 'FloatFromBottomAndroid'
  },
  {
    label: 'Swipe From Left',
    value: 'SwipeFromLeft'
  },
  {
    label: 'Horizontal Swipe Jump',
    value: 'HorizontalSwipeJump'
  },
  {
    label: 'Horizontal Swipe Jump From Right',
    value: 'HorizontalSwipeJumpFromRight'
  },
];
const DEFAULT_OPTION_SCENE_TRANSLATION = OPTIONS_SCENE_TRANSLATION[0];

async function setSceneTranslationSetting(value) {
  try {
     return await AsyncStorage.setItem(STORAGE_KEY_SCENE_TRANSLATION, value);

  } catch (e) {
    Promise.reject(e);
  }
}

async function getSceneTranslationSetting(value) {
  try {
     return await AsyncStorage.getItem(STORAGE_KEY_SCENE_TRANSLATION);

  } catch (e) {
    Promise.reject(e);
  }
}

export default {
  setSceneTranslationSetting: setSceneTranslationSetting,
  getSceneTranslationSetting: getSceneTranslationSetting,
  OPTIONS_SCENE_TRANSLATION: OPTIONS_SCENE_TRANSLATION,
  DEFAULT_OPTION_SCENE_TRANSLATION: DEFAULT_OPTION_SCENE_TRANSLATION
}
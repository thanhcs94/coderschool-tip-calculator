import SettingModel from '../models/setting-model';
import Utils from './../utils';

export default class SettingStore {
  constructor() {
    this.setting = new SettingModel();
  }

  init() {
    return this
      // Load the setting from storage
      .getSettingFromStorage()
      .then((storageValue) => {
        // If this is the first time open app, 
        // then storageValue will be null
        if (storageValue === null) {
          // Run with default value
          this.setting.sceneTranslation =
            this.getDefaultSceneTranslationOptions().value;

        } else {
          let settingObject = JSON.parse(storageValue);

          for (key in settingObject) {
            this.setting[ key ] = settingObject[ key ];
          }
        }

        return this.setting;
      });
  }

  // Async function
  setSettingToStorage() {
    return Utils.setToStorage(
      this.STORAGE_KEY, 
      this.setting.toString()
    );
  }

  // Async function
  getSettingFromStorage() {
    return Utils.getFromStorage(
      this.STORAGE_KEY
    );
  }

  getSetting() {
    return this.setting;
  }

  getSceneTranslationOptions() {
    return this.SCENE_TRANSLATION_OPTIONS;
  }

  getDefaultSceneTranslationOptions() {
    return this.SCENE_TRANSLATION_OPTIONS[0];
  }

  STORAGE_KEY = '@setting';
  SCENE_TRANSLATION_OPTIONS = [
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
  ]
}


import SettingModel from '../models/setting-model';
import Utils from './../utils';

export default class SettingStore {
  constructor() {
    this.settingModel = new SettingModel();
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
          this.settingModel.sceneTranslation =
            this.getDefaultSceneTranslationOptions().value;

        } else {
          let settingObject = JSON.parse(storageValue);

          for (key in settingObject) {
            this.settingModel[ key ] = settingObject[ key ];
          }
        }

        return this.settingModel;
      });
  }

  // Async function
  setSettingToStorage() {
    return Utils.setToStorage(
      this.STORAGE_KEY, 
      this.settingModel.toString()
    );
  }

  // Async function
  getSettingFromStorage() {
    return Utils.getFromStorage(
      this.STORAGE_KEY
    );
  }

  getSettingModel() {
    return this.settingModel;
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


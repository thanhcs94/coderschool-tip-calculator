import {extendObservable} from 'mobx';

export default class SettingModel {
  constructor(setting) {
    setting = setting || {};
    extendObservable(this, {
      sceneTranslation: setting.sceneTranslation
    });
  }

  toString() {
    JSON.stringify({
      sceneTranslation: this.sceneTranslation
    })
  }

  setSceneTranslation(value) {
    this.sceneTranslation = value;
  }
}
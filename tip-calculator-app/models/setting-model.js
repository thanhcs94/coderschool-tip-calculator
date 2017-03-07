export default class SettingModel {
  constructor(setting) {
    setting = setting || {};
    this.sceneTranslation = setting.sceneTranslation;
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
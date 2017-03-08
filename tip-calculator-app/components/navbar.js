import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { 
  View,
  Text,
  Navigator,
  TouchableOpacity
} from 'react-native';

import { STATES } from '../constants';

export default class Navbar {
  constructor(settingStore) {
    this.settingStore = settingStore;

    this.routeMapper = {
      Title: this._getTitle.bind(this),
      LeftButton: () => (<Text></Text>),
      RightButton: this._getRightButton.bind(this)
    }
  }

  getNavbarElement() {
    return (
      <Navigator.NavigationBar
        routeMapper={ this.routeMapper }
        navigationStyles={Navigator.NavigationBar.StylesIOS}
      />
    );
  }

  _getRightButton(route, navigator, index, navState) {
    switch (route.name) {
      case STATES.setting.name:
        return this._getSaveBtn(...arguments);
      default:
        return this._getSettingBtn(...arguments);
    }
  }

  _getSaveBtn(route, navigator, index, navState) {
    return (
      <TouchableOpacity onPress={ onSaveBtnPress.bind(this) }>
        <Text>Save</Text>
      </TouchableOpacity>
    );

    function onSaveBtnPress() {
      this
        .settingStore
        .setSettingToStorage()
        .then((resp) => {
          navigator.pop();
        })
        .catch((error) => { console.log(error) })
    }
  }

  _getSettingBtn(route, navigator, index, navState) {
    return (
      <TouchableOpacity 
        onPress={ onSettingBtnPress.bind(this) }
      >
        <Text>Setting</Text>
      </TouchableOpacity>
    );

    function onSettingBtnPress() {
      navigator.push(STATES.setting);
    }
  }

  _getTitle(route, navigator, index, navState) {
    return (
      <Text>{ route.title }</Text>
    )
  }
}
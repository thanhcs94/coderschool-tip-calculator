import React, { Component } from 'react';
import { 
  View,
  Text,
  Navigator,
  TouchableOpacity
} from 'react-native';
import TipCalculator from './tip-calculator';
import Setting from './setting';
import { STATES } from './constants';

function getRightButton(route, navigator, index, navState) {
  switch (route.name) {
    case STATES.setting.name:
      return (
        <TouchableOpacity onPress={ onSaveBtnPress }>
          <Text>Save</Text>
        </TouchableOpacity>
      );
    default:
      return (
        <TouchableOpacity onPress={ onSettingBtnPress }>
          <Text>Setting</Text>
        </TouchableOpacity>
      );
  }

  function onSaveBtnPress() {
    navigator.pop();
  }

  function onSettingBtnPress() {
    navigator.push(STATES.setting);
  }
}

const routeMapper = {
  Title: () => (<Text></Text>),
  LeftButton: () => (<Text></Text>),
  RightButton: getRightButton
}

export default (
  <Navigator.NavigationBar
    routeMapper={ routeMapper }
  />
);
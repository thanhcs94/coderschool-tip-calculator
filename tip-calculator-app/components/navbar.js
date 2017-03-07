import React, { Component } from 'react';
import { 
  View,
  Text,
  Navigator,
  TouchableOpacity
} from 'react-native';

import { STATES } from '../constants';

const routeMapper = {
  Title: getTitle,
  LeftButton: () => (<Text></Text>),
  RightButton: getRightButton
}

export default (
  <Navigator.NavigationBar
    routeMapper={ routeMapper }
    navigationStyles={Navigator.NavigationBar.StylesIOS}
  />
);



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

function getTitle(route, navigator, index, navState) {
  return (
    <Text>{ route.title }</Text>
  )
}
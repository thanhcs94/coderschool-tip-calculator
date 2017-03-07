import React, { Component } from 'react';
import { 
  View,
  Navigator,
} from 'react-native';

import { STATES } from './constants';

import TipCalculator from './components/tip-calculator';
import Setting from './components/setting';
import Navbar from './components/navbar';

import SettingStore from './stores/setting-store';

var settingStore = new SettingStore();

export default class Main extends Component {
  renderScene(route, navigator) {
    let mainContent;

    switch (route.name) {
      case STATES.setting.name:
        mainContent = <Setting settingStore={ settingStore } />;
        break;

      default:
        mainContent = <TipCalculator />
    }

    return (
      <View 
        style={{paddingTop:50, backgroundColor:"white", height: "100%"}}
      >
        { mainContent }
      </View>
    );
  }

  render() {
    return (
      <Navigator
        navigationBar={ Navbar }
        initialRoute={ STATES.setting }
        renderScene={ this.renderScene.bind(this) }
      />
    );
  }
}
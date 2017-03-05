import React, { Component } from 'react';
import { 
  View,
  Button,
  Navigator,
  TouchableOpacity
} from 'react-native';
import TipCalculator from './tip-calculator';
import Setting from './setting';
import { STATES } from './constants';
import Navbar from './navbar';

export default class Main extends Component {
  renderScene(route, navigator) {
    let mainContent;

    switch (route.name) {
      case STATES.setting.name:
        mainContent = <Setting />;
        break;

      default:
        mainContent = <TipCalculator />
    }

    return mainContent;
  }

  render() {
    return (
      <Navigator
        navigationBar={ Navbar }
        initialRoute={ STATES.main }
        renderScene={ this.renderScene.bind(this) }
      />
    );
  }
}
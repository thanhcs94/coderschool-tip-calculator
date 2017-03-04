import React, { Component } from 'react';
import { 
  View,
  Button,
  Navigator 
} from 'react-native';
import TipCalculator from './tip-calculator';

export default class Main extends Component {
  onSettingBtnPress() {
    console.log("Pressed");
  }

  render() {
    return (
      <View>
        <Button 
          onPress={ this.onSettingBtnPress.bind(this) }
          title="Setting" />
        <TipCalculator />
      </View>
    );
  }
}
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class tip_calculator extends Component {
  TIP_PERCENTAGES = [10, 15, 50];

  constructor(props) {
    super(props);

    this.state = {
      billAmount: 0,
      tipAmount: 0
    }
  }

  onBillAmountInputChangeText(text) {
    this.setState({
      billAmount: parseFloat(text) || 0
    })
  }

  render() {
    const TIP_OPTIONS = 
      this.TIP_PERCENTAGES.map((tipPercentage) => {
        return `${tipPercentage}%`;
      });

    return (
      <View>
        <Text>
          Tip Calculator
        </Text>
        
        <View>
          <Text>
            Bill amount: { this.state.billAmount }
          </Text>
          <TextInput 
            onChangeText={ this.onBillAmountInputChangeText.bind(this) }
            keyboardType='numeric' />
        </View>

        <View>
          <SegmentedControlTab
            values={ TIP_OPTIONS }
            onTabPress={index => console.log(index)}
            />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('tip_calculator', () => tip_calculator);

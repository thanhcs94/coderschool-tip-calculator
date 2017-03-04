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
  TIP_PERCENTAGES = [0.1, 0.15, 0.5];
  DEFAULT_SELECTED_TIP_PERCENTAGE_INDEX = 1;

  constructor(props) {
    super(props);

    this.state = {
      billAmount: 0,
      tipPercentage: 
        this.TIP_PERCENTAGES[
          this.DEFAULT_SELECTED_TIP_PERCENTAGE_INDEX
        ]
    }

    this.TIP_VIEW_OPTIONS = 
      this.TIP_PERCENTAGES.map((tipPercentage) => {
        return `${tipPercentage * 100}%`;
      });
  }

  onBillAmountInputChangeText(text) {
    this.setState({
      billAmount: parseFloat(text) || 0
    })
  }

  getTipAmount() {
    return this.state.billAmount * this.state.tipPercentage;
  }

  render() {
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
            selectedIndex={ this.DEFAULT_SELECTED_TIP_PERCENTAGE_INDEX }
            values={ this.TIP_VIEW_OPTIONS }
            onTabPress={index => console.log(index)}
            />
        </View>

        <View>
          <Text>
            Result: { this.getTipAmount() }
          </Text>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('tip_calculator', () => tip_calculator);

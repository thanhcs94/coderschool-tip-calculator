/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class tip_calculator extends Component {
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
            keyboardType="numeric" />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('tip_calculator', () => tip_calculator);

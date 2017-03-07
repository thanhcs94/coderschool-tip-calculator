import React, { Component } from 'react';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {
  Text,
  View,
  Button,
  TextInput,
  Navigator
} from 'react-native';
import { STATES } from '../constants';

export default class TipCalculator extends Component {
  TIP_PERCENTAGES = [0.1, 0.15, 0.5];
  DEFAULT_SELECTED_TIP_PERCENTAGE_INDEX = 0;

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

  onChangeTipPercentage(index) {
    this.setState({
      tipPercentage: this.TIP_PERCENTAGES[index] || 0
    })
  }

  getTipAmount() {
    return (this.state.billAmount * this.state.tipPercentage) || 0;
  }

  render() {
    return (
      <View>
        <View>
          <TextInput 
            placeholder="Enter your bill amount"
            onChangeText={ this.onBillAmountInputChangeText.bind(this) }
            keyboardType='numeric' />
        </View>

        <View>
          <Text>Choose your tip ratio:</Text>
          <SegmentedControlTab
            selectedIndex={ this.DEFAULT_SELECTED_TIP_PERCENTAGE_INDEX }
            values={ this.TIP_VIEW_OPTIONS }
            onTabPress={ this.onChangeTipPercentage.bind(this) }
            />
        </View>

        <View style={{ marginTop:10 }}>
          <Text style={{ fontWeight:"bold", fontSize:20 }}>
            Result: { this.getTipAmount().toFixed(2) }
          </Text>
        </View>
      </View>
    );
  }
}
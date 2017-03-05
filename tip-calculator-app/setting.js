import React, { Component } from 'react';
import { 
  AsyncStorage,
  View,
  Text,
  Picker
} from 'react-native';

export default class Setting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sceneTransition: this.SCENE_TRANSITIONS[0].value
    }
  }

  render() {
    var pickerItems = this.SCENE_TRANSITIONS.map(
      (sceneTransition) => {
        return (
          <Picker.Item 
            key={ sceneTransition.value }
            value={ sceneTransition.value }
            label={ sceneTransition.label } />
        )
      }
    )

    return (
      <View>
        <Text>Scene Transitions</Text>
          <Picker 
            selectedValue={ this.state.sceneTransition }
            onValueChange={ this.onSceneTransitionValueChange.bind(this) } >
            { pickerItems }
          </Picker>
      </View>
    )
  }

  SCENE_TRANSITIONS = [
    {
      label: 'Float From Right',
      value: 'FloatFromRight'
    },
    {
      label: 'Float From Left',
      value: 'FloatFromLeft'
    },
    {
      label: 'Float From Bottom',
      value: 'FloatFromBottom'
    },
    {
      label: 'Float From Bottom Android',
      value: 'FloatFromBottomAndroid'
    },
    {
      label: 'Swipe From Left',
      value: 'SwipeFromLeft'
    },
    {
      label: 'Horizontal Swipe Jump',
      value: 'HorizontalSwipeJump'
    },
    {
      label: 'Horizontal Swipe Jump From Right',
      value: 'HorizontalSwipeJumpFromRight'
    },
  ];

  onSceneTransitionValueChange(value) {
    this.setState({
      sceneTransition: value
    });
  }
}
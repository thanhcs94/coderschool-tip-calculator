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

    this.SCENE_TRANSLATION_OPTIONS = 
      this.props.settingStore.getSceneTranslationOptions();
  }

  render() {
    var pickerItems = this.SCENE_TRANSLATION_OPTIONS.map(
      (sceneTransition) => {
        return (
          <Picker.Item 
            key={ sceneTransition.value }
            value={ sceneTransition.value }
            label={ sceneTransition.label } />
        )
      }
    )

    if (this.state.loading) {
      return (<View><Text>Loading...</Text></View>);
    }

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

  onSceneTransitionValueChange(value) {
    this.setState({
      sceneTransition: value
    });
  }
}

Setting.propTypes = {
	settingStore: React.PropTypes.object.isRequired
}
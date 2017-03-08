import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { 
  AsyncStorage,
  View,
  Text,
  Picker
} from 'react-native';


class Setting extends Component {

  constructor(props) {
    super(props);

    this.SCENE_TRANSLATION_OPTIONS = 
      this.props.settingStore.getSceneTranslationOptions();
    
    this.settingModel =
      this.props.settingStore.getSetting();
  }

  render() {
    var pickerItems = this.SCENE_TRANSLATION_OPTIONS.map(
      (sceneTranslation) => {
        return (
          <Picker.Item 
            key={ sceneTranslation.value }
            value={ sceneTranslation.value }
            label={ sceneTranslation.label } />
        )
      }
    )

    return (
      <View>
        <Text>Scene Transitions</Text>
          <Picker 
            selectedValue={ this.settingModel.sceneTranslation }
            onValueChange={ this.handleSceneTransitionChange.bind(this) } >
            { pickerItems }
          </Picker>
      </View>
    )
  }

  handleSceneTransitionChange(value) {
    this.settingModel.setSceneTranslation(
      value
    );
  }
}

export default observer(Setting);

Setting.propTypes = {
	settingStore: React.PropTypes.object.isRequired
}
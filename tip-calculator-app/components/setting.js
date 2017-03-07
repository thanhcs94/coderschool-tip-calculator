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

    this.state = {
      loading: true,
      sceneTransition: null
    }

    this._init();
  }

  _init() {
    SettingService
      // Get value from storage
      .getSceneTranslationSetting()
      .then(onGetSceneTranslationSettingSuccess)

      .catch((e) => {
        // TODO: show error
        console.error(e);
      })
      .then((value) => {
        this.setState({
          loading: false,
          sceneTransition: value
        });
      })
  
    function onGetSceneTranslationSettingSuccess(value) {
      if (value !== null) {
        return value;

      // Occur in the first time app init
      // AsyncStorage will return null value
    } else {
        // Then set the translation setting in storage
        // with the default value
        return SettingService.setSceneTranslationSetting(
          SettingService.DEFAULT_OPTION_SCENE_TRANSLATION.value
        );
      }
    }
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
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { 
  View,
  Navigator,
  Text
} from 'react-native';

import { STATES, DEFAULT_STATE } from './constants';

import TipCalculator from './components/tip-calculator';
import Setting from './components/setting';
import Navbar from './components/navbar';

import SettingStore from './stores/setting-store';

var settingStore = new SettingStore();

export default observer(class Main extends Component {
  constructor(props) {
    super(props);
    let navbar = new Navbar(settingStore);

    this.state = {
      loading: true
    }

    this.settingModel = settingStore.getSetting();
    this.navbarElement = navbar.getNavbarElement();

    this
      ._init()
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        this.setState({
          loading: false
        })
      })
  }

  _init() {
    return Promise.all([
      settingStore.init() // Init setting
    ]);
  }

  renderScene(route, navigator) {
    let mainContent;

    switch (route.name) {
      case STATES.setting.name:
        mainContent = (
          <View>
            <Setting settingStore={ settingStore } />
          </View>
        );
        break;

      default:
        mainContent = <TipCalculator />
    }

    return (
      <View 
        style={{paddingTop:50, backgroundColor:"white", height: "100%"}}
      >
        { mainContent }
      </View>
    );
  }

  render() {
    if (this.state.loading) {
      return (<Text>Loading App...</Text>);
    }

    return (
      <Navigator
        navigationBar={ this.navbarElement }
        initialRoute={ DEFAULT_STATE }
        renderScene={ this.renderScene.bind(this) }
        configureScene={() => {
          return Navigator.SceneConfigs[
            this.settingModel.sceneTranslation || 
            settingStore.getDefaultSceneTranslationOptions().value
          ]
        }}
      />
    );
  }
})
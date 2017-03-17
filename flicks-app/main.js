import React, { Component } from 'react';
import NowPlayingScene from './navigator-scenes/now-playing-scene';
import {
  View, Text
} from 'react-native';

export default class FlicksApp extends Component {
  render() {
    return (
      <View>
        <Text>This is flicks application</Text>
        <NowPlayingScene />
      </View>
    )
  }
}
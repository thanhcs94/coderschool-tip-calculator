import React, { Component } from 'react';
import MovieListView from './../components/movie-list-view/movie-list-view';
import {
  Text
} from 'react-native';

class NowPlayingScene extends Component {
  render() {
    return (
      <Text>
        This is now playing sence
        <MovieListView />
      </Text>
    );
  }
}

export default NowPlayingScene ;
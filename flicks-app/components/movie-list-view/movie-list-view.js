import React, { Component } from 'react';
import MovieItem from './movie-item';
import {
  Text
} from 'react-native';

class MovieList extends Component {
  render() {
    return (
      <Text>
        This is movie list
        <MovieItem />
      </Text>
    );
  }
}

export default MovieList;
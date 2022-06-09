import React from 'react';
import {View} from 'react-native';

import {MovieInfo} from '../components/movie-info.component';

export const MovieScreen = ({route}) => {
  const {movie} = route.params;
  return <MovieInfo movie={movie} />;
};

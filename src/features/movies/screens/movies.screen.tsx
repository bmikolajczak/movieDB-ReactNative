import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {Searchbar} from 'react-native-paper';

import {useGetMoviesQuery} from '../../../services/movies';
import {MovieCard} from '../components/movie.card.component';

export const MoviesScreen = ({navigation}) => {
  const {isError, isSuccess, isLoading, error, data} = useGetMoviesQuery(
    'Avengers Infinity War',
  );
  console.log('error :/', isError);
  //const movies = [...data.results];
  return (
    <ScrollView style={styles.searchContainer}>
      <Text style={styles.text}>What movie you wanna watch?</Text>
      <Searchbar placeholder="Type in your movie" style={styles.searchbar} />
      {isLoading && <Text>Loading...</Text>}
      {isSuccess && console.log('Victory:', data)}
      {data.results.map(elem => (
        <MovieCard navigation={navigation} movie={elem} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    height: '100%',
    paddingTop: 24,
    paddingBottom: 48,
    paddingHorizontal: 24,
  },
  searchbar: {
    width: '100%',
    marginBottom: 16,
  },
  text: {
    color: 'blue',
    fontSize: 24,
  },
});

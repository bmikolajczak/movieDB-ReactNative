import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {Searchbar} from 'react-native-paper';

import {MovieCard} from '../components/movie.card.component';

export const MoviesScreen = () => {
  const arr = [1, 2, 3, 5, 6, 6, 6, 6, 6];
  return (
    <ScrollView style={styles.searchContainer}>
      <Text style={styles.text}>What movie you wanna watch?</Text>
      <Searchbar placeholder="Type in your movie" style={styles.searchbar} />

      {arr.map(elem => (
        <MovieCard />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
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

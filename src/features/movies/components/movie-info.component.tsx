import React from 'react';
import {ScrollView, Image, Text, View, StyleSheet} from 'react-native';
import {Paragraph, Title} from 'react-native-paper';

export const MovieInfo = ({movie = {}}) => {
  const {
    title = 'Title here',
    overview = 'Movie descriptrion',
    vote_count = 0,
    popularity = 10,
    poster_path = 'https://i.etsystatic.com/13513569/r/il/879723/1116897704/il_570xN.1116897704_4zna.jpg',
  }: {
    title: string;
    overview: string;
    vote_count: number;
    popularity: number;
    poster_path: string;
  } = movie;
  console.log('image path:', poster_path);
  return (
    <View style={styles.infoContainer}>
      <View style={styles.textContainer}>
        <Title style={styles.title}>{title}</Title>
        <Text style={styles.text}>Movie id: {movie.id}</Text>
        <Text style={styles.text}>Release date: {movie.release_date}</Text>
        <Paragraph>{overview}</Paragraph>
      </View>
      <Image
        source={{
          uri: `http://image.tmdb.org/t/p/w500/${poster_path}`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    paddingTop: 30,
  },
  textContainer: {
    flexDirection: 'column',
    paddingHorizontal: 16,
  },
  text: {
    color: 'blue',
    fontWeight: '300',
    fontSize: 24,
  },
  title: {
    fontSize: 48,
    fontWeight: '700',
  },
});

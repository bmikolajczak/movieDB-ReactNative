import React from 'react';
import {TouchableOpacity, StyleSheet, NavigatorIOS} from 'react-native';
import {Card, Paragraph, Text, Title} from 'react-native-paper';

export const MovieCard = ({navigation, movie = {}}) => {
  const {
    title = 'Title here',
    overview = 'Movie descriptrion',
    vote_count = 0,
    popularity = 10,
    poster_path = 'https://i.etsystatic.com/13513569/r/il/879723/1116897704/il_570xN.1116897704_4zna.jpg',
  } = movie;
  return (
    <TouchableOpacity
      style={styles.movieContainter}
      onPress={() => navigation.navigate('MovieDetail', {movie: movie})}>
      <Card>
        <Card.Cover
          source={{
            uri: `http://image.tmdb.org/t/p/w500/${poster_path}`,
          }}
          resizeMode="center"
        />
        <Card.Content>
          <Title>{title}</Title>
          <Text>Popularity: {popularity}</Text>
          <Text>Vote count: {vote_count}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  movieContainter: {
    marginBottom: 16,
  },
});

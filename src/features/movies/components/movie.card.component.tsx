import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Card, Paragraph, Title} from 'react-native-paper';

export const MovieCard = () => {
  return (
    <TouchableOpacity style={styles.movieContainter}>
      <Card style={styles.movieCard}>
        <Card.Cover
          source={{
            uri: 'https://i.etsystatic.com/13513569/r/il/879723/1116897704/il_570xN.1116897704_4zna.jpg',
          }}
          resizeMode="contain"
        />
        <Card.Content>
          <Title>Some awesome movie</Title>
          <Paragraph>Cool movie bruuh!</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  movieContainter: {
    marginBottom: 16,
  },
  movieCard: {
    textAlign: 'center',
  },
});

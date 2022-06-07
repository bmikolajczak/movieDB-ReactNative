import React from 'react';
import {ScrollView, Image, Text, View, StyleSheet} from 'react-native';
import {Paragraph, Title} from 'react-native-paper';

export const MovieInfo = () => {
  return (
    <ScrollView style={styles.infoContainer}>
      <Image
        source={{
          uri: 'https://m.media-amazon.com/images/I/71KPOvu-hOL._AC_SL1351_.jpg',
        }}
      />
      <View style={styles.textContainer}>
        <Title style={styles.title}>Movie Title</Title>
        <Text style={styles.text}>Movie genre</Text>
        <Text style={styles.text}>Country of origin</Text>
        <Paragraph>
          Some long movie sinopsis that you can read when mega bored
        </Paragraph>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    height: '100%',
  },
  textContainer: {
    flexDirection: 'column',
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

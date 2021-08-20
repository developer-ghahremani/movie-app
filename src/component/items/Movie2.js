import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../style/colors";
import Container from "../general/Container";
import IImage from "../general/IImage";
import IText from "../general/IText";
import ITouchable from "../general/ITouchable";

const MovieHorizontalItem = ({ movie, onPress }) => {
  const { title, poster } = movie;
  const handleMoviePressed = () => {
    onPress(movie);
  };

  return (
    <ITouchable onPress={handleMoviePressed}>
      <Container style={styles.container}>
        <IImage
          source={{ uri: poster.replace(" =>", ":") }}
          style={styles.cover}
        />
        <IText color={colors.grayLight}>{title}</IText>
      </Container>
    </ITouchable>
  );
};

export default MovieHorizontalItem;

const styles = StyleSheet.create({
  container: {
    width: 150,
    marginHorizontal: 10,
  },
  cover: { width: 120, height: 150, borderRadius: 10 },
});

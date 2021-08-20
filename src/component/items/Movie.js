import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import colors from "../../style/colors";
import Container from "../general/Container";
import IImage from "../general/IImage";
import IText from "../general/IText";
import ITouchable from "../general/ITouchable";
import Row from "../general/Row";
import Star from "../icons/Star";
import RatingBar from "../RatingBar";

const MovieItem = ({ movie, onPress }) => {
  const {
    title,
    year,
    rated,
    released,
    runtime,
    genres,
    Director,
    writer,
    actors,
    plot,
    language,
    country,
    awards,
    poster,
    ratings,
    meta_score,
    imdb_rating,
    imdb_votes,
    imdb_id,
    type,
    dvd,
    box_office,
    production,
    website,
    response,
    id,
  } = movie;

  const handleMoviewDetail = () => {
    onPress(movie);
  };

  return (
    <Container style={styles.container}>
      <Container style={styles.descriptionContainer}>
        <ITouchable style={styles.coverImage} onPress={handleMoviewDetail}>
          <IImage
            resizeMode="center"
            style={styles.coverImage}
            source={{ uri: poster.replace(" =>", ":") }}
          />
        </ITouchable>
        <Container style={{ alignItems: "center" }}>
          <IText bold style={{ textAlign: "center" }}>
            {title}
          </IText>
          <Row align="center">
            <Star color={colors.primaryColor} size={25} />
            <View>
              <IText>{`${imdb_rating}/10`}</IText>
              <IText size={12}>{imdb_votes}</IText>
            </View>
          </Row>
          <Row justify="center" style={{ flexWrap: "wrap" }}>
            {genres.slice(0, 4).map((item) => (
              <View style={styles.genre} key={item}>
                <IText size={12}>{item}</IText>
              </View>
            ))}
          </Row>
          <IText size={12}>
            {plot.length > 100 ? `${plot.substr(0, 100)}...` : plot}
          </IText>
        </Container>
      </Container>
    </Container>
  );
};

export default MovieItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: Dimensions.get("window").height * 0.5,
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: "space-between",
    width: Dimensions.get("window").width * 0.6,
    padding: 20,
    backgroundColor: "white",
    borderTopEndRadius: 15,
    borderTopLeftRadius: 15,
    alignItems: "center",
  },
  coverImage: {
    width: "100%",
    height: 200,
    borderRadius: 20,
  },
  genre: {
    borderRadius: 15,
    marginHorizontal: 3,
    borderWidth: 1,
    borderColor: colors.gray,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    marginVertical: 2,
  },
});

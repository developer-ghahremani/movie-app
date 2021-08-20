import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Container from "../../component/general/Container";
import IImage from "../../component/general/IImage";
import { LinearGradient } from "expo-linear-gradient";
import BackIcon from "../../component/icons/Back";
import ForwardIcon from "../../component/icons/Forward";

const MovieDetailHeader = () => {
  const { goBack } = useNavigation();
  const {
    params: { movie },
  } = useRoute();
  console.log(movie);

  return (
    <Container style={styles.container}>
      <IImage
        style={styles.coverImage}
        resizeMode="cover"
        source={{ uri: movie.poster?.replace(" =>", ":") }}
      />
      <LinearGradient
        colors={["transparent", "#000"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          height: 350,
          position: "absolute",
          width: Dimensions.get("window").width,
        }}
      />

      <Container style={styles.fakeContainer}>
        <IImage
          style={styles.movieImage}
          // resizeMode="cover"
          source={{ uri: movie.poster?.replace(" =>", ":") }}
        />
        <ForwardIcon
          onPress={goBack}
          size={30}
          color="white"
          style={styles.backIcon}
        />
      </Container>
    </Container>
  );
};

export default MovieDetailHeader;

const styles = StyleSheet.create({
  container: {
    height: 350,
  },
  coverImage: {
    width: Dimensions.get("window").width,
    height: 350,
  },
  fakeContainer: {
    width: Dimensions.get("window").width,
    height: 350,
    position: "absolute",
  },
  movieImage: {
    position: "absolute",
    width: 150,
    height: 200,
    bottom: 0,
    left: 10,
    borderRadius: 10,
  },
  backIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { pageName } from "../../../constant";
import IImage from "../../component/general/IImage";
import MovieItem from "../../component/items/Movie";
import { HomeContext } from "./context";

const Movies = () => {
  const { state, setState } = useContext(HomeContext);
  const { navigate } = useNavigation();
  const onChangeSlider = (index) => {
    setState((s) => ({
      ...s,
      selectedMovie: s.movies[index],
      page: index === s.movies.length - 1 ? s.page + 1 : s.page,
    }));
  };

  const handleMovieDetail = (movie) => {
    navigate(pageName.movie.details.index, { movie });
  };

  return (
    <View style={styles.container}>
      <IImage
        source={{ uri: state.selectedMovie?.poster?.replace(" =>", ":") }}
        style={styles.poster}
        resizeMode="cover"
      />
      <Carousel
        itemWidth={Dimensions.get("window").width * 0.7}
        sliderWidth={Dimensions.get("window").width}
        slideStyle={{ alignSelf: "flex-end" }}
        sliderHeight={Dimensions.get("window").height}
        data={state.movies}
        renderItem={({ item }) => (
          <MovieItem onPress={handleMovieDetail} movie={item} />
        )}
        onSnapToItem={onChangeSlider}
      />
    </View>
  );
};

export default Movies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  poster: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});

import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { pageName } from "../../../constant";
import { getMovies } from "../../api/movie";
import Container from "../../component/general/Container";
import IFlatlist from "../../component/general/IFlatlist";
import IText from "../../component/general/IText";
import MovieHorizontalItem from "../../component/items/Movie2";
import colors from "../../style/colors";

const RelatedMovie = () => {
  const [state, setState] = useState({ movies: [] });
  const { navigate } = useNavigation();
  const {
    params: { movie },
  } = useRoute();
  const { genres } = movie;
  useEffect(() => {
    lodMovies();
  }, [genres]);

  const lodMovies = async () => {
    try {
      const { data } = await getMovies(1, 10, genres, []);
      setState((s) => ({ ...s, movies: data.data.movies }));
    } catch (error) {
      console.log(error.message);
    }
  };

  const handlMoveDetail = (movie) => {
    navigate(pageName.movie.details.index, { movie });
  };

  if (state.movies.length === 0) return null;

  return (
    <Container>
      <IText color={colors.grayLight} size={18} bold style={{ mareginTop: 15 }}>
        Related Movies
      </IText>
      <IFlatlist
        horizontal
        data={state.movies}
        renderItem={({ item }) => (
          <MovieHorizontalItem onPress={handlMoveDetail} movie={item} />
        )}
      />
    </Container>
  );
};

export default RelatedMovie;

const styles = StyleSheet.create({});

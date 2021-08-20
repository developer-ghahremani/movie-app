import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Container from "../../component/general/Container";
import MainLayout from "../../layout/main";
import colors from "../../style/colors";
import { HomeContext } from "./context";
import HomeHeader from "./Header";
import Movies from "./Movies";
import { getMovies } from "./../../api/movie";

const Home = () => {
  const [state, setState] = useState({
    movies: [],
    selectedMovie: {},
    page: 1,
    rows: 10,
  });

  useEffect(() => {
    console.log("get shudema");
    loadMovies();
  }, [state.page]);

  const loadMovies = async () => {
    try {
      const { data } = await getMovies(state.page, state.rows);
      setState((s) => ({
        ...s,
        movies: data.data.movies,
        selectedMovie: data.data.movies[0],
      }));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <HomeContext.Provider value={{ state, setState }}>
      <MainLayout>
        <Container style={styles.container}>
          <HomeHeader />
          <Movies />
        </Container>
      </MainLayout>
    </HomeContext.Provider>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondaryColor,
    flex: 1,
  },
});

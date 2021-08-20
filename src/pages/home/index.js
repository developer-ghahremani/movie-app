import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Container from "../../component/general/Container";
import MainLayout from "../../layout/main";
import colors from "../../style/colors";
import { HomeContext } from "./context";
import HomeHeader from "./Header";
import Movies from "./Movies";
import { getMovies } from "./../../api/movie";
import FilterMovie from "../../component/modal/FilterMovie";

const Home = () => {
  const [state, setState] = useState({
    movies: [],
    selectedMovie: {},
    page: 1,
    rows: 10,
    filterMovieModal: false,
    genres: [],
    searchText: "",
    languages: [],
  });

  useEffect(() => {
    loadMovies();
  }, [state.page, state.genres, state.languages]);

  useEffect(() => {
    if (state.searchText.length > 2) loadMovies();
    if (state.searchText.length === 0) loadMovies();
  }, [state.searchText]);

  const loadMovies = async () => {
    try {
      const { data } = await getMovies(
        state.page,
        state.rows,
        state.genres,
        state.languages,
        state.searchText
      );

      setState((s) => ({
        ...s,
        movies: data.data.movies,
        selectedMovie: data.data.movies[0],
      }));
    } catch (error) {
      console.log(error.message);
    }
  };

  const toggleFilterModal = () => {
    setState((s) => ({ ...s, filterMovieModal: !s.filterMovieModal }));
  };

  const handleGenreSelected = (genre) => {
    if (state.genres.find((item) => item.id === genre.id))
      setState((s) => ({
        ...s,
        genres: s.genres.filter((item) => item.id !== genre.id),
      }));
    else setState((s) => ({ ...s, genres: [...s.genres, genre] }));
  };

  const onSearchChange = (searchText) => {
    setState((s) => ({ ...s, searchText }));
  };

  const onChangeLanguage = (language) => {
    if (state.languages.find((item) => item === language))
      setState((s) => ({
        ...s,
        languages: s.languages.filter((item) => item !== language),
      }));
    else
      setState((s) => ({
        ...s,
        languages: [...s.languages, language],
      }));
  };

  return (
    <HomeContext.Provider value={{ state, setState, toggleFilterModal }}>
      <MainLayout>
        <Container style={styles.container}>
          <HomeHeader />
          <Movies />
        </Container>
        <FilterMovie
          onClose={toggleFilterModal}
          visible={state.filterMovieModal}
          totalMovie={state.movies.length}
          //hand genre
          onGenreSelected={handleGenreSelected}
          genre={state.genres}
          //handle search text
          onSearchTextChange={onSearchChange}
          searchText={state.searchText}
          //handle language
          languages={state.languages}
          onLanguageSelected={onChangeLanguage}
        />
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

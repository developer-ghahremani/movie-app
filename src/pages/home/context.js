import { createContext } from "react";

export const HomeContext = createContext({
  state: {
    movies: [],
    selectedMovie: {},
    page: 1,
    rows: 10,
    filterMovieModal: false,
    genres: [],
    searchText: "",
    languages: [],
  },
  setState: () => {},
  toggleFilterModal: () => {},
});

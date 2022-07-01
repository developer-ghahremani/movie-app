import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { getGenre } from "./../../api/genre";
import { setGenres } from "./../../redux/action/genres";

const DataProvider = ({ children }) => {
  const { token } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) loadGenre();
  }, [token]);

  const loadGenre = async () => {
    try {
      const { data } = await getGenre();
      dispatch(setGenres(data.data.genres));
    } catch (error) {
      console.log(error.message);
    }
  };

  return children;
};

export default DataProvider;

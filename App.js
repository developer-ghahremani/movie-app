import { useFonts } from "expo-font";
import React from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";
import IText from "./src/component/general/IText";
import MovieApp from "./src/pages/MovieApp";

const App = () => {
  LogBox.ignoreAllLogs(true);
  const [loaded] = useFonts({
    workSansLight: require("./assets/fonts/websans/WorkSans-Light.ttf"),
    workSansMedium: require("./assets/fonts/websans/WorkSans-Medium.ttf"),
    workSansBold: require("./assets/fonts/websans/WorkSans-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return <MovieApp />;
};

export default App;

const styles = StyleSheet.create({});

import { LogBox, StyleSheet, Text, View } from "react-native";

import DataProvider from "./src/provider/data";
import MovieApp from "./src/pages/MovieApp";
import { Provider } from "react-redux";
import React from "react";
import Toast from "react-native-toast-message";
import { store } from "./src/redux";
import { toastConfig } from "./src/utils/toast";
import { useFonts } from "expo-font";

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

  return (
    <Provider store={store}>
      <DataProvider>
        <MovieApp />
        <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
      </DataProvider>
    </Provider>
  );
};

export default App;

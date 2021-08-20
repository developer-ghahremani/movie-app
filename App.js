import { useFonts } from "expo-font";
import React from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";
import IText from "./src/component/general/IText";
import MovieApp from "./src/pages/MovieApp";
import DataProvider from "./src/provider/data";
import { store } from "./src/redux";
import { toastConfig } from "./src/utils/toast";

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

const styles = StyleSheet.create({});

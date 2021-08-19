import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import router from "./router";

const MovieApp = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {router.map((route) => (
          <Stack.Screen {...route} key={route.name} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MovieApp;

const styles = StyleSheet.create({});

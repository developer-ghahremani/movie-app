import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../style/colors";

const MainLayout = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={colors.secondaryColor} />
      {children}
    </SafeAreaView>
  );
};

export default MainLayout;

const styles = StyleSheet.create({});

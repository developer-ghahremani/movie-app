import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Row = ({ align, justify, children }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: align,
        justifyContent: justify,
      }}>
      {children}
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({});

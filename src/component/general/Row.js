import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Row = ({ pX, pY, align, justify, style, children }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: align,
        justifyContent: justify,
        paddingVertical: pY,
        paddingHorizontal: pX,
        ...style,
      }}>
      {children}
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({});

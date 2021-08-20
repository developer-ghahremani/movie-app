import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../style/colors";
import CheckICon from "../icons/Check";

const ICheckBox = ({ size = 20, selected }) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: selected ? colors.blue : "white",
        ...styles.container,
      }}>
      {selected && <CheckICon size={size - 5} color="white" />}
    </View>
  );
};

export default ICheckBox;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
  },
});

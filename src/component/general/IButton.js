import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IText from "./IText";
import ITouchable from "./ITouchable";
import colors from "./../../style/colors";

const IButton = ({
  color = colors.primaryColor,
  textStyle,
  children,
  ...prp
}) => {
  return (
    <ITouchable style={{ ...styles.btn, backgroundColor: color }} {...prp}>
      <IText style={{ paddingVertical: 10, ...textStyle }}>{children}</IText>
    </ITouchable>
  );
};

export default IButton;

const styles = StyleSheet.create({
  btn: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
});

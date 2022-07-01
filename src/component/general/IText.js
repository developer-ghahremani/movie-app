import { StyleSheet, Text, TextPropTypes, View } from "react-native";

import PropTypes from "prop-types";
import React from "react";
import colors from "../../style/colors";

const IText = ({
  children,
  style,
  bold,
  color = colors.secondaryColor,
  size,
  ...prp
}) => {
  return (
    <Text
      style={{
        fontFamily: bold ? "workSansBold" : "workSansMedium",
        color,
        fontSize: size,
        ...style,
      }}
      {...prp}>
      {children}
    </Text>
  );
};

export default IText;

const styles = StyleSheet.create({});

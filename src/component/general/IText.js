import React from "react";
import { StyleSheet, Text, View, TextPropTypes } from "react-native";
import PropTypes from "prop-types";
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

IText.propTypes = {
  ...TextPropTypes,
  type: PropTypes.oneOf(["salam", "by"]),
};

const styles = StyleSheet.create({});

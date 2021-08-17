import React from "react";
import { StyleSheet, Text, View, TextPropTypes } from "react-native";
import PropTypes from "prop-types";

const IText = ({ pY = 5, children }) => {
  return <Text>{children}</Text>;
};

export default IText;

IText.propTypes = {
  ...TextPropTypes,
  type: PropTypes.oneOf(["salam", "by"]),
};

const styles = StyleSheet.create({});

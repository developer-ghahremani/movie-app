import PropTypes from "prop-types";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

const ITouchable = ({ children, ...prp }) => {
  return <TouchableOpacity {...prp}>{children}</TouchableOpacity>;
};

ITouchable.propTypes = {
  ...TouchableOpacityProps,
};

export default ITouchable;

const styles = StyleSheet.create({});

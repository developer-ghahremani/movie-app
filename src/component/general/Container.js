import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, View, ViewPropTypes } from "react-native";

const Container = ({ children, ...prp }) => {
  return <View {...prp}>{children}</View>;
};

Container.propTypes = {
  ...ViewPropTypes,
};

export default Container;

const styles = StyleSheet.create({});

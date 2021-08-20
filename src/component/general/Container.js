import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, View, ViewPropTypes } from "react-native";

const Container = ({ children, pX, pY, style, ...prp }) => {
  return (
    <View
      style={{ paddingHorizontal: pX, paddingVertical: pY, ...style }}
      {...prp}>
      {children}
    </View>
  );
};

Container.propTypes = {
  ...ViewPropTypes,
};

export default Container;

const styles = StyleSheet.create({});

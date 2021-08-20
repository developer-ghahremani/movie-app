import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, View, Image, ImagePropTypes } from "react-native";

const IImage = ({ ...prp }) => {
  return <Image {...prp} />;
};

export default IImage;

IImage.propTypes = {
  ...ImagePropTypes,
};

const styles = StyleSheet.create({});

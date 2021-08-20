import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Star = ({ ...prp }) => {
  return <AntDesign name="star" {...prp} />;
};

export default Star;

const styles = StyleSheet.create({});

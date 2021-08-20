import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const CheckICon = ({ ...prp }) => {
  return <AntDesign name="check" {...prp} />;
};

export default CheckICon;

const styles = StyleSheet.create({});

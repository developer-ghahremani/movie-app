import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CloseIcon = ({ ...prp }) => {
  return <AntDesign name="close" {...prp} />;
};

export default CloseIcon;

const styles = StyleSheet.create({});

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ClockIcon = ({ ...prp }) => {
  return <AntDesign name="clockcircleo" {...prp} />;
};

export default ClockIcon;

const styles = StyleSheet.create({});

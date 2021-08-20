import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ForwardIcon = ({ ...prp }) => {
  return <Ionicons name="chevron-forward" {...prp} />;
};

export default ForwardIcon;

const styles = StyleSheet.create({});

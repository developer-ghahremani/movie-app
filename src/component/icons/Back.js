import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BackIcon = ({ ...prp }) => {
  return <Ionicons name="chevron-back" {...prp} />;
};

export default BackIcon;

const styles = StyleSheet.create({});

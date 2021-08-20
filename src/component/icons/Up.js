import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const UpIcon = ({ ...prp }) => {
  return <Ionicons name="chevron-up" {...prp} />;
};

export default UpIcon;

const styles = StyleSheet.create({});

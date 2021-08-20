import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FilterIcon = ({ ...prp }) => {
  return <AntDesign name="filter" {...prp} />;
};

export default FilterIcon;

const styles = StyleSheet.create({});

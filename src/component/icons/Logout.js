import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Logout = ({ ...prp }) => {
  return <AntDesign name="logout" {...prp} />;
};

export default Logout;

const styles = StyleSheet.create({});

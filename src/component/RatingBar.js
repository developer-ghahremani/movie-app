import { AntDesign } from "@expo/vector-icons";
import { range } from "lodash-es";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Row from "./general/Row";
import Star from "./icons/Star";

const RatingBar = ({ rate }) => {
  return (
    <Row align="center">
      {range(5).map((item) => (
        <AntDesign name={item < rate ? "star" : "staro"} />
      ))}
    </Row>
  );
};

export default RatingBar;

const styles = StyleSheet.create({});

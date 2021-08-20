import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../style/colors";
import IText from "./IText";
import Row from "./Row";
import { MaterialIcons } from "@expo/vector-icons";

import Container from "./Container";

const IToast = ({ ...prp }) => {
  const { type, text1 } = prp;

  return (
    <Container style={styles.container}>
      <Row
        justify="flex-start"
        align="center"
        style={{
          borderStartWidth: 3,
          borderStartColor:
            type === "success"
              ? colors.gray
              : type === "error"
              ? colors.red
              : colors.blue,
        }}>
        <MaterialIcons
          size={24}
          name={type === "success" ? "check-circle-outline" : type}
          color={
            type === "success"
              ? colors.gray
              : type === "error"
              ? colors.red
              : colors.blue
          }
        />
        <IText>{text1}</IText>
      </Row>
    </Container>
  );
};

export default IToast;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    minHeight: 30,
    width: "80%",
    padding: 10,
    backgroundColor: "white",
  },
});

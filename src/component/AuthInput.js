import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../style/colors";
import Container from "./general/Container";
import IInput from "./general/IInput";
import IText from "./general/IText";

const AuthInput = ({ mT, lable, error, touched, ...prp }) => {
  return (
    <Container style={{ marginTop: mT }}>
      <IText size={18} color={colors.grayLight}>
        {lable}
      </IText>
      <IInput {...prp} />
      {touched && error && <IText color={colors.red}>{error}</IText>}
    </Container>
  );
};

export default AuthInput;

const styles = StyleSheet.create({});

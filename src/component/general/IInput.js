import React from "react";
import { StyleSheet, View, TextInput, TextInputProps } from "react-native";
import colors from "../../style/colors";
import Container from "./Container";

const IInput = ({ containerStyle, size = 16, ...prp }) => {
  return (
    <Container style={{ ...styles.container, ...containerStyle }}>
      <TextInput
        style={{
          color: colors.secondaryColor,
          textAlign: "center",
          fontSize: size,
        }}
        {...prp}
      />
    </Container>
  );
};

IInput.propTypes = {
  ...TextInputProps,
};

export default IInput;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: colors.grayLight,
  },
});

import React from "react";
import { BackHandler, StyleSheet, Text, View } from "react-native";
import ICheckBox from "../general/ICheckBox";
import IText from "../general/IText";
import ITouchable from "../general/ITouchable";
import Row from "../general/Row";

const FilterItem = ({ title, onPress, selected }) => {
  // const { id, name } = genre;
  const handPressed = () => {
    onPress();
  };

  return (
    <View style={{ marginVertical: 5 }}>
      <ITouchable onPress={handPressed}>
        <Row align="center" justify="space-between">
          <IText>{title}</IText>
          <ICheckBox selected={selected} />
        </Row>
      </ITouchable>
    </View>
  );
};

export default FilterItem;

const styles = StyleSheet.create({});

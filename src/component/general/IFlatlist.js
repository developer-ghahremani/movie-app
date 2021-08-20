import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const IFlatlist = ({ ...prp }) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => `${index}`}
      {...prp}
    />
  );
};

export default IFlatlist;

const styles = StyleSheet.create({});

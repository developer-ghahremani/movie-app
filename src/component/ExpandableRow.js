import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../style/colors";
import IText from "./general/IText";
import ITouchable from "./general/ITouchable";
import Row from "./general/Row";
import DownICon from "./icons/Down";
import UpIcon from "./icons/Up";

const ExpandableRow = ({ title, extra, onPress, isExpand }) => {
  return (
    <ITouchable onPress={onPress}>
      <Row align="center" justify="space-between" pX={10} pY={10}>
        <Row align="center">
          {isExpand ? (
            <UpIcon size={18} style={{ marginEnd: 10 }} />
          ) : (
            <DownICon size={18} style={{ marginEnd: 10 }} />
          )}
          <IText size={20}>{title}</IText>
        </Row>
        {extra}
      </Row>
      {!isExpand && (
        <View style={{ height: 1, backgroundColor: colors.grayLight2 }} />
      )}
    </ITouchable>
  );
};

export default ExpandableRow;

const styles = StyleSheet.create({});

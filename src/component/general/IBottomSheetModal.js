import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BottomSheet } from "react-native-btr";

const IBottomSheetModal = ({
  visible = false,
  children,
  onClose = () => {},
}) => {
  return (
    <BottomSheet
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      visible={visible}>
      {children}
    </BottomSheet>
  );
};

IBottomSheetModal.propTypes = {
  onClose: PropTypes.func,
  visible: PropTypes.bool,
};

export default IBottomSheetModal;

const styles = StyleSheet.create({});

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { localStorageKeys, pageName } from "../../../constant";
import IText from "../../component/general/IText";
import Row from "../../component/general/Row";
import Logout from "../../component/icons/Logout";
import colors from "../../style/colors";
import { removeFromLocalStorage } from "../../utils/localStorage";
import { useNavigation } from "@react-navigation/native";

const HomeHeader = () => {
  const { replace } = useNavigation();
  const handleLogout = async () => {
    try {
      removeFromLocalStorage(localStorageKeys.token);
      replace(pageName.auth.login);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Row pX={10} pY={10} justify="space-between" align="center">
      <IText color={colors.grayLight}>MovieApp</IText>
      <Logout color={colors.grayLight} size={25} onPress={handleLogout} />
    </Row>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({});

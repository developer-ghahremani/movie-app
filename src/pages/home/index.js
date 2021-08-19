import React from "react";
import { BackHandler, StyleSheet, Text, View } from "react-native";
import { localStorageKeys, pageName } from "../../../constant";
import Container from "../../component/general/Container";
import IText from "../../component/general/IText";
import Row from "../../component/general/Row";
import Logout from "../../component/icons/logout";
import MainLayout from "../../layout/main";
import colors from "../../style/colors";
import { removeFromLocalStorage } from "../../utils/localStorage";

const Home = ({ navigation: { replace } }) => {
  const handleLogout = async () => {
    try {
      removeFromLocalStorage(localStorageKeys.token);
      replace(pageName.auth.login);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <MainLayout>
      <Container
        style={{
          backgroundColor: colors.secondaryColor,
          flex: 1,
          padding: 10,
        }}>
        <Row justify="space-between" align="center">
          <IText color={colors.grayLight}>MovieApp</IText>
          <Logout color={colors.grayLight} size={25} onPress={handleLogout} />
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Home;

const styles = StyleSheet.create({});

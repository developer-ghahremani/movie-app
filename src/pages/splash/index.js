import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IText from "../../component/general/IText";
import Container from "../../component/general/Container";
import MainLayout from "../../layout/main";
import { useNavigation } from "@react-navigation/native";
import { localStorageKeys, pageName } from "../../../constant";
import { getLocalStorage } from "../../utils/localStorage";
import { useDispatch } from "react-redux";
import { setToken } from "./../../redux/action/token";

const Splash = () => {
  const { replace } = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    checkUserExistence();
  }, []);

  const checkUserExistence = async () => {
    try {
      const token = await getLocalStorage(localStorageKeys.token);
      if (token) {
        dispatch(setToken(token));
        return replace(pageName.home.index);
      }
      replace(pageName.auth.login);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <MainLayout>
      <Container style={styles.container}>
        <IText>splash screen</IText>
      </Container>
    </MainLayout>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

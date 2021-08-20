import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainLayout from "../../../layout/main";
import { Video } from "expo-av";
import Container from "../../../component/general/Container";
import IText from "../../../component/general/IText";
import IButton from "../../../component/general/IButton";
import AuthInput from "../../../component/AuthInput";
import { Formik } from "formik";
import * as Yup from "yup";
import { loginUser } from "./../../../api/auth";
import { saveToLocalStorage } from "../../../utils/localStorage";
import { localStorageKeys, pageName } from "../../../../constant";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setToken } from "../../../redux/action/token";

const Login = () => {
  const { replace } = useNavigation();
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Email is required")
      .email("Should be valid email"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long"),
  });

  const handleLogin = async (params) => {
    try {
      const { data } = await loginUser(params);
      await saveToLocalStorage(localStorageKeys.token, data.data.token);
      dispatch(setToken(data.data.token));
      replace(pageName.home.index);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <MainLayout>
      <Container style={styles.container}>
        <Video
          source={require("./../../../../assets/videos/v-1.mp4")}
          shouldPlay
          resizeMode="cover"
          isLooping
          isMuted
          style={styles.videoBackground}
        />
        <View style={styles.fakeShadow} />
        <Formik
          onSubmit={handleLogin}
          initialValues={{
            username: "imdb@digikala.com",
            password: "fr0Nt-End@ta$k",
          }}
          validationSchema={validationSchema}>
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <Container style={styles.loginContainer}>
              <Container>
                <IText size={18} bold color="white">
                  Login using email address
                </IText>
                <AuthInput
                  placeholder="example@example.com"
                  mT={15}
                  lable="Email"
                  value={values.username}
                  error={errors.username}
                  onChangeText={handleChange("username")}
                  touched={touched.username}
                />
                <AuthInput
                  placeholder="password"
                  mT={15}
                  lable="Password"
                  value={values.password}
                  error={errors.password}
                  onChangeText={handleChange("password")}
                  touched={touched.password}
                />
              </Container>
              <IButton onPress={handleSubmit}>Login</IButton>
            </Container>
          )}
        </Formik>
      </Container>
    </MainLayout>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoBackground: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  fakeShadow: {
    backgroundColor: "#00000040",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  loginContainer: {
    flex: 1,
    justifyContent: "space-between",
    padding: 10,
  },
});

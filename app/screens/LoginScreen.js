import React, { useContext, useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import Screen from "../components/Screen";
import {
  ErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/forms";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";

import { loginWithEmail } from "../components/Firebase/firebase";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");
  const [loginError, setLoginError] = useState("");
  // const { login } = useAuth();
  // const [loginFailed, SetLoginFailed] = useState(false);

  // const handleSubmit = async ({ email, password }) => {
  //   const result = await authApi.login(email, password);
  //   if (!result.ok) return SetLoginFailed(true);
  //   SetLoginFailed(false);
  //   login(result.data);
  // };
  async function handleOnLogin(values) {
    const { email, password } = values;

    try {
      await loginWithEmail(email, password);
    } catch (error) {
      setLoginError(error.message);
      console.log(error.message);
    }
  }
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/icon.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleOnLogin}
        validationSchema={validationSchema}
      >
        {/* <ErrorMessage visible={loginFailed} error="invaild email or password" /> */}

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="email"
          keyboardType="default"
          placeholder="Email"
          textContentType="emailAddress"
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="password"
          placeholder="Password"
          secureTextEntry={true}
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
});

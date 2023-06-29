import React, { useState } from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import { useFonts } from "expo-font";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const [fontsLoaded] = useFonts({
    RobotoRegular: require("../assets/fonts/Roboto-Regular.ttf"),
    RobotoMedium: require("../assets/fonts/Roboto-Medium.ttf"),
    RobotoBold: require("../assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const onLogin = () => {
    if (!email || !password) {
      Alert.alert(`Для входу потрібно заповнити обидва поля`);
      return;
    }
    console.log(`Email: ${email} Password: ${password}`);
    Alert.alert("Користувач успішно увійшов");
    setEmail("");
    setPassword("");
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <ImageBackground
          style={styles.backgroundImage}
          source={require("../assets/images/bg.jpg")}
          resizeMode="cover"
        >
            <View style={styles.formWrapper}>
              <Text style={styles.title}>Увійти</Text>
              <View style={styles.form}>
                <View>
                  <TextInput
                    style={{
                      ...styles.input,
                      marginBottom: 16,
                      borderColor: emailFocused ? "#FF6C00" : "#E8E8E8",
                      backgroundColor: emailFocused ? "#FFFFFF" : "#F6F6F6",
                    }}
                  placeholder="Адреса електронної пошти"
                  placeholderTextColor={"#BDBDBD"}
                  keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                    onFocus={() => setEmailFocused(true)}
                    onBlur={() => setEmailFocused(false)}
                  />
                </View>
                <View style={{ position: "relative", marginBottom: 43 }}>
                  <TextInput
                    style={{
                      ...styles.input,
                      borderColor: passwordFocused ? "#FF6C00" : "#E8E8E8",
                    backgroundColor: passwordFocused ? "#FFFFFF" : "#F6F6F6",
                    }}
                  placeholder="Пароль"
                  placeholderTextColor={"#BDBDBD"}
                    autoCapitalize="none"
                    value={password}
                    onChangeText={setPassword}
                    onFocus={() => setPasswordFocused(true)}
                    onBlur={() => setPasswordFocused(false)}
                    secureTextEntry={showPassword}
                  />
                  <TouchableOpacity
                    style={styles.passwordShowButton}
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Text style={styles.passwordShowText}>
                      {showPassword ? "Показати" : "Приховати"}
                    </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={styles.loginButton}
                  onPress={onLogin}
                  >
                  <Text style={styles.loginButtonText}>Увійти</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.footerText}>Немає акаунту?
                      <Text style={styles.footerTextUnderline}>Зареєструватися
                      </Text>
                      </Text>
            </View>
        </ImageBackground>
                  </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  formWrapper: {
    paddingTop: 32,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontFamily: "RobotoMedium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    marginBottom: 32,
    color: "#212121",
  },
  form: {
    marginHorizontal: 25,
  },
  input: {
    fontFamily: "RobotoRegular",
    fontSize: 16,
    height: 50,
    padding: 15,
    borderWidth: 1,
    borderRadius: 12,
  },
  passwordShowButton: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  passwordShowText: {
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  loginButton: {
    borderRadius: 30,
    paddingVertical: 16,
    backgroundColor: "#FF6C00",
  },
  loginButtonText: {
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF",
  },
  footerText: {
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    marginTop: 16,
    marginBottom: 144,
    color: "#1B4371",
  },
  footerTextUnderline: {
        textDecorationLine: 'underline',
  }
});

export default LoginScreen;
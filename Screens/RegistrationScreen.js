import React, { useState } from "react";
import {
  Image,
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
import AddPhoto from "../assets/images/add-photo.svg";
import { AntDesign } from "@expo/vector-icons";

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [loginFocused, setLoginFocused] = useState(false);
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

  const onRegistration = () => {
    if (!login || !email || !password) {
      Alert.alert(`Для реєстрації необхідно заповнити усі поля!`);
      return;
    }
    console.log(`Login: ${login} Email: ${email} Password: ${password}`);
    Alert.alert(
      "Користувацькі дані:",
      `Логін: ${login}\nЕлектронна пошта: ${email}\nПароль: ${password}`
    );
    setLogin("");
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
              <View style={styles.photoContainer}>
                <TouchableOpacity style={styles.addPhoto}>
                  <Image style={styles.avatar} source={AddPhoto} />
                  <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>Реєстрація</Text>
              <View style={styles.form}>
                <View>
                  <TextInput
                    style={{
                      ...styles.input,
                      marginBottom: 16,
                      borderColor: loginFocused ? "#FF6C00" : "#E8E8E8",
                      backgroundColor: loginFocused ? "#FFFFFF" : "#F6F6F6",
                    }}
                  placeholder="Логін"
                  placeholderTextColor={"#BDBDBD"}
                    autoCapitalize="none"
                    value={login}
                    onChangeText={setLogin}
                    onFocus={() => setLoginFocused(true)}
                    onBlur={() => setLoginFocused(false)}
                  />
                </View>
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
                  style={styles.regButton}
                  onPress={onRegistration}
                  >
                  <Text style={styles.regButtonText}>Зареєструватися</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.footerText}>Вже є акаунт? Увійти</Text>
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
    position: "relative",
    paddingTop: 85,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  photoContainer: {
    position: "absolute",
    top: -60,
    left: 137,
    width: 120,
    height: 120, 
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  addPhoto: {
    position: "absolute",
    top: -40,
    right: -106,
  },
  avatar: {},
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
  regButton: {
    borderRadius: 30,
    paddingVertical: 16,
    backgroundColor: "#FF6C00",
  },
  regButtonText: {
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
    marginBottom: 78,
    color: "#1B4371",
  },
});

export default RegistrationScreen;

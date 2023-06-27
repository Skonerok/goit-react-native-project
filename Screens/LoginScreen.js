import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useFonts } from "expo-font";

const LoginScreen = () => {
  const [fontsLoaded] = useFonts({
  RobotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
  RobotoMedium: require('../assets/fonts/Roboto-Medium.ttf'),
  RobotoBold: require('../assets/fonts/Roboto-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../assets/images/bg.jpg")}
        resizeMode="cover"
      >
        <View style={styles.formWrapper}>
        <Text style={styles.title}>Увійти</Text>
        <View style={styles.form}>
          <View>
            <TextInput style={styles.input} placeholder="Адреса електронної пошти" />
          </View>
          <View>
            <TextInput style={styles.input} placeholder="Пароль" secureTextEntry={true} />
          </View>
          <Text style={styles.passwordShow}>
            Показати
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Увійти</Text>
            </TouchableOpacity>
        </View>
                  <Text style={styles.footerText}>Немає акаунту?
                      <Text style={styles.footerTextUnderline}>Зареєструватися
                      </Text>
                      </Text>
      </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
  },
    backgroundImage: {
        flex: 1,
        justifyContent: 'flex-end',
  },
  formWrapper: {
    height: 490,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    },
  title: {
    fontFamily: 'RobotoMedium',
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    marginTop: 92,
    marginBottom: 32,
    color: '#212121',
    },
  form: {
    marginHorizontal: 25,
  },
  input: {
    fontFamily: 'RobotoRegular',
    fontSize: 16,
    height: 50,
    padding: 15,
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#BDBDBD',
    backgroundColor: '#F6F6F6',
  },
  passwordShow: {
    position: 'absolute',
    right: 15,
    bottom: 108,
    fontFamily: 'RobotoRegular',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
  button: {
    marginTop: 25,
    borderRadius: 30,
    paddingVertical: 16,
    backgroundColor: '#FF6C00',
  },
  buttonText: {
    fontFamily: 'RobotoRegular',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  footerText: {
    fontFamily: 'RobotoRegular',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16,
    color: '#1B4371',
    },
    footerTextUnderline: {
        textDecorationLine: 'underline',
  }
});

export default LoginScreen;
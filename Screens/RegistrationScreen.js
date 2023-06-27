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
import AddPhoto from '../assets/images/add-photo.svg';
import { AntDesign } from '@expo/vector-icons';

const RegistrationScreen = () => {
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
        <View style={styles.photoContainer}>
        <TouchableOpacity style={styles.addPhoto}>
          <Image style={styles.avatar} source={AddPhoto} />
          <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
          </TouchableOpacity>
          </View>
        <View style={styles.formWrapper}>
        <Text style={styles.title}>Реєстрація</Text>
        <View style={styles.form}>
          <View>
            <TextInput style={styles.input} placeholder="Логін" />
          </View>
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
            <Text style={styles.buttonText}>Зареєструватися</Text>
            </TouchableOpacity>
        </View>
        <Text style={styles.footerText} >Вже є акаунт? Увійти</Text>
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
  photoContainer: {
    position: 'absolute',
    top: 170,
    left: "48%",
    transform: [{ translateX: -50 }],
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    zIndex: 1,
  },
  addPhoto: {
    position: 'absolute',
    top: -40,
    right: -105,
  },
  avatar: {},
  formWrapper: {
    height: 550,
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
  }
});

export default RegistrationScreen;

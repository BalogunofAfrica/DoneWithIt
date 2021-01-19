import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

import AppButton from "../components/AppButton";
import colors from "../config/colors";

const WelcomeScreen = ({ navigation, route }) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell What you don't need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="login"
          hue="primary"
          onPress={() => navigation.navigate("Login")}
        />
        <AppButton
          title="register"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
    textTransform: "capitalize",
  },
});

export default WelcomeScreen;

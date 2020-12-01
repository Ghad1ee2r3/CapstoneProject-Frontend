import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/actions";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Text,
  TextInput,
} from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

const Login = ({ login, navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
      <View style={styles.background}>
        <ImageBackground
          style={styles.rect}
          imageStyle={styles.rect_imageStyle}
          source={require("../../assets/images/Gradient_ospoIDs.png")}  >
          <View style={styles.logoColumn}>
            <View style={styles.logo}>
              <View style={styles.endWrapperFiller}></View>
              <View style={styles.text3Column}>
                <Text style={styles.text3}>SC</Text>
                <View style={styles.rect7}></View>
              </View>
            </View>
            <View style={styles.form}>
              <View style={styles.usernameColumn}>
                <View style={styles.username}>
                  <EvilIconsIcon
                    name="exclamation"
                    style={styles.icon22}
                  ></EvilIconsIcon>
                  <TextInput
                    style={styles.authTextInput}
                    placeholder=" Phone Number"
                    placeholderTextColor="rgba(255,255,255,1)"
                    value={username}
                    onChangeText={setUsername}
                    autoCapitalize="none"
                  />
                </View>
                <View style={styles.password}>
                  <EvilIconsIcon
                    name="lock"
                    style={styles.icon2}
                  ></EvilIconsIcon>
                  <TextInput
                    style={styles.authTextInput}
                    placeholder="Password"
                    placeholderTextColor="rgba(255,255,255,1)"
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    secureTextEntry={true}
                  />
                </View>
              </View>
              <View style={styles.usernameColumnFiller}></View>

              <TouchableOpacity
                style={styles.button}
                onPress={() => login({ username, password })}
              >
                <Text
                  style={styles.text2}
                  onPress={() => navigation.navigate("Profile")}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.footerTexts}>
            <View style={styles.button2Filler}></View>
            <TouchableOpacity
              onPress={() => navigation.replace("Signup")}
              style={styles.button2}
            >
              <View style={styles.createAccountFiller}></View>
              <Text style={styles.createAccount}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)",
  },
  background: {
    flex: 1,
  },
  rect: {
    flex: 1,
  },
  rect_imageStyle: {},
  logo: {
    width: 102,
    height: 111,
    alignSelf: "center",
  },
  endWrapperFiller: {
    flex: 1,
  },
  text3: {
    color: "rgba(255,255,255,1)",
    fontSize: 96,
    marginBottom: 4,
  },
  rect7: {
    height: 8,
    backgroundColor: "#25cdec",
    marginRight: 1,
  },
  text3Column: {
    marginBottom: 6,
    marginLeft: 2,
    marginRight: 2,
  },
  form: {
    height: 230,
    marginTop: 59,
  },
  username: {
    height: 59,
    backgroundColor: "rgba(251,247,247,0.25)",
    borderRadius: 5,
    flexDirection: "row",
  },
  icon22: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginLeft: 20,
    alignSelf: "center",
  },
  usernameInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 11,
    marginLeft: 11,
    marginTop: 14,
  },
  password: {
    height: 59,
    backgroundColor: "rgba(253,251,251,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 27,
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 20,
    alignSelf: "center",
  },
  passwordInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 8,
    marginTop: 14,
  },
  usernameColumn: {},
  usernameColumnFiller: {
    flex: 1,
  },
  button: {
    height: 59,
    backgroundColor: "rgba(31,178,204,1)",
    borderRadius: 5,
    justifyContent: "center",
  },
  text2: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
  },
  logoColumn: {
    marginTop: 130,
    marginLeft: 41,
    marginRight: 41,
  },
  logoColumnFiller: {
    flex: 1,
  },
  footerTexts: {
    height: 14,
    marginBottom: 166,
    marginLeft: 37,
    marginRight: 36,
  },
  button2Filler: {
    flex: 1,
  },
  button2: {
    width: 150,
    height: 50,
    marginLeft: 120,
  },
  createAccountFiller: {
    flex: 1,
  },
  createAccount: {
    color: "rgba(255,255,255,0.5)",
  },
});
const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(Login);

import React, { useState } from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { signup } from "../../redux/actions";
import { Text } from "native-base";
import {
  StyleSheet,
  View,
  StatusBar,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const Signup = ({ signup, navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
      <View style={styles.name1Stack}></View>
      <View style={styles.background}>
        <ImageBackground
          style={styles.rect2}
          imageStyle={styles.rect2_imageStyle}
          source={require("../../assets/images/Gradient_ospoIDs.png")}
        >
          <View style={styles.progressBarColumn}>
            <View style={styles.progressBar}>
              <View style={styles.icon2Row}>
                <IoniconsIcon
                  name="md-checkmark-circle"
                  style={styles.icon2}
                ></IoniconsIcon>
                <View style={styles.rect4}></View>
                <EntypoIcon name="time-slot" style={styles.icon3}></EntypoIcon>
                <View style={styles.rect5}></View>
              </View>
              <View style={styles.icon2RowFiller}></View>
              <FontAwesomeIcon
                name="circle"
                style={styles.icon4}
              ></FontAwesomeIcon>
            </View>
            <Text style={styles.text3}>CREATE ACCOUNT</Text>
            <View style={styles.username5}>
              <EvilIconsIcon name="user" style={styles.icon16}></EvilIconsIcon>
              <TextInput
                placeholder=" Phone Number"
                placeholderTextColor="rgba(255,255,255,1)"
                secureTextEntry={false}
                style={styles.usernameInput5}
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
              ></TextInput>
            </View>
            <View style={styles.username1}>
              <EvilIconsIcon name="user" style={styles.icon12}></EvilIconsIcon>
              <TextInput
                placeholder=" Email"
                placeholderTextColor="rgba(255,255,255,1)"
                secureTextEntry={false}
                style={styles.usernameInput1}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
              ></TextInput>
            </View>
            <View style={styles.username4}>
              <EvilIconsIcon name="user" style={styles.icon15}></EvilIconsIcon>
              <TextInput
                placeholder=" First Name"
                placeholderTextColor="rgba(255,255,255,1)"
                secureTextEntry={false}
                style={styles.usernameInput4}
                value={firstname}
                onChangeText={setFirstname}
                autoCapitalize="none"
              ></TextInput>
            </View>
            <View style={styles.username3}>
              <EvilIconsIcon name="user" style={styles.icon14}></EvilIconsIcon>
              <TextInput
                placeholder=" Last Name"
                placeholderTextColor="rgba(255,255,255,1)"
                secureTextEntry={false}
                style={styles.usernameInput3}
                value={lastname}
                onChangeText={setLastname}
                autoCapitalize="none"
              ></TextInput>
            </View>
            <View style={styles.username2}>
              <EvilIconsIcon name="lock" style={styles.icon13}></EvilIconsIcon>
              <TextInput
                placeholder=" Password"
                placeholderTextColor="rgba(255,255,255,1)"
                style={styles.usernameInput2}
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                secureTextEntry={true}
              ></TextInput>
            </View>
          </View>
          <View style={styles.progressBarColumnFiller}></View>
          <View style={styles.buttonColumn}>
            <TouchableOpacity
              onPress={() =>
                signup({ username, email, firstname, lastname, password })
              }
              style={styles.button}
            >
              <Text style={styles.text2}>Continue</Text>
            </TouchableOpacity>
            <Text
              style={styles.iHaveAnAccount}
              onPress={() => navigation.replace("Login")}
            >
              I have an account
            </Text>
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
  name1: {
    top: 0,
    left: 0,
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    position: "absolute",
    right: 0,
    borderRadius: 5,
    flexDirection: "row",
  },
  icon8: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    width: 33,
    height: 33,
    marginLeft: 20,
    alignSelf: "center",
  },
  nameInput1: {
    height: 30,
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    flex: 1,
    marginRight: 17,
    marginLeft: 8,
    marginTop: 14,
  },
  name2: {
    top: 0,
    left: 0,
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    position: "absolute",
    right: 0,
    borderRadius: 5,
    flexDirection: "row",
  },
  icon9: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    width: 33,
    height: 33,
    marginLeft: 20,
    alignSelf: "center",
  },
  nameInput2: {
    height: 30,
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    flex: 1,
    marginRight: 17,
    marginLeft: 8,
    marginTop: 14,
  },
  name3: {
    top: 0,
    left: 0,
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    position: "absolute",
    right: 0,
    borderRadius: 5,
    flexDirection: "row",
  },
  icon10: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    width: 33,
    height: 33,
    marginLeft: 20,
    alignSelf: "center",
  },
  nameInput3: {
    height: 30,
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    flex: 1,
    marginRight: 17,
    marginLeft: 8,
    marginTop: 14,
  },
  name4: {
    top: 0,
    left: 0,
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    position: "absolute",
    right: 0,
    borderRadius: 5,
    flexDirection: "row",
  },
  icon11: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    width: 33,
    height: 33,
    marginLeft: 20,
    alignSelf: "center",
  },
  nameInput4: {
    height: 30,
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    flex: 1,
    marginRight: 17,
    marginLeft: 8,
    marginTop: 14,
  },
  name1Stack: {
    height: 59,
    marginTop: -88,
  },
  background: {
    flex: 1,
    marginTop: 29,
  },
  rect2: {
    flex: 1,
  },
  rect2_imageStyle: {},
  progressBar: {
    height: 18,
    flexDirection: "row",
    marginLeft: 6,
    marginRight: 6,
  },
  icon2: {
    color: "rgba(30,174,199,1)",
    fontSize: 40,
    width: 33,
    height: 40,
  },
  rect4: {
    width: 50,
    height: 7,
    backgroundColor: "rgba(31,178,204,1)",
    borderRadius: 40,
    marginLeft: 6,
    marginTop: 16,
  },
  icon3: {
    color: "#1fb2cc",
    fontSize: 35,
    width: 40,
    height: 36,
    marginLeft: 5,
    marginTop: 4,
  },
  rect5: {
    width: 50,
    height: 7,
    backgroundColor: "rgba(230, 230, 230,1)",
    opacity: 0.75,
    borderRadius: 40,
    marginTop: 16,
  },
  icon2Row: {
    height: 40,
    flexDirection: "row",
  },
  icon2RowFiller: {
    flex: 1,
    flexDirection: "row",
  },
  icon4: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    width: 34,
    height: 40,
    opacity: 0.75,
  },
  text3: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginTop: 45,
    marginLeft: 10,
  },
  username5: {
    height: 59,
    backgroundColor: "rgba(251,247,247,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 45,
  },
  icon16: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginLeft: 20,
    alignSelf: "center",
  },
  usernameInput5: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 11,
    marginLeft: 11,
    marginTop: 14,
  },
  username1: {
    height: 59,
    backgroundColor: "rgba(251,247,247,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 11,
  },
  icon12: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginLeft: 20,
    alignSelf: "center",
  },
  usernameInput1: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 11,
    marginLeft: 11,
    marginTop: 14,
  },
  username4: {
    height: 59,
    backgroundColor: "rgba(251,247,247,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 11,
  },
  icon15: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginLeft: 20,
    alignSelf: "center",
  },
  usernameInput4: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 11,
    marginLeft: 11,
    marginTop: 14,
  },
  username3: {
    height: 59,
    backgroundColor: "rgba(251,247,247,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 10,
  },
  icon14: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginLeft: 20,
    alignSelf: "center",
  },
  usernameInput3: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 11,
    marginLeft: 11,
    marginTop: 14,
  },
  username2: {
    height: 59,
    backgroundColor: "rgba(251,247,247,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 11,
  },
  icon13: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginLeft: 20,
    alignSelf: "center",
  },
  usernameInput2: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 11,
    marginLeft: 11,
    marginTop: 14,
  },
  progressBarColumn: {
    marginTop: 130,
    marginLeft: 53,
    marginRight: 72,
  },
  progressBarColumnFiller: {
    flex: 1,
  },
  button: {
    height: 55,
    backgroundColor: "rgba(247,247,247,0)",
    borderRadius: 5,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    justifyContent: "center",
    marginBottom: 22,
  },
  text2: {
    width: 66,
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
  },
  iHaveAnAccount: {
    color: "rgba(255,255,255,0.5)",
    marginLeft: 200,
  },
  buttonColumn: {
    marginBottom: 95,
    marginLeft: 41,
    marginRight: 41,
  },
});
const mapDispatchToProps = {
  signup,
};

export default connect(null, mapDispatchToProps)(Signup);

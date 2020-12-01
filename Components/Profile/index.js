import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
import { logout } from "../../redux/actions";

//styles
import { Col, Row } from "react-native-easy-grid";
//Components
import LogoutButton from "./LogoutButton";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import Icon from "react-native-vector-icons/Ionicons";

const Profile = ({ user, logout, navigation }) => (
  <View style={styles.container}>
    <View style={styles.ellipseStack}>
      <Svg viewBox="0 0 1797.43 770.3" style={styles.ellipse}>
        <Ellipse
          strokeWidth={1}
          fill="rgba(255,255,255,0.95)"
          cx={899}
          cy={385}
          rx={898}
          ry={385}
        ></Ellipse>
      </Svg>
      <View style={styles.settingsList}>
        <View style={styles.accountSettings}>
          <Text
            style={styles.myBills}
            onPress={() => navigation.navigate("BillsList")}
          >
            My orders {"\n"}
          </Text>

          <Icon name="ios-arrow-forward" style={styles.icon}></Icon>
        </View>
        <View style={styles.accountSettingsFiller}></View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Channels")}
          style={styles.button1}
        >
          <LogoutButton logout={logout} />
        </TouchableOpacity>
      </View>
      <View style={styles.rect}></View>
      <View style={styles.userInfo1}>
        <Text style={styles.userEmail1}>{user?.username}</Text>
        <Text style={styles.userName1}>
          {user?.first_name} {"\n"}
          {user?.last_name}
        </Text>
      </View>
      <Image
        source={require("../../assets/images/ua.jpg")}
        resizeMode="stretch"
        style={styles.avatar1}
      ></Image>
    </View>
    <Text style={styles.pageName}></Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1fb2cc",
    width: 460,
    height: 730,
  },
  ellipse: {
    top: 134,
    left: 0,
    width: 1797,
    height: 770,
    position: "absolute",
  },
  settingsList: {
    height: 347,
    position: "absolute",
    bottom: 319,
    width: 358,
    left: 700,
  },
  accountSettings: {
    height: 57,
    width: 310,
    justifyContent: "center",
    marginTop: 68,
    alignSelf: "center",
  },
  subSettings: {
    height: 90,
    width: 310,
    alignSelf: "center",
  },
  editProfile: {
    height: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  myBills: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    marginTop: 33,
  },
  icon: {
    color: "rgba(31,178,204,1)",
    fontSize: 30,
    alignSelf: "flex-end",
    marginTop: -22,
  },
  accountSettingsFiller: {
    flex: 1,
  },
  button1: {
    height: 59,
    backgroundColor: "rgba(31,178,204,1)",
    borderRadius: 5,
    marginBottom: 117,
    marginLeft: 81,
    marginRight: 81,
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.45,
    shadowRadius: 0,
  },
  logout: {
    color: "rgba(255,255,255,1)",
    fontSize: 19,
    marginTop: 17,
    marginLeft: 68,
  },
  rect: {
    left: 725,
    width: 306,
    height: 220,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    top: 50,
    shadowColor: "rgba(80,79,79,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.39,
    shadowRadius: 0,
    borderRadius: 34,
  },
  userInfo1: {
    left: 730,
    height: 200,
    position: "absolute",
    right: 762,
    top: 152,
  },
  userEmail1: {
    color: "rgba(0,0,0,1)",
    fontSize: 14,
    marginTop: 37,
    marginLeft: 99,
  },
  userName1: {
    color: "#1fb2cc",
    fontSize: 22,
    marginTop: -95,
    marginLeft: 100,
  },
  userEmail2: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    marginTop: 126,
    marginLeft: 80,
  },
  avatar1: {
    top: 0,
    left: 830,
    width: 100,
    height: 100,
    position: "absolute",
    borderRadius: 100,
    opacity: 0.6,
  },
  ellipseStack: {
    height: 904,
    marginTop: 76,
    marginLeft: -675,
    marginRight: -762,
  },
  pageName: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginTop: -946,
    marginLeft: 35,
  },
});

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

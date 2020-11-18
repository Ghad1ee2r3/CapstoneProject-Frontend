import React from "react";
import { Text, View, Button } from "native-base";

// Redux
import { connect } from "react-redux";
import { logout } from "../../redux/actions";

//Components
import LogoutButton from "./LogoutButton";

const Profile = ({ user, logout, navigation }) => (
  <View>
    <Text> Profile</Text>

    <Text>username: {user?.username}</Text>
    <Text>email : {user?.email}</Text>
    <Text>First Name : {user?.first_name}</Text>
    <Text>Last Name : {user?.last_name}</Text>

    {/* <Text button onPress={() => navigation.navigate("previous")}>
    previous bills
    </Text> */}
    <LogoutButton logout={logout} />
  </View>
);

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

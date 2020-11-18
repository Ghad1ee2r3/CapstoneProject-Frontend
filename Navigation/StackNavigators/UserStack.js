import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";
// Screens
import Login from "../../Components/Authentication/Login";
import Signup from "../../Components/Authentication/Signup";
import Profile from "../../Components/Profile";

// Config
import { stackScreenOptions } from "../options";

const { Navigator, Screen } = createStackNavigator();

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(function UserStack({ user }) {
  return (
    <Navigator
      initialRouteName={user ? "Profile" : "Login"}
      screenOptions={stackScreenOptions}
    >
      {user ? (
        <>
          <Screen
            name="Profile"
            component={Profile}
            options={{
              title: "Profile ",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: "rgb(91,192,190)",
              },
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </>
      ) : (
        <>
          <Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Screen
            name="Signup"
            component={Signup}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Navigator>
  );
});

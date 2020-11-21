import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";
// Screens
import Login from "../../Components/Authentication/Login";
import Signup from "../../Components/Authentication/Signup";
import Profile from "../../Components/Profile";
import BillsList from "../../Components/BillsList";
import BillDetail from "../../Components/BillDetail";

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
            }}
          />

          <Screen
            name="BillsList"
            component={BillsList}
            options={{
              title: "Bills List ",
            }}
          />

          {/* <Screen
            name="BillDetail"
            component={BillDetail}
            options={({ route }) => {
              const { bill } = route.params;
              return {
                title: bill.id,
              };
            }}
          /> */}
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

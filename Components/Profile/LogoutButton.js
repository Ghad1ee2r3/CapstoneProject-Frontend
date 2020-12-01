import React from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/actions";
//styles
import { StyleSheet, TouchableOpacity, Text } from "react-native";
const LogoutButton = ({ user, logout }) => (
  <TouchableOpacity style={styles.container} onPress={logout}>
    <Text style={styles.logout}>Logout</Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(31,178,204,1)",
    borderRadius: 5,
    width: 196,
    height: 59,
  },
  logout: {
    color: "rgba(255,255,255,1)",
    fontSize: 19,
    marginTop: 17,
    marginLeft: 68,
  },
});
const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});
export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);

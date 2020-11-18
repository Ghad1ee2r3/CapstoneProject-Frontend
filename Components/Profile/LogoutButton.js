import React from "react";
import { connect } from "react-redux";
import { Button, Text } from "native-base";
import { logout } from "../../redux/actions";
//styles
import styles from "./styles";
const LogoutButton = ({ user, logout }) => (
  <Button style={styles.logoutButton} onPress={logout}>
    <Text>Logout</Text>
  </Button>
);

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});
export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);

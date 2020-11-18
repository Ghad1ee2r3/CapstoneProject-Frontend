import React from "react";
import { Text, View, Button, Thumbnail } from "native-base";

// Redux
import { connect } from "react-redux";
import { logout } from "../../redux/actions";

//styles
import styles from "./styles";
import { Col, Row } from "react-native-easy-grid";
//Components
import LogoutButton from "./LogoutButton";

const Profile = ({ user, logout, navigation }) => (
  <View>
    <Text> Profile</Text>
    <Col padder style={styles.profileContainer}>
      <Row>
        <Col>
          <Text>username: {user?.username}</Text>
          <Text>email : {user?.email}</Text>
          <Text>First Name : {user?.first_name}</Text>
          <Text>Last Name : {user?.last_name}</Text>
        </Col>
      </Row>
    </Col>
    <Row style={styles.rowstyle}>
      <Col>
        <Button
          style={styles.billButton}
          full
          info
          onPress={() => navigation.navigate("BillsList")}
        >
          <Text>My bills</Text>
        </Button>
      </Col>
      <Col>
        <LogoutButton logout={logout} />
      </Col>
    </Row>
  </View>
);

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

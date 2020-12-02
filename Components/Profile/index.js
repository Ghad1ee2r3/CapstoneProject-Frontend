import React from "react";
import { Text, View, Button, Thumbnail, List, ListItem, Left, Body, Right, Icon } from "native-base";

// Redux
import { connect } from "react-redux";
import { logout } from "../../redux/actions";

//styles
import styles from "./styles";
import { Col, Row } from "react-native-easy-grid";
//Components
import LogoutButton from "./LogoutButton";
import { TouchableOpacity } from "react-native-gesture-handler";

const Profile = ({ user, logout, navigation }) => (
  <View style={{ backgroundColor: "#e4e8f0", flex: 1 }} >
    <View style={{ backgroundColor: "rgb(91,192,190)", flex: 2, alignContent: "center", justifyContent: "center", paddingHorizontal: 25 }}>
      <View style={{ flexDirection: "row", height: 70, alignContent: "center", justifyContent: "center", alignItems: "center" }}>
        <Thumbnail style={{ marginRight: 20 }} source={{ uri: 'https://i.stack.imgur.com/l60Hf.png' }} />
        <Text style={{ flex: 1, color: "white", fontSize: 18, fontWeight: "600" }}>Hello {user?.first_name} {user?.last_name}</Text>
      </View>
    </View>
    <View style={{
      backgroundColor: "white",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,

      flex: 4, borderRadius: 50, marginTop: -25, marginHorizontal: 15,
    }}>
      <List style={{ paddingTop: 20, paddingLeft: 15 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { }}
        >
          <ListItem thumbnail>
            <Left>
              <Icon name='person' size={30} color="white" />
            </Left>
            <Body>
              <Text>Profile</Text>
            </Body>
          </ListItem>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { }}
        >
          <ListItem thumbnail>
            <Left>
              <Icon name='settings' size={30} color="white" />
            </Left>
            <Body>
              <Text>Settings</Text>
            </Body>
          </ListItem>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("BillsList")}
        >
          <ListItem thumbnail>
            <Left>
              <Icon name='list' />
            </Left>
            <Body>
              <Text>Orders</Text>
            </Body>
          </ListItem>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { }}
        >
          <ListItem thumbnail>
            <Left>
              <Icon name='eye' />
            </Left>
            <Body>
              <Text>Privacy</Text>
            </Body>
          </ListItem>
        </TouchableOpacity>
      </List>
    </View>

    <View style={{ flex: 2, alignContent: "center", alignItems: "center", justifyContent: "center", paddingHorizontal: 25 }}>
      <LogoutButton logout={logout} />
    </View>
    {/* <Text>username: {user?.username}</Text>
    <Text>email : {user?.email}</Text>
    <Text>First Name : {user?.first_name}</Text>
    <Text>Last Name : {user?.last_name}</Text>
    <Button
      style={styles.billButton}
      full
      info
      onPress={() => navigation.navigate("BillsList")}
    >
      <Text>My bills</Text>
    </Button>
    <LogoutButton logout={logout} /> */}
  </View>
);

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

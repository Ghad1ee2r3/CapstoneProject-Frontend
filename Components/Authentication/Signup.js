import React, { useState } from "react";

import { connect } from "react-redux";
import { signup } from "../../redux/actions";
import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "native-base";
import styles from "./styles";

const Signup = ({ signup, navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  return (
    <View style={styles.authContainer}>
      <Text style={styles.authTitle}>Signup</Text>
      <TextInput
        style={styles.authTextInput}
        placeholder="Username"
        placeholderTextColor="#A6AEC1"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.authTextInput}
        placeholder="Email"
        placeholderTextColor="#A6AEC1"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.authTextInput}
        placeholder="First name"
        placeholderTextColor="#A6AEC1"
        value={firstname}
        onChangeText={setFirstname}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.authTextInput}
        placeholder="Last name"
        placeholderTextColor="#A6AEC1"
        value={lastname}
        onChangeText={setLastname}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.authTextInput}
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.authButton}
        onPress={() =>
          signup({ username, email, firstname, lastname, password })
        }
      >
        <Text style={styles.authButtonText}>Sign up</Text>
      </TouchableOpacity>
      <Text
        style={styles.authOther}
        onPress={() => navigation.replace("Login")}
      >
        Click here to log in!
      </Text>
    </View>
  );
};

const mapDispatchToProps = {
  signup,
};

export default connect(null, mapDispatchToProps)(Signup);

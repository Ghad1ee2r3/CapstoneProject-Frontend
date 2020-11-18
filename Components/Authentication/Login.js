import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/actions";
import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "native-base";
import styles from "./styles";

const Login = ({ login, navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.authContainer}>
      <Text style={styles.authTitle}>Login</Text>
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
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.authButton}
        onPress={() => login({ username, password })}
      >
        <Text
          style={styles.authButtonText}
          onPress={() => navigation.navigate("Profile")}
        >
          Login
        </Text>
      </TouchableOpacity>
      <Text
        style={styles.authOther}
        onPress={() => navigation.replace("Signup")}
      >
        Click here to register!
      </Text>
    </View>
  );
};

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(Login);

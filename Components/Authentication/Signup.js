import React, { useState } from "react";

import { connect } from "react-redux";
import { signup } from "../../redux/actions";
import { Alert, TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "native-base";
import styles from "./styles";

const Signup = ({ signup, navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const handleFormSubmit = () => {
    if (!username.match('05[0-9]{8}')) {
      Alert.alert('Oh No', 'Mobile number is invalid, it should be like this 0591234567')
    }
    else if (password.trim().length < 8) {
      Alert.alert('Oh No', 'Password must be minimum 8 characters')
    }
    else {
      signup({ username, email, firstname, lastname, password })
    }
  }

  return (
    <View style={styles.authContainer}>
      <Text style={styles.authTitle}>Signup</Text>
      <TextInput
        style={styles.authTextInput}
        placeholder="Mobile Number ( 05XXXXXXXX )"
        placeholderTextColor="#A6AEC1"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
      />
      <TextInput
        style={styles.authTextInput}
        placeholder="Email"
        placeholderTextColor="#A6AEC1"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"

      />
      <TextInput
        style={styles.authTextInput}
        placeholder="First name"
        placeholderTextColor="#A6AEC1"
        value={firstname}
        onChangeText={setFirstname}
        autoCapitalize="words"
        textContentType="name"

      />
      <TextInput
        style={styles.authTextInput}
        placeholder="Last name"
        placeholderTextColor="#A6AEC1"
        value={lastname}
        onChangeText={setLastname}
        autoCapitalize="words"
        textContentType="familyName"
      />
      <TextInput
        style={styles.authTextInput}
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        secureTextEntry={true}
        textContentType="password"

      />
      <TouchableOpacity
        style={styles.authButton}
        onPress={() =>
          handleFormSubmit()
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

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    width: null,
    flex: 1,
  },
  authButton: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#5BC0BE",
    marginTop: 30,
  },
  authButtonText: {
    color: "#FCFDFF",
    fontWeight: "bold",
    fontSize: 18,
  },
  authContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FCFDFF",
    paddingRight: 60,
    paddingLeft: 60,
  },
  authOther: {
    color: "rgb(105,79,61)",
    marginTop: 15,
  },
  authTextInput: {
    alignSelf: "stretch",
    textAlign: "left",
    height: 40,
    marginBottom: 30,
    color: "rgb(105,79,61)",
    borderBottomColor: "rgb(105,79,61)",
    borderBottomWidth: 1,
  },
  authTitle: {
    color: "rgb(105,79,61)",
    fontSize: 24,
    marginBottom: 20,
    borderBottomColor: "rgb(105,79,61)",
  },
  profileImage: {
    height: 75,
    width: 150,
    flex: 0.5,
    marginBottom: 10,
  },
  profiletext: {
    textAlign: "left",
    color: "rgb(105,79,61)",
    fontSize: 16,
  },
});

export default styles;

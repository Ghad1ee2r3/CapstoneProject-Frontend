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
    color: "rgb(54,53,55)",
    marginTop: 15,
  },
  authTextInput: {
    alignSelf: "stretch",
    textAlign: "left",
    height: 40,
    marginBottom: 30,
    color: "rgb(54,53,55)",
    borderBottomColor: "rgb(54,53,55)",
    borderBottomWidth: 1,
  },
  authTitle: {
    color: "rgb(54,53,55)",
    fontSize: 24,
    marginBottom: 20,
    borderBottomColor: "rgb(54,53,55)",
  },
  profileImage: {
    height: 75,
    width: 150,
    flex: 0.5,
    marginBottom: 10,
  },
  profiletext: {
    textAlign: "left",
    color: "rgb(54,53,55)",
    fontSize: 16,
  },
});

export default styles;

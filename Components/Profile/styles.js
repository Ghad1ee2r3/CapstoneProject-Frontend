import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  logoutButton: {
    elevation: 50,
    position: "absolute",
    bottom: 0,

    backgroundColor: "#6B717E",
    borderRadius: 50,
    paddingVertical: 50,
    paddingHorizontal: 50,
    marginTop: 100,
  },
  billButton: {
    elevation: 50,
    position: "absolute",
    bottom: 0,
    marginTop: 100,
    backgroundColor: "#6B717E",
    borderRadius: 50,
    paddingVertical: 50,
    paddingHorizontal: 50,
  },
  rowstyle: {
    marginTop: 500,
  },
  profileContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FCFDFF",
    paddingRight: 60,
    paddingLeft: 60,
    paddingTop: 20,
  },
  profileInfo: {
    paddingTop: 20,
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FCFDFF",
    paddingRight: 60,
    paddingLeft: 60,
    paddingTop: 60,
    margin: 60,
  },
});

export default styles;

import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  view: {
    backgroundColor: "#EDEDED",
    height: "100%",
    width: "100%",
    display: "flex"
  },
  fill: {
    flex: 1
  },
  headerButton: {
    color: "white"
  },
  headerIcon: {
    paddingLeft: 20,
    paddingRight: 20
  },
  list: {
    padding: 15,
    width: "100%",
    flex: 1
  },
  listItem: {
    width: "100%",
    marginLeft: 0,
    marginBottom: 10,
    backgroundColor: "white",
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
    color: "#6A6A6A",
    flexDirection: "row"
  },
  listItemTest: {
    width: "100%",
    marginLeft: 0,
    marginBottom: 10,
    backgroundColor: "#555",
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
    color: "#fff",
    flexDirection: "row"
  },
  infoItem: {
    width: "100%",
    marginLeft: 0,
    marginBottom: 0,
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
    color: "#6A6A6A",
    flexDirection: "row"
  },
  listItemTextLeft: {
    color: "#6A6A6A",
    fontWeight: "500",
    fontSize: 16
  },
  listItemTextRight: {
    color: "#6A6A6A",
    fontWeight: "700",
    fontSize: 16
  },
  listItemTextLeftTest: {
    color: "#ddd",
    fontWeight: "500",
    fontSize: 16
  },
  listItemTextRightTest: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16
  },
  textInput: {
    backgroundColor: "white",
    fontWeight: "500",
    fontSize: 15,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 20,
    marginRight: 20,

    borderRadius: 4 //8
  },
  inputLabel: {
    marginLeft: 28,
    marginRight: 28,
    marginTop: 10,
    marginBottom: 5,
    fontWeight: "700",
    color: "#999"
  },
  inputButton: {
    //position: "absolute",
    height: 55,
    //left: 0,
    //right: 0,
    //bottom: 0,
    backgroundColor: "#5b9166",
    borderRadius: 0,
    width: "100%"
  },
  inputButtonText: {
    color: "white",
    textAlign: "center",
    marginTop: 20,
    fontSize: 14,
    fontWeight: "700"
  },
  inputSwitch: {
    marginLeft: 28
  },
  footer: {
    height: 45,
    width: "100%",
    backgroundColor: "white",
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  footerTextMain: {
    textAlign: "center",
    color: "#6A6A6A",
    fontWeight: "700",
    marginTop: 5
  },
  footerTextSole: {
    textAlign: "center",
    color: "#6A6A6A",
    fontWeight: "700",
    marginTop: 12
  },
  footerTextSec: { textAlign: "center", color: "#6A6A6A", fontSize: 12 },
  footerButtonsTextLeft: {
    textAlign: "left",
    color: "#6A6A6A",
    fontSize: 14,
    width: Dimensions.get("window").width / 3,
    fontWeight: "700",
    paddingTop: 5,
    paddingLeft: 10
  },
  footerButtonsTextRight: {
    textAlign: "right",
    color: "#6A6A6A",
    width: Dimensions.get("window").width / 3,
    fontSize: 14,
    fontWeight: "700",
    paddingTop: 5,
    paddingRight: 10
  },
  footerTextMid: {
    textAlign: "center",
    color: "#6A6A6A",

    fontWeight: "700",
    marginTop: 13
  },
  menuTop: {
    backgroundColor: "#3a4351",
    paddingTop: 20
  },
  menuTopItem: {
    color: "#d0d7e2",
    textAlign: "center",
    paddingBottom: 20,
    fontWeight: "600",
    fontSize: 15
  },
  menuTopSpacer: {
    height: 5
  },
  safeAreaGreen: {
    backgroundColor: "#62af87"
  },
  banner: {
    width: "100%"
  },
  premiumBox: {
    width: "100%",
    marginLeft: 0,
    marginBottom: 10,
    backgroundColor: "white",
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
    color: "#6A6A6A",
    borderRadius: 4
  },
  premiumText: {
    color: "#6A6A6A",
    fontWeight: "500",
    fontSize: 16,
    marginBottom: 10
  },
  premiumButton1: {
    backgroundColor: "#404c61",
    padding: 5,
    color: "white",
    borderRadius: 8,
    marginBottom: 10,
    height: 60,
    justifyContent: "center"
  },
  premiumButton2: {
    backgroundColor: "#ccc",
    padding: 5,
    color: "white",
    borderRadius: 8,
    height: 60,
    justifyContent: "center"
  },
  premiumButtonText1: {
    color: "white",
    fontWeight: "700",
    fontSize: 18,
    width: "100%",
    textAlign: "center"
  },
  premiumButtonText2: {
    color: "#444",
    fontWeight: "500",
    fontSize: 16,
    width: "100%",
    textAlign: "center"
  },
  settingsText: {
    marginTop: 10,
    marginBottom: 15,
    fontWeight: "700",
    color: "#999",
    textAlign: "center"
  },
  willkommen: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginTop: 60,
    marginBottom: 20
  },
  titel: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center"
  },
  subtitle: {
    fontSize: 18,
    color: "#777",
    textAlign: "center"
  },
  btnWelcome: {
    padding: 10,
    backgroundColor: "#404c61",
    borderRadius: 16,
    marginLeft: 100,
    marginRight: 100,
    marginTop: 40
  },
  textbtnWelcome: {
    color: "white",
    fontSize: 16,
    textAlign: "center"
  },
  infoText: {
    color: "#aaa",
    fontSize: 12,
    padding: 20
  },
  topBar: {
    height: 50,
    width: "100%",
    backgroundColor: "#614040",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  topBarItemText: {
    color: "white",
    flex: 1,
    fontWeight: "700",
    fontSize: 14,
    width: Dimensions.get("window").width / 5,
    textAlign: "center",
    marginTop: 17
  },
  topBarItemTextSelected: {
    color: "white",
    flex: 1,
    fontWeight: "700",
    fontSize: 14,
    width: Dimensions.get("window").width / 5,
    textAlign: "center",
    backgroundColor: "#775050",
    paddingTop: 17
  }
});

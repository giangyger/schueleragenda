import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { StatusBar } from "react-native";
import Main from "./src/Main";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./src/reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import EntryNew from "./src/components/EntryNew";
//NAVIGATION
const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: Main
    },
    EntryNew: {
      screen: EntryNew
    }
  },
  {
    defaultNavigationOptions: {
      title: "Aufgaben",
      headerStyle: {
        backgroundColor: "#614040",
        borderBottomWidth: 0
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);
const Navigation = createAppContainer(AppNavigator);

//REDUX
let store = createStore(reducer, composeWithDevTools());

export default class App extends Component {
  componentDidMount() {
    //SplashScreen.hide();
  }
  render() {
    return (
      <Provider store={store}>
        <StatusBar backgroundColor="#3a4351" barStyle="light-content" />
        <Navigation />
      </Provider>
    );
  }
}

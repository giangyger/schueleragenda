import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Switch
} from "react-native";
import { connect } from "react-redux";
import DateTimePicker from "@react-native-community/datetimepicker";
import StyleSheet from "../styles/Styles";

import { addItem } from "../actions/actionCreators";

class EntryNew extends Component {
  componentDidMount() {
    console.log(this.props.navigation.getParam("date"));
    this.setState({
      ...this.state,
      date: this.props.navigation.getParam("date")
    });
  }
  state = {
    date: new Date(),
    mode: "date",
    show: false,
    name: "",
    info: "",
    test: false
  };
  hinzufügenHandler = () => {
    this.props.addItem({
      date: this.getDateString(this.state.date),
      className: this.state.name,
      info: this.state.info,
      test: this.state.test
    });
    this.props.navigation.navigate("Main");
  };
  getDateString = date => {
    return (
      date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear()
    );
  };

  setDate = (event, date) => {
    date = date || this.state.date;

    this.setState({
      show: Platform.OS === "ios" ? true : false,
      date
    });
  };
  datepicker = () => {
    this.show("date");
  };

  timepicker = () => {
    this.show("time");
  };
  toggle = value => {
    this.setState({ ...this.state, test: value });
  };
  render() {
    const { show, date, mode } = this.state;
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ ...StyleSheet.view, paddingTop: 5 }}>
          <Text style={StyleSheet.inputLabel}>Fach:</Text>
          <TextInput
            style={StyleSheet.textInput}
            onChangeText={text => {
              this.setState({ ...this.state, name: text });
            }}
            value={this.state.name}
          />
          <Text style={StyleSheet.inputLabel}>Beschreibung:</Text>
          <TextInput
            keyboardType="numeric"
            style={StyleSheet.textInput}
            onChangeText={text => {
              this.setState({ ...this.state, info: text });
            }}
            value={this.state.info}
          />
          <Text style={StyleSheet.inputLabel}>Prüfung:</Text>
          <Switch
            onValueChange={this.toggle}
            value={this.state.test}
            style={{ marginLeft: 20 }}
          />
          <DateTimePicker
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={this.setDate}
          />

          <Text style={StyleSheet.fill} />
          <SafeAreaView style={StyleSheet.safeAreaGreen}>
            <TouchableOpacity onPress={this.hinzufügenHandler.bind(this)}>
              <View style={StyleSheet.inputButton}>
                <Text style={StyleSheet.inputButtonText}>Hinzufügen</Text>
              </View>
            </TouchableOpacity>
          </SafeAreaView>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
//REDUX
const mapStateToProps = state => {
  return {
    data: state.data,
    settings: state.settings
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addItem: item => {
      dispatch(addItem(item));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EntryNew);

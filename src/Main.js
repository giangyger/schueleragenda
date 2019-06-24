import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  AsyncStorage,
  SafeAreaView,
  Platform
} from "react-native";
import { connect } from "react-redux";
import { List, Left, Right } from "native-base";
import StyleSheet from "./styles/Styles";
import { Icon } from "react-native-elements";
import DateTimePicker from "@react-native-community/datetimepicker";

class Main extends Component {
  componentWillMount() {
    if (false) {
    } else {
      const date = new Date();
      var tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      this.setState({
        ...this.state,
        dateToday: date,
        weekDayToday: this.getWeekDay(date),
        dateSelected: tomorrow,
        weekDaySelected: this.getWeekDay(tomorrow)
      });
    }
    this.props.navigation.addListener("didFocus", payload => {
      this.setState(this.state);
    });
  }
  componentDidMount() {
    this.props.navigation.setParams({
      navigateEntryNew: this.navigateEntryNew
    });
  }

  navigateEntryNew = () => {
    this.props.navigation.navigate("EntryNew", {
      date: this.state.dateSelected
    });
  };
  toggleDate = () =>
    this.setState({ ...this.state, showDate: !this.state.showDate });
  //NAVIGATION
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerLeft: (
        <View>
          <TouchableOpacity
            onPress={params.toggleMenu}
            style={StyleSheet.headerIcon}
          >
            <Icon
              name="bars"
              type="font-awesome"
              color="white"
              title="Einstellungen"
            />
          </TouchableOpacity>
        </View>
      ),
      headerRight: (
        <View>
          <TouchableOpacity
            style={StyleSheet.headerIcon}
            onPress={params.navigateEntryNew}
          >
            <Icon
              name="plus"
              type="font-awesome"
              color="white"
              title="Hinzufügen"
            />
          </TouchableOpacity>
        </View>
      )
    };
  };

  nextWeek = () => {
    var nextDate = this.state.dateSelected;
    nextDate.setDate(nextDate.getDate() + 7);
    this.setState({ ...this.state, dateSelected: nextDate });
  };
  lastWeek = () => {
    var nextDate = this.state.dateSelected;
    nextDate.setDate(nextDate.getDate() - 7);
    this.setState({ ...this.state, dateSelected: nextDate });
  };

  getDateString = date => {
    return (
      date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear()
    );
  };

  getWeekDay = date => {
    let day = date.getDay() - 1;
    if (day == -1) {
      day = 6;
    }
    return day;
  };
  state = {
    weekDaySelected: 0,
    dateSelected: null,
    weekDayToday: 1,
    dateToday: null,
    showDate: false
  };
  selectWeekDay = weekDay => {
    console.log("SELECT" + JSON.stringify(this.state));
    const selectedDay = this.state.weekDaySelected;
    const diff = weekDay - selectedDay;
    var newDate = this.state.dateSelected;
    newDate.setDate(newDate.getDate() + diff);
    this.setState({
      ...this.state,
      weekDaySelected: weekDay,
      dateSelected: newDate
    });
    console.log(diff);
  };

  setDate = (event, date) => {
    date = date || this.state.date;

    this.setState({
      ...this.state,
      show: Platform.OS === "ios" ? true : false,
      dateSelected: date
    });
  };

  render() {
    console.log(this.state);
    const { data } = this.props;
    let selected = data[this.getDateString(this.state.dateSelected)];
    console.log(selected);
    if (selected != undefined) {
      let tests = [];
      let homework = [];
      selected.forEach(v => {
        if (v.test) {
          tests.push(v);
        } else {
          homework.push(v);
        }
      });
      selected = tests.concat(homework);
    }
    return (
      <SafeAreaView style={StyleSheet.view}>
        <View style={StyleSheet.topBar}>
          <TouchableOpacity onPress={() => this.selectWeekDay(0)}>
            <Text
              style={
                this.state.weekDaySelected == 0
                  ? StyleSheet.topBarItemTextSelected
                  : StyleSheet.topBarItemText
              }
            >
              Mo
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.selectWeekDay(1)}>
            <Text
              style={
                this.state.weekDaySelected == 1
                  ? StyleSheet.topBarItemTextSelected
                  : StyleSheet.topBarItemText
              }
            >
              Di
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.selectWeekDay(2)}>
            <Text
              style={
                this.state.weekDaySelected == 2
                  ? StyleSheet.topBarItemTextSelected
                  : StyleSheet.topBarItemText
              }
            >
              Mi
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.selectWeekDay(3)}>
            <Text
              style={
                this.state.weekDaySelected == 3
                  ? StyleSheet.topBarItemTextSelected
                  : StyleSheet.topBarItemText
              }
            >
              Do
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.selectWeekDay(4)}>
            <Text
              style={
                this.state.weekDaySelected == 4
                  ? StyleSheet.topBarItemTextSelected
                  : StyleSheet.topBarItemText
              }
            >
              Fr
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={StyleSheet.list}
          data={selected}
          extraData={this.state}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={null}>
              <View
                style={
                  item.test ? StyleSheet.listItemTest : StyleSheet.listItem
                }
              >
                <Left>
                  <Text
                    style={
                      item.test
                        ? StyleSheet.listItemTextRightTest
                        : StyleSheet.listItemTextRight
                    }
                  >
                    {item.className}
                  </Text>
                </Left>
                <Right>
                  <Text
                    style={
                      item.test
                        ? StyleSheet.listItemTextLeftTest
                        : StyleSheet.listItemTextLeft
                    }
                  >
                    {item.info}
                  </Text>
                </Right>
              </View>
            </TouchableOpacity>
          )}
        />
        {this.state.showDate ? (
          <DateTimePicker
            value={this.state.dateSelected}
            mode={"date"}
            is24Hour={true}
            display="default"
            onChange={this.setDate}
          />
        ) : null}

        <View style={StyleSheet.footer}>
          <TouchableOpacity onPress={this.lastWeek}>
            <Text style={{ ...StyleSheet.footerButtonsTextLeft, marginTop: 8 }}>
              -7
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.toggleDate}>
            <Text style={StyleSheet.footerTextMain}>
              {this.getDateString(this.state.dateSelected)}
            </Text>

            <Text style={StyleSheet.footerTextSec}>
              {"Heute: " + this.getDateString(this.state.dateToday)}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.nextWeek}>
            <Text
              style={{ ...StyleSheet.footerButtonsTextRight, marginTop: 8 }}
            >
              +7
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
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
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

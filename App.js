import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'
import { DrawerNavigator } from 'react-navigation'


// Available Pages
import LoginScreen from './Screens/LoginScreen'
import ProfileScreen from './Screens/ProfileScreen'
import EventTypesScreen from './Screens/EventTypesScreen'
import SettingsScreen from './Screens/SettingsScreen'

export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator/>
    );
  }
}


//const AppStackNavigator = StackNavigator({
  //LoginScreen: { screen: LoginScreen },
  //ProfileScreen: { screen: ProfileScreen },
  //EventTypesScreen: { screen: EventTypesScreen },
  //SettingsScreen: { screen: SettingsScreen },
//})


const AppDrawerNavigator = DrawerNavigator({
  LoginScreen: { screen: LoginScreen },
  ProfileScreen: { screen: ProfileScreen },
  EventTypesScreen: { screen: EventTypesScreen },
  SettingsScreen: { screen: SettingsScreen },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});





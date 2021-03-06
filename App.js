import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'
import { DrawerNavigator } from 'react-navigation'


// Available Pages
import LoginScreen from './Screens/LoginScreen'
import ProfileScreen from './Screens/ProfileScreen'
import PlayScreen from './Screens/PlayScreen'
import SettingsScreen from './Screens/SettingsScreen'
import EventBadmintonScreen from './Screens/EventBadmintonScreen'

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
  //PlayScreen: { screen: PlayScreen },
  //SettingsScreen: { screen: SettingsScreen },
//})


const AppDrawerNavigator = DrawerNavigator({
  Login: { screen: LoginScreen },
  Profile: { screen: ProfileScreen },
  Play: { screen: PlayScreen },
  Settings: { screen: SettingsScreen },
  EventBadmintonScreen: { screen: EventBadmintonScreen },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});





import React, { Component } from 'react';
import { ScrollView, KeyboardAvoidingView, View, Text, Image, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';

// Screen Imports
import LoginScreen from '../Screens/LoginScreen'
import ProfileScreen from '../Screens/ProfileScreen'
import SettingsScreen from '../Screens/SettingsScreen'
import PlayScreen from '../Screens/PlayScreen'

//import CreateEventScreen from '../Screens/CreateEventScreen'
//import EventOtherScreen from '../Screens/EventOtherScreen'
//import EventUltimateFrisbeeScreen from '../Screens/EventUltimateFrisbeeScreen'
//import EventVolleyBallScreen from '../Screens/EventVolleyBallScreen'
//import EventTennisScreen from '../Screens/EventTennisScreen'
//import EventSoftballScreen from '../Screens/EventSoftballScreen'
//import EventSoccerScreen from '../Screens/EventSoccerScreen'
//import EventPoolScreen from '../Screens/EventPoolScreen'
//import EventLacrosseScreen from '../Screens/EventLacrosseScreen'
//import EventIceHockeyScreen from '../Screens/EventIceHockeyScreen'
//import EventGolfScreen from '../Screens/EventGolfScreen'
//import EventFrisbeeGolfScreen from '../Screens/EventFrisbeeGolfScreen'
//import EventFootballScreen from '../Screens/EventFootballScreen'
//import EventCricketScreen from '../Screens/EventCricketScreen'
//import EventBowlingScreen from '../Screens/EventBowlingScreen'
//import EventBasketballScreen from '../Screens/EventBasketballScreen'
//import EventBaseballScreen from '../Screens/EventBaseballScreen'
//import EventBadmintonScreen from '../Screens/EventBadmintonScreen'

const AppStackNavigator = StackNavigator({
    
    Login: { screen: LoginScreen },
    Profile: { screen: ProfileScreen },
    Settings: { screen: SettingsScreen },
    Play: { screen: PlayScreen },
}, {
    
    navigationOptions: {
        headerTitle: (
            <Image source={require('../Images/top_logo.png')} style={{ width: 40, height: 40 }}/>
        ),
        style: { 
            backgroundColor: '#404956' 
        },
      }
})

export default AppStackNavigator;
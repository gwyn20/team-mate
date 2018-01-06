import React, { Component } from 'react';
import { ScrollView, KeyboardAvoidingView, View, Text, Image} from 'react-native';
import { TabNavigator } from 'react-navigation'

// Styles
import styles from '../Screens/Styles/ProfileScreenStyles'


class ProfileScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'PROFILE',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../Images/profile.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
    }
        
        render () {
        return (
            <View>
                <Text> This Is The Profile Screen</Text>
            </View>
        )
    }
}

class EventTypesScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'PLAY',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../Images/play.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
    }
        
        render () {
        return (
            <View>
                <Text>This is the event screen</Text>
            </View>
        )
    }
}

class SettingsScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'SETTINGS',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../Images/settings.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
    }
    
    render () {
        return (
            <View>
                <Text> This Is The Settings Screen</Text>
            </View>
        )
    }
}

const ProfileScreenTabNavigator = TabNavigator({
    ProfileScreen: { screen : ProfileScreen },
    EventTypesScreen: { screen : EventTypesScreen },
    SettingsScreen: { screen : SettingsScreen },
  }, {
      animationEnabled: true,
      tabBarOptions: { 
        activeTintColor: '#c9cfd8', 
        inactiveTintColor: '#fff',
        labelStyle: { 
            fontSize: 12, 
            fontWeight: '700',
        },
        style: { 
            backgroundColor: '#404956' 
        },
    }
  })

  export default ProfileScreenTabNavigator;






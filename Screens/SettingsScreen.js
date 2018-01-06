import React, { Component } from 'react';
import { ScrollView, KeyboardAvoidingView, View, Text, Image} from 'react-native';
import { TabNavigator } from 'react-navigation'

// Styles
import styles from '../Screens/Styles/ProfileScreenStyles'

export default class SettingsScreen extends Component {
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
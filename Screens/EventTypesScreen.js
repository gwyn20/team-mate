import React, { Component } from 'react';
import { ScrollView, KeyboardAvoidingView, View, Text, Image} from 'react-native';
import { TabNavigator } from 'react-navigation'

// Styles
import styles from '../Screens/Styles/EventTypesScreenStyles'

export default class EventTypesScreen extends Component {
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
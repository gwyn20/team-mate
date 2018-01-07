import React, { Component } from 'react';
import { ScrollView, KeyboardAvoidingView, View, Text, Image, TouchableHighlight } from 'react-native';
import { Button } from '../Components/Button';
import ResponsiveImage from 'react-native-responsive-image';

import { TabNavigator } from 'react-navigation'
import { StackNavigator } from 'react-navigation';
import ProfileScreen from './ProfileScreen'

// Styles
import styles from '../Screens/Styles/ProfileScreenStyles'

export default class PlayScreenContent extends Component {
       
    render () {
        
        return (
            <ScrollView style={styles.container}>
                <KeyboardAvoidingView behavior='position'>
                    <View style={styles.eventIcon}>
                        <TouchableHighlight onPress={() => { console.log('EventsBadmintonScreen'); }}>
                            <ResponsiveImage source={require('../Images/EventIcons/badmintonIcon.png')} initWidth="138" initHeight="138"/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => { console.log('EventsBaseballScreen'); }}>
                            <ResponsiveImage source={require('../Images/EventIcons/baseballIcon.png')} initWidth="138" initHeight="138"/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => { console.log('EventsBasketballScreen'); }}>
                            <ResponsiveImage source={require('../Images/EventIcons/basketballIcon.png')} initWidth="138" initHeight="138"/>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.eventIcon}>
                        <TouchableHighlight onPress={() => { console.log('EventsBowlingScreen'); }}>
                        <ResponsiveImage source={require('../Images/EventIcons/bowlingIcon.png')} initWidth="138" initHeight="138"/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => { console.log('EventsCricketScreen'); }}>
                        <ResponsiveImage source={require('../Images/EventIcons/cricketIcon.png')} initWidth="138" initHeight="138"/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => { console.log('EventsFootballScreen'); }}>
                            <ResponsiveImage source={require('../Images/EventIcons/footballIcon.png')} initWidth="138" initHeight="138"/>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.eventIcon}>
                        <TouchableHighlight onPress={() => { console.log('EventsFrisbeeGolfScreen'); }}>
                            <ResponsiveImage source={require('../Images/EventIcons/frisbeeGolfIcon.png')} initWidth="138" initHeight="138"/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => { console.log('EventsGolfScreen'); }}>
                            <ResponsiveImage source={require('../Images/EventIcons/golfIcon.png')} initWidth="138" initHeight="138"/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => { console.log('EventsIceHockeyScreen'); }}>
                            <ResponsiveImage source={require('../Images/EventIcons/iceHockeyIcon.png')} initWidth="138" initHeight="138"/>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.eventIcon}>
                        <TouchableHighlight onPress={() => { console.log('EventsLacrosseScreen'); }}>
                            <ResponsiveImage source={require('../Images/EventIcons/lacrosseIcon.png')} initWidth="138" initHeight="138"/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => { console.log('EventsPoolScreen'); }}>
                            <ResponsiveImage source={require('../Images/EventIcons/poolIcon.png')} initWidth="138" initHeight="138"/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => { console.log('EventsSoccerScreen'); }}>
                            <ResponsiveImage source={require('../Images/EventIcons/soccerIcon.png')} initWidth="138" initHeight="138"/>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.eventIcon}>
                        <TouchableHighlight onPress={() => { console.log('EventsSoftballScreen'); }}>
                            <ResponsiveImage source={require('../Images/EventIcons/softballIcon.png')} initWidth="138" initHeight="138"/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => { console.log('EventsTennisScreen'); }}>
                            <ResponsiveImage source={require('../Images/EventIcons/tennisIcon.png')} initWidth="138" initHeight="138"/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => { console.log('EventsUltimateFrisbeeScreen'); }}>
                            <ResponsiveImage source={require('../Images/EventIcons/ultimateFrisbeeIcon.png')} initWidth="138" initHeight="138"/>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.eventIcon}>
                        <TouchableHighlight onPress={() => { console.log('EventsVolleyBallScreen'); }}>
                            <ResponsiveImage source={require('../Images/EventIcons/volleyBallIcon.png')} initWidth="138" initHeight="138"/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => { console.log('EventsOtherScreen'); }}>
                            <ResponsiveImage source={require('../Images/EventIcons/otherIcon.png')} initWidth="138" initHeight="138"/>
                        </TouchableHighlight>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        )
    }
}


  
  
import React, { Component } from 'react';
import { ScrollView, KeyboardAvoidingView, View, Text, Image} from 'react-native';
import { Button } from '../Components/Button';
import { TabNavigator } from 'react-navigation'
import SettingsScreenContent from './SettingsScreen'
import PlayScreenContent from './PlayScreen'
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

        state = {
            FavoriteActivities: false,
            ActivitiesHosting: false,
            ActivitiesAttending: false,
        }
    
        onPressFavoriteActivities() {
            this.setState({
                FavoriteActivities: !this.state.FavoriteActivities,
            });
        }
    
        onPressActivitiesHosting() {
            this.setState({
                ActivitiesHosting: !this.state.ActivitiesHosting,
            });
        }
    
        onPressActivitiesAttending() {
            this.setState({
                ActivitiesAttending: !this.state.ActivitiesAttending,
            });
        }
    
        renderFavoriteActivities() {
            if (this.state.FavoriteActivities) {
                return (
                <View>
                    <Text>Favorite Activity Images</Text>
                </View>
                )  
            }
        }
    
        renderActivitiesHosting() {
            if (this.state.ActivitiesHosting) {
                return (
                <View>
                    <Text>Activities Hosting List</Text>
                </View>
                )
            }
        }
    
        renderActivitiesAttending() {
            if (this.state.ActivitiesAttending) {
                return (
                <View>
                    <Text>Activities Attending List</Text>
                </View>
                )
            }
        }

        render () {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.centered} >
                <Image source={require('../Images/profile.png')} style={styles.profileImage}/>
                <Text style={styles.userName}>
                     
                    USER NAME
                    </Text>
                </View>
                <View style={styles.centered} >
                    <Button
                        onPress={() => 
                            this.onPressFavoriteActivities() }
                            accessibilityLabel="View Favorite Activities"
                    >
                    Favorite Activities
                    </Button>
                    
                    <View style={styles.container}>
                        {this.renderFavoriteActivities()}
                    </View> 

                    <Button
                        onPress={() => 
                            this.onPressActivitiesHosting() }
                            accessibilityLabel="View Activities Hosting"
                    >
                    Activities Hosting
                    </Button>

                    <View style={styles.container}>
                        {this.renderActivitiesHosting()}
                    </View> 

                    <Button
                        onPress={() => 
                        this.onPressActivitiesAttending() }
                        accessibilityLabel="View Activities Attending"
                    >
                    Activities Attending
                    </Button>

                    <View style={styles.container}>
                        {this.renderActivitiesAttending()}
                    </View> 
                </View>

                
            </ScrollView>
        )
    }
}

class PlayScreen extends Component {
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
            <PlayScreenContent/>
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
            <SettingsScreenContent/>
        )
    }
}

const ProfileScreenTabNavigator = TabNavigator({
    ProfileScreen: { screen : ProfileScreen },
    PlayScreen: { screen : PlayScreen },
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






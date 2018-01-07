import React, { Component } from 'react';
import { ScrollView, KeyboardAvoidingView, View, Text, Image, TouchableHighlight } from 'react-native';
import { Button } from '../Components/Button';
import ResponsiveImage from 'react-native-responsive-image';

import { TabNavigator } from 'react-navigation'
import { StackNavigator } from 'react-navigation';
import ProfileScreen from './ProfileScreen'
import EventBadmintonScreen from './EventBadmintonScreen'

// Styles
import styles from '../Screens/Styles/ProfileScreenStyles'

export default class PlayScreenContent extends Component {
    


    state = {
        Badminton: false,
        Baseball: false,
        Basketball: false,
        Bowling: false,
        Cricket: false,
        Football: false,
        FrisbeeGolf: false,
        Golf: false,
        IceHockey: false,
        Lacrosse: false,
        Pool: false,
        Soccer: false,
        Softball: false,
        Tennis: false,
        UltimateFrisbee: false,
        Volleyball: false,
        Other: false,
    
    }

    // BADMINTON
    onPressBadminton() {
        this.setState({
            
        Badminton: !this.state.Badminton,
        Baseball: false,
        Basketball: false,
        Bowling: false,
        Cricket: false,
        Football: false,
        FrisbeeGolf: false,
        Golf: false,
        IceHockey: false,
        Lacrosse: false,
        Pool: false,
        Soccer: false,
        Softball: false,
        Tennis: false,
        UltimateFrisbee: false,
        Volleyball: false,
        Other: false,
        });
    }

    renderBadminton() {
        if (this.state.Badminton) {
            return (
            <View>
                <View style={styles.centered} >
                        <Image source={require('../Images/EventIcons/badmintonIcon.png')} style={styles.eventImage}/>
                    </View>
                    <View style={styles.section} >
                        <Button
                            onPress={() => {
                                console.log('createEventScreen');
                            }}
                            accessibilityLabel="Create A Badminton Event"
                        >
                            Create Event
                        </Button>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/04 - 12/10
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/11 - 12/17
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/18 - 12/24
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/25 - 12/31
                        </Text>
                    </View>
            </View>
            )  
        }
    }

    // BASEBALL
    onPressBaseball() {
        this.setState({
        
        Badminton: false,
        Baseball: !this.state.Baseball,
        Basketball: false,
        Bowling: false,
        Cricket: false,
        Football: false,
        FrisbeeGolf: false,
        Golf: false,
        IceHockey: false,
        Lacrosse: false,
        Pool: false,
        Soccer: false,
        Softball: false,
        Tennis: false,
        UltimateFrisbee: false,
        Volleyball: false,
        Other: false,
        });
    }

    renderBaseball() {
        if (this.state.Baseball) {
            return (
            <View>
                <View style={styles.centered} >
                        <Image source={require('../Images/EventIcons/baseballIcon.png')} style={styles.eventImage}/>
                    </View>
                    <View style={styles.section} >
                        <Button
                            onPress={() => {
                                console.log('createEventScreen');
                            }}
                            accessibilityLabel="Create A Baseball Event"
                        >
                            Create Event
                        </Button>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/04 - 12/10
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/11 - 12/17
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/18 - 12/24
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/25 - 12/31
                        </Text>
                    </View>
            </View>
            )  
        }
    }

    // BASKETBALL
    onPressBasketball() {
        this.setState({
            
        Badminton: false,
        Baseball: false,
        Basketball: !this.state.Basketball,
        Bowling: false,
        Cricket: false,
        Football: false,
        FrisbeeGolf: false,
        Golf: false,
        IceHockey: false,
        Lacrosse: false,
        Pool: false,
        Soccer: false,
        Softball: false,
        Tennis: false,
        UltimateFrisbee: false,
        Volleyball: false,
        Other: false,
        });
    }

    renderBasketball() {
        if (this.state.Basketball) {
            return (
            <View>
                <View style={styles.centered} >
                        <Image source={require('../Images/EventIcons/basketballIcon.png')} style={styles.eventImage}/>
                    </View>
                    <View style={styles.section} >
                        <Button
                            onPress={() => {
                                console.log('createEventScreen');
                            }}
                            accessibilityLabel="Create A Basketball Event"
                        >
                            Create Event
                        </Button>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/04 - 12/10
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/11 - 12/17
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/18 - 12/24
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/25 - 12/31
                        </Text>
                    </View>
            </View>
            )  
        }
    }

    // BOWLING
    onPressBowling() {
        this.setState({
            
        Badminton: false,
        Baseball: false,
        Basketball: false,
        Bowling: !this.state.Bowling,
        Cricket: false,
        Football: false,
        FrisbeeGolf: false,
        Golf: false,
        IceHockey: false,
        Lacrosse: false,
        Pool: false,
        Soccer: false,
        Softball: false,
        Tennis: false,
        UltimateFrisbee: false,
        Volleyball: false,
        Other: false,
        });
    }

    renderBowling() {
        if (this.state.Bowling) {
            return (
            <View>
                <View style={styles.centered} >
                        <Image source={require('../Images/EventIcons/bowlingIcon.png')} style={styles.eventImage}/>
                    </View>
                    <View style={styles.section} >
                        <Button
                            onPress={() => {
                                console.log('createEventScreen');
                            }}
                            accessibilityLabel="Create A Bowling Event"
                        >
                            Create Event
                        </Button>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/04 - 12/10
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/11 - 12/17
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/18 - 12/24
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/25 - 12/31
                        </Text>
                    </View>
            </View>
            )  
        }
    }

    // CRICKET
    onPressCricket() {
        this.setState({
            
        Badminton: false,
        Baseball: false,
        Basketball: false,
        Bowling: false,
        Cricket: !this.state.Cricket,
        Football: false,
        FrisbeeGolf: false,
        Golf: false,
        IceHockey: false,
        Lacrosse: false,
        Pool: false,
        Soccer: false,
        Softball: false,
        Tennis: false,
        UltimateFrisbee: false,
        Volleyball: false,
        Other: false,
        });
    }

    renderCricket() {
        if (this.state.Cricket) {
            return (
            <View>
                <View style={styles.centered} >
                        <Image source={require('../Images/EventIcons/cricketIcon.png')} style={styles.eventImage}/>
                    </View>
                    <View style={styles.section} >
                        <Button
                            onPress={() => {
                                console.log('createEventScreen');
                            }}
                            accessibilityLabel="Create A Cricket Event"
                        >
                            Create Event
                        </Button>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/04 - 12/10
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/11 - 12/17
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/18 - 12/24
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/25 - 12/31
                        </Text>
                    </View>
            </View>
            )  
        }
    }

    // FOOTBALL
    onPressFootball() {
        this.setState({
            
        Badminton: false,
        Baseball: false,
        Basketball: false,
        Bowling: false,
        Cricket: false,
        Football: !this.state.Football,
        FrisbeeGolf: false,
        Golf: false,
        IceHockey: false,
        Lacrosse: false,
        Pool: false,
        Soccer: false,
        Softball: false,
        Tennis: false,
        UltimateFrisbee: false,
        Volleyball: false,
        Other: false,
        });
    }

    renderFootball() {
        if (this.state.Football) {
            return (
            <View>
                <View style={styles.centered} >
                        <Image source={require('../Images/EventIcons/footballIcon.png')} style={styles.eventImage}/>
                    </View>
                    <View style={styles.section} >
                        <Button
                            onPress={() => {
                                console.log('createEventScreen');
                            }}
                            accessibilityLabel="Create A Football Event"
                        >
                            Create Event
                        </Button>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/04 - 12/10
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/11 - 12/17
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/18 - 12/24
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/25 - 12/31
                        </Text>
                    </View>
            </View>
            )  
        }
    }

    // FRISBEE GOLF
    onPressFrisbeeGolf() {
        this.setState({
            
        Badminton: false,
        Baseball: false,
        Basketball: false,
        Bowling: false,
        Cricket: false,
        Football: false,
        FrisbeeGolf: !this.state.FrisbeeGolf,
        Golf: false,
        IceHockey: false,
        Lacrosse: false,
        Pool: false,
        Soccer: false,
        Softball: false,
        Tennis: false,
        UltimateFrisbee: false,
        Volleyball: false,
        Other: false,
        });
    }

    renderFrisbeeGolf() {
        if (this.state.FrisbeeGolf) {
            return (
            <View>
                <View style={styles.centered} >
                        <Image source={require('../Images/EventIcons/frisbeeGolfIcon.png')} style={styles.eventImage}/>
                    </View>
                    <View style={styles.section} >
                        <Button
                            onPress={() => {
                                console.log('createEventScreen');
                            }}
                            accessibilityLabel="Create A Frisbee Golf Event"
                        >
                            Create Event
                        </Button>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/04 - 12/10
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/11 - 12/17
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/18 - 12/24
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/25 - 12/31
                        </Text>
                    </View>
            </View>
            )  
        }
    }

    // GOLF
    onPressGolf() {
        this.setState({
            
        Badminton: false,
        Baseball: false,
        Basketball: false,
        Bowling: false,
        Cricket: false,
        Football: false,
        FrisbeeGolf: false,
        Golf: !this.state.Golf,
        IceHockey: false,
        Lacrosse: false,
        Pool: false,
        Soccer: false,
        Softball: false,
        Tennis: false,
        UltimateFrisbee: false,
        Volleyball: false,
        Other: false,
        });
    }

    renderGolf() {
        if (this.state.Golf) {
            return (
            <View>
                <View style={styles.centered} >
                        <Image source={require('../Images/EventIcons/golfIcon.png')} style={styles.eventImage}/>
                    </View>
                    <View style={styles.section} >
                        <Button
                            onPress={() => {
                                console.log('createEventScreen');
                            }}
                            accessibilityLabel="Create A Golf Event"
                        >
                            Create Event
                        </Button>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/04 - 12/10
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/11 - 12/17
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/18 - 12/24
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/25 - 12/31
                        </Text>
                    </View>
            </View>
            )  
        }
    }
    
    // ICE HOCKEY
    onPressIceHockey() {
        this.setState({
            
        Badminton: false,
        Baseball: false,
        Basketball: false,
        Bowling: false,
        Cricket: false,
        Football: false,
        FrisbeeGolf: false,
        Golf: false,
        IceHockey: !this.state.IceHockey,
        Lacrosse: false,
        Pool: false,
        Soccer: false,
        Softball: false,
        Tennis: false,
        UltimateFrisbee: false,
        Volleyball: false,
        Other: false,
        });
    }

    renderIceHockey() {
        if (this.state.IceHockey) {
            return (
            <View>
                <View style={styles.centered} >
                        <Image source={require('../Images/EventIcons/iceHockeyIcon.png')} style={styles.eventImage}/>
                    </View>
                    <View style={styles.section} >
                        <Button
                            onPress={() => {
                                console.log('createEventScreen');
                            }}
                            accessibilityLabel="Create An IceHockey Event"
                        >
                            Create Event
                        </Button>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/04 - 12/10
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/11 - 12/17
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/18 - 12/24
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/25 - 12/31
                        </Text>
                    </View>
            </View>
            )  
        }
    }

    // LACROSSE
    onPressLacrosse() {
        this.setState({
            
        Badminton: false,
        Baseball: false,
        Basketball: false,
        Bowling: false,
        Cricket: false,
        Football: false,
        FrisbeeGolf: false,
        Golf: false,
        IceHockey: false,
        Lacrosse: !this.state.Lacrosse,
        Pool: false,
        Soccer: false,
        Softball: false,
        Tennis: false,
        UltimateFrisbee: false,
        Volleyball: false,
        Other: false,
        });
    }

    renderLacrosse() {
        if (this.state.Lacrosse) {
            return (
            <View>
                <View style={styles.centered} >
                        <Image source={require('../Images/EventIcons/lacrosseIcon.png')} style={styles.eventImage}/>
                    </View>
                    <View style={styles.section} >
                        <Button
                            onPress={() => {
                                console.log('createEventScreen');
                            }}
                            accessibilityLabel="Create A Lacrosse Event"
                        >
                            Create Event
                        </Button>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/04 - 12/10
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/11 - 12/17
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/18 - 12/24
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/25 - 12/31
                        </Text>
                    </View>
            </View>
            )  
        }
    }

    // POOL
    onPressPool() {
        this.setState({
            
        Badminton: false,
        Baseball: false,
        Basketball: false,
        Bowling: false,
        Cricket: false,
        Football: false,
        FrisbeeGolf: false,
        Golf: false,
        IceHockey: false,
        Lacrosse: false,
        Pool: !this.state.Pool,
        Soccer: false,
        Softball: false,
        Tennis: false,
        UltimateFrisbee: false,
        Volleyball: false,
        Other: false,
        });
    }

    renderPool() {
        if (this.state.Pool) {
            return (
            <View>
                <View style={styles.centered} >
                        <Image source={require('../Images/EventIcons/poolIcon.png')} style={styles.eventImage}/>
                    </View>
                    <View style={styles.section} >
                        <Button
                            onPress={() => {
                                console.log('createEventScreen');
                            }}
                            accessibilityLabel="Create A Pool Event"
                        >
                            Create Event
                        </Button>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/04 - 12/10
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/11 - 12/17
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/18 - 12/24
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/25 - 12/31
                        </Text>
                    </View>
            </View>
            )  
        }
    }

    // SOCCER
    onPressSoccer() {
        this.setState({
            
        Badminton: false,
        Baseball: false,
        Basketball: false,
        Bowling: false,
        Cricket: false,
        Football: false,
        FrisbeeGolf: false,
        Golf: false,
        IceHockey: false,
        Lacrosse: false,
        Pool: false,
        Soccer: !this.state.Soccer,
        Softball: false,
        Tennis: false,
        UltimateFrisbee: false,
        Volleyball: false,
        Other: false,
        });
    }

    renderSoccer() {
        if (this.state.Soccer) {
            return (
            <View>
                <View style={styles.centered} >
                        <Image source={require('../Images/EventIcons/soccerIcon.png')} style={styles.eventImage}/>
                    </View>
                    <View style={styles.section} >
                        <Button
                            onPress={() => {
                                console.log('createEventScreen');
                            }}
                            accessibilityLabel="Create A Soccer Event"
                        >
                            Create Event
                        </Button>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/04 - 12/10
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/11 - 12/17
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/18 - 12/24
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/25 - 12/31
                        </Text>
                    </View>
            </View>
            )  
        }
    }

    // SOFTBALL
    onPressSoftball() {
        this.setState({
            
        Badminton: false,
        Baseball: false,
        Basketball: false,
        Bowling: false,
        Cricket: false,
        Football: false,
        FrisbeeGolf: false,
        Golf: false,
        IceHockey: false,
        Lacrosse: false,
        Pool: false,
        Soccer: false,
        Softball: !this.state.Softball,
        Tennis: false,
        UltimateFrisbee: false,
        Volleyball: false,
        Other: false,
        });
    }

    renderSoftball() {
        if (this.state.Softball) {
            return (
            <View>
                <View style={styles.centered} >
                        <Image source={require('../Images/EventIcons/softballIcon.png')} style={styles.eventImage}/>
                    </View>
                    <View style={styles.section} >
                        <Button
                            onPress={() => {
                                console.log('createEventScreen');
                            }}
                            accessibilityLabel="Create A Softball Event"
                        >
                            Create Event
                        </Button>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/04 - 12/10
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/11 - 12/17
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/18 - 12/24
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/25 - 12/31
                        </Text>
                    </View>
            </View>
            )  
        }
    }

    // TENNIS
    onPressTennis() {
        this.setState({
            
        Badminton: false,
        Baseball: false,
        Basketball: false,
        Bowling: false,
        Cricket: false,
        Football: false,
        FrisbeeGolf: false,
        Golf: false,
        IceHockey: false,
        Lacrosse: false,
        Pool: false,
        Soccer: false,
        Softball: false,
        Tennis: !this.state.Tennis,
        UltimateFrisbee: false,
        Volleyball: false,
        Other: false,
        });
    }

    renderTennis() {
        if (this.state.Tennis) {
            return (
            <View>
                <View style={styles.centered} >
                        <Image source={require('../Images/EventIcons/tennisIcon.png')} style={styles.eventImage}/>
                    </View>
                    <View style={styles.section} >
                        <Button
                            onPress={() => {
                                console.log('createEventScreen');
                            }}
                            accessibilityLabel="Create A Tennis Event"
                        >
                            Create Event
                        </Button>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/04 - 12/10
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/11 - 12/17
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/18 - 12/24
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/25 - 12/31
                        </Text>
                    </View>
            </View>
            )  
        }
    }

    // ULITMATE FRISBEE
    onPressUltimateFrisbee() {
        this.setState({
            
        Badminton: false,
        Baseball: false,
        Basketball: false,
        Bowling: false,
        Cricket: false,
        Football: false,
        FrisbeeGolf: false,
        Golf: false,
        IceHockey: false,
        Lacrosse: false,
        Pool: false,
        Soccer: false,
        Softball: false,
        Tennis: false,
        UltimateFrisbee: !this.state.UltimateFrisbee,
        Volleyball: false,
        Other: false,
        });
    }

    renderUltimateFrisbee() {
        if (this.state.UltimateFrisbee) {
            return (
            <View>
                <View style={styles.centered} >
                        <Image source={require('../Images/EventIcons/ultimateFrisbeeIcon.png')} style={styles.eventImage}/>
                    </View>
                    <View style={styles.section} >
                        <Button
                            onPress={() => {
                                console.log('createEventScreen');
                            }}
                            accessibilityLabel="Create An UltimateFrisbee Event"
                        >
                            Create Event
                        </Button>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/04 - 12/10
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/11 - 12/17
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/18 - 12/24
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/25 - 12/31
                        </Text>
                    </View>
            </View>
            )  
        }
    }

    // VOLLEY BALL
    onPressVolleyball() {
        this.setState({
            
        Badminton: false,
        Baseball: false,
        Basketball: false,
        Bowling: false,
        Cricket: false,
        Football: false,
        FrisbeeGolf: false,
        Golf: false,
        IceHockey: false,
        Lacrosse: false,
        Pool: false,
        Soccer: false,
        Softball: false,
        Tennis: false,
        UltimateFrisbee: false,
        Volleyball: !this.state.Volleyball,
        Other: false,
        });
    }

    renderVolleyball() {
        if (this.state.Volleyball) {
            return (
            <View>
                <View style={styles.centered} >
                        <Image source={require('../Images/EventIcons/volleyBallIcon.png')} style={styles.eventImage}/>
                    </View>
                    <View style={styles.section} >
                        <Button
                            onPress={() => {
                                console.log('createEventScreen');
                            }}
                            accessibilityLabel="Create A Volleyball Event"
                        >
                            Create Event
                        </Button>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/04 - 12/10
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/11 - 12/17
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/18 - 12/24
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/25 - 12/31
                        </Text>
                    </View>
            </View>
            )  
        }
    }

    // OTHER
    onPressOther() {
        this.setState({
            
        Badminton: false,
        Baseball: false,
        Basketball: false,
        Bowling: false,
        Cricket: false,
        Football: false,
        FrisbeeGolf: false,
        Golf: false,
        IceHockey: false,
        Lacrosse: false,
        Pool: false,
        Soccer: false,
        Softball: false,
        Tennis: false,
        UltimateFrisbee: false,
        Volleyball: false,
        Other: !this.state.Other,
        });
    }

    renderOther() {
        if (this.state.Other) {
            return (
            <View>
                <View style={styles.centered} >
                        <Image source={require('../Images/EventIcons/otherIcon.png')} style={styles.eventImage}/>
                    </View>
                    <View style={styles.section} >
                        <Button
                            onPress={() => {
                                console.log('createEventScreen');
                            }}
                            accessibilityLabel="Create An Other Event"
                        >
                            Create Event
                        </Button>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/04 - 12/10
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/11 - 12/17
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/18 - 12/24
                        </Text>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.title}>
                            12/25 - 12/31
                        </Text>
                    </View>
            </View>
            )  
        }
    }


    render () {
        
        return (
            <ScrollView style={styles.container}>
                <KeyboardAvoidingView behavior='position'>
                    <View style={styles.eventIcon}>
                        <TouchableHighlight onPress={ () => this.onPressBadminton() }>
                            <ResponsiveImage source={require('../Images/EventIcons/badmintonIcon.png')} initWidth="138" initHeight="138"/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={ () => this.onPressBaseball() }>
                            <ResponsiveImage source={require('../Images/EventIcons/baseballIcon.png')} initWidth="138" initHeight="138"/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={ () => this.onPressBasketball() }>
                            <ResponsiveImage source={require('../Images/EventIcons/basketballIcon.png')} initWidth="138" initHeight="138"/>
                        </TouchableHighlight>
                    </View>
                    <View>
                        {this.renderBadminton()}
                        {this.renderBaseball()}
                        {this.renderBasketball()}
                    </View>
                    <View style={styles.eventIcon}>
                        <TouchableHighlight onPress={ () => this.onPressBowling() }>
                        <ResponsiveImage source={require('../Images/EventIcons/bowlingIcon.png')} initWidth="138" initHeight="138"/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={ () => this.onPressCricket() }>
                        <ResponsiveImage source={require('../Images/EventIcons/cricketIcon.png')} initWidth="138" initHeight="138"/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={ () => this.onPressFootball() }>
                            <ResponsiveImage source={require('../Images/EventIcons/footballIcon.png')} initWidth="138" initHeight="138"/>
                        </TouchableHighlight>
                    </View>
                    <View>
                        {this.renderBowling()}
                        {this.renderCricket()}
                        {this.renderFootball()}
                    </View>
                    <View style={styles.eventIcon}>
                        <TouchableHighlight onPress={ () => this.onPressFrisbeeGolf() }>
                            <ResponsiveImage source={require('../Images/EventIcons/frisbeeGolfIcon.png')} initWidth="138" initHeight="138"/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={ () => this.onPressGolf() }>
                            <ResponsiveImage source={require('../Images/EventIcons/golfIcon.png')} initWidth="138" initHeight="138"/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={ () => this.onPressIceHockey() }>
                            <ResponsiveImage source={require('../Images/EventIcons/iceHockeyIcon.png')} initWidth="138" initHeight="138"/>
                        </TouchableHighlight>
                    </View>
                    <View>
                        {this.renderFrisbeeGolf()}
                        {this.renderGolf()}
                        {this.renderIceHockey()}
                    </View>
                    <View style={styles.eventIcon}>
                        <TouchableHighlight onPress={ () => this.onPressLacrosse() }>
                            <ResponsiveImage source={require('../Images/EventIcons/lacrosseIcon.png')} initWidth="138" initHeight="138"/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={ () => this.onPressPool() }>
                            <ResponsiveImage source={require('../Images/EventIcons/poolIcon.png')} initWidth="138" initHeight="138"/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={ () => this.onPressSoccer() }>
                            <ResponsiveImage source={require('../Images/EventIcons/soccerIcon.png')} initWidth="138" initHeight="138"/>
                        </TouchableHighlight>
                    </View>
                    <View>
                        {this.renderLacrosse()}
                        {this.renderPool()}
                        {this.renderSoccer()}
                    </View>
                    <View style={styles.eventIcon}>
                        <TouchableHighlight onPress={ () => this.onPressSoftball() }>
                            <ResponsiveImage source={require('../Images/EventIcons/softballIcon.png')} initWidth="138" initHeight="138"/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={ () => this.onPressTennis() }>
                            <ResponsiveImage source={require('../Images/EventIcons/tennisIcon.png')} initWidth="138" initHeight="138"/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={ () => this.onPressUltimateFrisbee() }>
                            <ResponsiveImage source={require('../Images/EventIcons/ultimateFrisbeeIcon.png')} initWidth="138" initHeight="138"/>
                        </TouchableHighlight>
                    </View>
                    <View>
                        {this.renderSoftball()}
                        {this.renderTennis()}
                        {this.renderUltimateFrisbee()}
                    </View>
                    <View style={styles.eventIcon}>
                        <TouchableHighlight onPress={ () => this.onPressVolleyBall() }>
                            <ResponsiveImage source={require('../Images/EventIcons/volleyBallIcon.png')} initWidth="138" initHeight="138"/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={ () => this.onPressOther() }>
                            <ResponsiveImage source={require('../Images/EventIcons/otherIcon.png')} initWidth="138" initHeight="138"/>
                        </TouchableHighlight>
                    </View>
                    <View>
                        {this.renderVolleyball()}
                        {this.renderOther()}
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        )
    }
}


  
  
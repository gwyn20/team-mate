import React, { Component } from 'react';
import { ScrollView, KeyboardAvoidingView, View, Text, Image} from 'react-native';
import { Button } from '../Components/Button';
import { StackNavigator } from 'react-navigation';
import ProfileScreen from './ProfileScreen'

// Styles
import styles from '../Screens/Styles/LoginScreenStyles'


class LoginScreen extends Component {
    render () {
        return (
            <ScrollView style={styles.container}>
                <KeyboardAvoidingView behavior='position'>
                    <View style={styles.centered}>
                        <Image source={require('../Images/launchLogo.png')} style={styles.logo} />
                    </View>

                    <View style={styles.centered} >
                        <Image source={require('../Images/TeamMateLetters.png')} />
                    </View> 
                    <View style={styles.centered}>  
                        <Button
                            onPress={() => {
                                this.props.navigation.navigate('ProfileScreen');
                            }}
                            accessibilityLabel="Log In To Team Mate"
                        >
                        Log In
                        </Button>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        )
    }
}

const LoginScreenStackNavigator = StackNavigator({
    
    LoginScreen: { screen: LoginScreen },
    ProfileScreen: { screen: ProfileScreen },
})

export default LoginScreenStackNavigator;

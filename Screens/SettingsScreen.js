import React, { Component } from 'react';
import { ScrollView, KeyboardAvoidingView, View, Text, Image} from 'react-native';
import { Button } from '../Components/Button';
import { TabNavigator } from 'react-navigation'

// Styles
import styles from '../Screens/Styles/ProfileScreenStyles'

export default class SettingsScreenContent extends Component {
       
    render () {
        
        return (
            <ScrollView style={styles.container}>
                <KeyboardAvoidingView behavior='position'>
          
                    <View style={styles.centered} >
                        <Image source={require('../Images/profile.png')} style={styles.profileImage}/>
                    </View>

                    <View style={styles.section} >
                        <Text style={styles.userInfo}>
                            USER NAME: User 123
                        </Text>
                        <Text style={styles.userInfo}>
                            EMAIL: user123@email.com
                        </Text>
                        <Text style={styles.userInfo}>
                            PASSWORD: **********
                        </Text>
                        <Text style={styles.userInfo}>
                            ZIP CODE: 23228
                        </Text>
                        <Text style={styles.userInfo}>
                            SEARCH RADIUS: 
                        </Text>
                        <Button
                            onPress={() => {
                                console.log('EditScreen');
                            }}
                            accessibilityLabel="Edit Settings"
                        >
                            Edit
                        </Button>
                    </View>

          

          </KeyboardAvoidingView>
        </ScrollView>
        )
    }
}
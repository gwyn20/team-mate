import React, { Component } from 'react';
import { ScrollView, KeyboardAvoidingView, View, Text, Image} from 'react-native';
import { Button } from '../Components/Button';
import { TabNavigator } from 'react-navigation'

// Styles
import styles from '../Screens/Styles/ProfileScreenStyles'

export default class EventBadmintonScreen extends Component {
       
    render () {
        
        return (
            <ScrollView style={styles.container}>
                <KeyboardAvoidingView behavior='position'>
          
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

          

          </KeyboardAvoidingView>
        </ScrollView>
        )
    }
}
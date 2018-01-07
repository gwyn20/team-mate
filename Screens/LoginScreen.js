import React, { Component } from 'react';
import { ScrollView, KeyboardAvoidingView, View, Text, Image, TextInput } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Label } from 'native-base' ;
import { Button } from '../Components/Button';
import { ButtonSmall } from '../Components/ButtonSmall';
import { Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ProfileScreen from './ProfileScreen'

// Styles
import styles from '../Screens/Styles/LoginScreenStyles'

// Firebase
import firebaseApp from '../Modules/firebase';


export default class LoginScreen extends Component {

    constructor(props) {
        super(props)

        this.state = ({
            email: '',
            password: '',
        })
    }

    signUpUser = (email, password) => {

        try {
            if(this.state.email = null) { 
                alert("Please enter a valid Email Address")
                return;
            }

            if(this.state.password.length < 6) { 
                alert("Password must be a minimum of 6 characters")
                return;
            }

            firebaseApp.auth().createUserWithEmailAndPassword(email, password).then(() => {
                this.props.navigation.navigate('ProfileScreen');
            })
        }
        catch(error){
            alert("Sign Up Error, Please add a valid Email and Password")
        }
    }

    loginUser = (email, password) => {
        
        try {
            if(this.state.email = null) { 
                alert("Please enter a valid Email Address")
                return;
            }

            if(this.state.password.length < 6) { 
                alert("Password must be a minimum of 6 characters")
                return;
            }

            firebaseApp.auth().signInWithEmailAndPassword(email, password).then(() => {
                this.props.navigation.navigate('ProfileScreen');
            })
        }
        catch(error){
            alert("Login Error, Please enter a valid Email and Password")
        }
    }
    
    
    state = {
        LoginState: false,
        SignUpState: false,
    }
    
    onPressLoginState() {
        this.setState({
            LoginState: !this.state.LoginState,
        });
    }
    
    onPressSignUpState() {
        this.setState({
          SignUpState: !this.state.SignUpState,
        });
    }
    
    renderLoginState() {
        const { navigate } = this.props.navigation;
        if (this.state.LoginState) {
            return (
            <View>
                <Form>
                    <Item floatingLabel>
                        <Label>Email</Label>
                            <Input
                                autoCorrect={false}
                                autoCapitalize='none'
                                keyboardType='email-address'
                                onChangeText={(email) => this.setState({email})}
                            />
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                            <Input
                                secureTextEntry={true}
                                autoCorrect={false}
                                autoCapitalize='none'
                                onChangeText={(password) => this.setState({password})}
                            />
                    </Item>
                    <ButtonSmall
                        onPress={() => this.loginUser(this.state.email,this.state.password)}
                            accessibilityLabel="Log In To Team Mate"
                    >
                    Submit
                    </ButtonSmall>       
                </Form>
            </View>
          )
        }
      }
    
    renderSignUpState() {
        if (this.state.SignUpState) {
          return (
            <View>
                <Form>
                    <Item floatingLabel>
                        <Label>Email</Label>
                            <Input
                                autoCorrect={false}
                                autoCapitalize='none'
                                keyboardType='email-address'
                                onChangeText={(email) => this.setState({email})}
                            />
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                            <Input
                                secureTextEntry={true}
                                autoCorrect={false}
                                autoCapitalize='none'
                                onChangeText={(password) => this.setState({password})}
                            />
                    </Item>
                    <ButtonSmall
                        onPress={() => this.signUpUser(this.state.email,this.state.password)}
                            accessibilityLabel="Sign Up For Team Mate"
                    >
                    Submit
                    </ButtonSmall>       
                </Form>
            </View>
          )
        }
    }

    render () {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <KeyboardAvoidingView behavior='position'>
                    <View style={styles.centered}>
                        <Image source={require('../Images/launchLogo.png')} style={styles.logo} />
                    </View>

                    <View style={styles.centered} >
                        <Image source={require('../Images/TeamMateLetters.png')} />
                    </View> 

                    <View style={styles.centered} >
                        <Button
                            onPress={() => 
                                this.onPressLoginState()
                            }
                                accessibilityLabel="Log In To Team Mate"
                        >
                        Log In
                        </Button>
                         
                    </View>
                    <View>
                        {this.renderLoginState()}
                    </View>
                    <View style={styles.centered} >
                        <Button
                            onPress={() => 
                                this.onPressSignUpState()
                            }
                                accessibilityLabel="Sign Up For Team Mate"
                        >
                        Sign Up
                        </Button>   
                    </View> 
                    <View>
                        {this.renderSignUpState()}
                    </View>
                    
                    <View style={styles.centered}>
                        <Image source={require('../Images/G20.png')} style={styles.g20logo} />
                    </View> 

                </KeyboardAvoidingView>
            </ScrollView>
        )
    }
}



//const LoginScreenStackNavigator = StackNavigator({
    
    //LoginScreen: { screen: LoginScreen },
    //ProfileScreen: { screen: ProfileScreen },
//}, {
    
    //navigationOptions: {
        //headerTitle: (
            //<Image source={require('../Images/top_logo.png')} style={{ width: 40, height: 40 }}/>
        //),
        //style: { 
            //backgroundColor: '#404956' 
        //},
      //}
//})

//export default LoginScreenStackNavigator;

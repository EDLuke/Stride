import React from 'react';
import {Font} from 'expo';

import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import SwipeBackgroundView from '../components/animation/SwipeBackgroundView';
import Api from '../components/Api';
import User from '../components/class/UserClass.js'

GLOBAL = require('../components/CurrentUser');

export default class Main extends React.Component {
  state = {
    email: '',
    password: '',
  };

  onPressLogin = () => {
    var userName = this.state.email;
    var password = this.state.password;

    Api.login(userName, password).then((response) => {
      console.log(response);     

      //Set global user
      GLOBAL.currentUser = new User(response.UserID, response.Age, response.Gender, response.Height, response.Weight);

      //Navigate to the tabs
      this.props.navigation.navigate('TabNav');
    });
  }
  
  componentDidMount(){
    
  }

  render() {
    return (
      <View style={styles.container}>
        <SwipeBackgroundView> 
          <View style={styles.titleContainer}>  
            <Text style={styles.title}>Stride</Text>  
          </View>
          <View style={styles.subtitleContainer}>  
            <Text style={styles.subtitle}>Fit with Friends</Text>
          </View>

          <View style={styles.emailContainer}>
             <TextInput
                style = {{alignItems:'center', color: '#FFF'}}
                underlineColorAndroid="transparent"
                placeholder="Email"
                placeholderTextColor="#FFF"
                onChangeText={(text) => this.setState({email:text})}
                value = {this.state.email}
              />
          </View>

          <View style={styles.passwordContainer}>
              <TextInput
                secureTextEntry = {true}
                underlineColorAndroid="transparent"
                style = {{alignItems:'center', color: '#FFF'}}
                placeholder="Password"
                placeholderTextColor="#FFF"
                onChangeText={(text) => this.setState({password:text})}
                value = {this.state.password}
              />
            </View>

          <View style={styles.loginContainer}>
            <Button style={styles.loginButton}
              onPress={this.onPressLogin}
              title="Login"
            />
          </View>
          <View style={styles.signupContainer}>  
            <Text style={styles.signupText}
               onPress={() => this.props.navigation.navigate('Signup')}
               >
               No account yet? Create one
            </Text>
          </View>
        </SwipeBackgroundView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 100,
    fontWeight: '900',
    color: '#fff'
  },
  subtitle: {
    fontFamily: 'Roboto',
    fontSize: 20,
    color: '#fff'
  },

  loginContainer:{
    width: 250,
    marginTop: 35
  },
  signupContainer:{
    width: 250,
    marginTop: 35
  },
  titleContainer:{

  },
  emailContainer: {
    backgroundColor: 'rgba(0,0,0,0)',
    height: 30,
    width: 250,
    marginTop: 50,
    borderBottomWidth: 1,
    borderColor: "#FFF",
  },
  passwordContainer: {
    backgroundColor: 'rgba(0,0,0,0)',
    height: 30,
    width: 250,
    marginTop: 35,
    borderBottomWidth: 1,
    borderColor: "#FFF",
  },
  subtitleContainer:{
    marginTop: 15,
  },
  loginButton:{
    borderRadius:0,
  },
  signupText:{
    textAlign: 'center',
    color: '#FFF',
    opacity: 0.5,
  },

});

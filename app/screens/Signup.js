import React from 'react';
import {Font} from 'expo';

import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import SwipeBackgroundView from '../components/animation/SwipeBackgroundView';
import Api from '../components/Api';
import User from '../components/class/UserClass.js'

GLOBAL = require('../components/CurrentUser');

export default class Signup extends React.Component {
  state = {
    fontLoaded: false,
  	name: '',
    email: '',
    password: '',
  };

  onPressSignup = () => {
    var userName = this.state.email;
    var password = this.state.password;

    Api.signup(userName, password).then((response) => {
      console.log(response);     

      //Set global user
      GLOBAL.currentUser = new User(response.UserID, response.Age, response.Gender, response.Height, response.Weight);

      //Navigate to the tabs
      this.props.navigation.navigate('TabNav');
    });
  }
  
  async componentDidMount(){
    await Font.loadAsync({
      'Helvetica': require('../../assets/fonts/Helvetica.ttf'),
    });

    this.setState({fontLoaded: true});
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

          <View style={styles.nameContainer}>
             <TextInput
                style = {{alignItems:'center', color: '#FFF'}}
                underlineColorAndroid="transparent"
                placeholder="Name"
                placeholderTextColor="#FFF"
                onChangeText={(text) => this.setState({name:text})}
                value = {this.state.name}
              />
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

          <View style={styles.signupContainer}>
            <Button style={styles.signupButton}
              onPress={this.onPressSignup}
              title="CREATE ACCOUNT"
            />
          </View>
          <View style={styles.signupContainer}>  
            <Text style={styles.signupText}>Already a member? Login</Text>
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
    fontFamily: 'Helvetica',
    fontSize: 100,
    fontWeight: '900',
    color: '#fff'
  },
  subtitle: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    color: '#fff'
  },

  signupContainer:{
    width: 250,
    marginTop: 35
  },
  signupContainer:{
    width: 250,
    marginTop: 35
  },
  titleContainer:{

  },
  nameContainer: {
    backgroundColor: 'rgba(0,0,0,0)',
    height: 30,
    width: 250,
    marginTop: 50,
    borderBottomWidth: 1,
    borderColor: "#FFF",
  },
  emailContainer: {
    backgroundColor: 'rgba(0,0,0,0)',
    height: 30,
    width: 250,
    marginTop: 35,
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
  signupButton:{
    borderRadius:0,
  },
  signupText:{
    textAlign: 'center',
    color: '#FFF',
    opacity: 0.5,
  },

});

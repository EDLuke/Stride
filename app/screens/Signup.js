import React from 'react';
import {Font} from 'expo';

import { Button, StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import VideoBackgroundView from '../components/animation/VideoBackgroundView';
import { AssetUtils } from '../components/AssetUtils.js';

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
  	const {goBack} = this.props.navigation;
    return (
      <View style={styles.container}>
        <VideoBackgroundView source={AssetUtils.background_1}> 
        </VideoBackgroundView>
        <View style={styles.contentContainer}>
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
            <Text style={styles.signupText}
            	onPress={() => goBack()}
            >
            	Already a member? Login
            </Text>
          </View>
        </View>
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
    backgroundColor: 'rgba(0,0,0,0)',
    fontFamily: 'Fibre',
    fontSize: 130,
    color: '#fff'
  },
  subtitle: {
    fontFamily: 'Fibre',
    fontSize: 35,
    color: '#fff'
  },
  contentContainer:{
    opacity:1,
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width, 
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupContainer:{
    width: 250,
    marginTop: 35
  },
  titleContainer:{
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: 75,
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
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: 15,
  },
  signupButton:{
    borderRadius:0,
  },
  signupText:{
    textAlign: 'center',
    color: '#FFF',
    opacity: 0.5,
    backgroundColor: 'rgba(0,0,0,0)'
  },

});

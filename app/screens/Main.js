import React from 'react';
import {Font} from 'expo';

import { Button, StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import VideoBackgroundView from '../components/animation/VideoBackgroundView';
import { AssetUtils } from '../components/AssetUtils.js';

import Api from '../components/Api';
import User from '../components/class/UserClass.js'
import { MaterialCommunityIcons } from '@expo/vector-icons';

GLOBAL = require('../components/CurrentUser');

export default class Main extends React.Component {
  state = {
      email: 'yz3083',
      password: 'VBbigidiot',
      error: '',
  };

  onPressLogin = () => {
    var userName = this.state.email;
    var password = this.state.password;

    //Hardcode this until backend is up
    Api.login(userName, password).then((response) => {
      console.log(response);     

      if(response.Error != ""){
        this.setState({
          email:'',
          password:'',
          error: response.Error,
        });
      }
      else{
        //Set global user
        GLOBAL.currentUser = new User(response.UserID, response.Age, response.Gender, response.Height, response.Weight);

        //Navigate to the tabs
        this.props.navigation.navigate('TabNav');
      }
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <VideoBackgroundView source={AssetUtils.background_1}> 
        </VideoBackgroundView>
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>STRIDE</Text>  
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

          <View style={styles.alertContainer}>
            {this.state.error != '' &&
              <MaterialCommunityIcons name="alert-box" size={16} color="#FFF"/>
            }
            <Text style={styles.alertText}>
              {this.state.error}
            </Text>
            
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
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  loginContainer:{
    width: 250,
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: 15,
  },
  signupContainer:{
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: 35,
  },
  titleContainer:{
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: 75,
  },
  signupContainer:{
    backgroundColor: 'rgba(0,0,0,0)',
    width: 250,
    marginTop: 35
  },
  emailContainer: {
    backgroundColor: 'rgba(0,0,0,0)',
    height: 30,
    width: 250,
    marginTop: 100,
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
  alertContainer: {
    width: 250,
    height: 15,
    marginTop: 10,
    flexDirection: 'row',
  },
  subtitleContainer:{
    backgroundColor: 'rgba(0,0,0,0)',
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
  alertText: {
    color: '#FFF',
    fontSize: 12
  }
});

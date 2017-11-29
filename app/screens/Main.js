import React from 'react';
import { Button, StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import VideoBackgroundView from '../components/animation/VideoBackgroundView';
import { AssetUtils } from '../components/AssetUtils.js';

import Api from '../components/Api';
import ApiUtils from '../components/utils/ApiUtils';
import User from '../components/class/UserClass.js'
import { MaterialCommunityIcons } from '@expo/vector-icons';

GLOBAL = require('../components/CurrentUser');

export default class Main extends React.Component {
  state = {
      email: 'luke@columbia.edu',
      password: '123qweasdzxc',
      error: '',
      keyboardFocused: false,
  };

  toggleKeyboardFocused = () => {
    this.setState({
      keyboardFocused: !this.state.keyboardFocused,
    });

    console.log(this.state.keyboardFocused);
  }

  onPressLogin = () => {
    var userName = this.state.email;
    var password = ApiUtils.hashPassword(this.state.password);

    //First check locally if email is valid
    if(!ApiUtils.validateEmail(userName)){
      this.setState({
          email: '',
          password:'',
          error: "This email address is not in a valid format.",
      });

      return;
    }

    //Then make the request
    Api.login(userName, password).then((response) => {  

      if (typeof response === "undefined") {
        this.setState({
          email: '',
          password:'',
          error: "Network error.",
        });
      }
      else if(response.Error != ""){
        this.setState({
          email: '',
          password:'',
          error: response.Error,
        });
      }
      else{
        //Set global user
        GLOBAL.currentUser = User.initLoginInfo(response.UserID, 
                                                response.Age, 
                                                response.Gender, 
                                                response.Height, 
                                                response.Weight, 
                                                response.Friendlist, 
                                                response.Fitnesslist);

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
                onFocus={this.toggleKeyboardFocused}
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
                onFocus={this.toggleKeyboardFocused}
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
              color="#92B6D5"
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
  alertContainer: {
    width: 250,
    height: 15,
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0)',
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
    backgroundColor: 'rgba(0,0,0,0)',
  },
  subtitleContainer:{
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: 15,
  },
  loginButton:{
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

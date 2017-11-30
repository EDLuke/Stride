import React from 'react';
import {Font} from 'expo';

import { Button, StyleSheet, Text, View, TextInput, Dimensions, ScrollView } from 'react-native';
import VideoBackgroundView from '../components/animation/VideoBackgroundView';
import { AssetUtils } from '../components/AssetUtils.js';

import Api from '../components/Api';
import ApiUtils from '../components/utils/ApiUtils';
import renderIf from '../components/utils/renderIf';
import User from '../components/class/UserClass.js'
import { MaterialCommunityIcons } from '@expo/vector-icons';

GLOBAL = require('../components/CurrentUser');

export default class Signup extends React.Component {
  state = {
    email: 'sfsdf@sdfsdf.com',
    password: '123qwe',
    passwordCfn: '123qwe',
    error: '',
  }

  onPressSignup = () => {
    //First check if the two passwords match
    
    if(this.state.password != this.state.passwordCfn){
      this.setState({
        passwordCfn: '',
        error: "These passwords don't match. Try again?",
      });

      return;
    }

    var userName = this.state.email;
    var password = ApiUtils.hashPassword(this.state.password);
  
    //Check locally if email is valid
    if(!ApiUtils.validateEmail(userName)){
      this.setState({
          email: '',
          password:'',
          error: "This email address is not in a valid format.",
      });

      return;
    }

    //Then make the request
    Api.signup(userName, password).then((response) => {
      console.log(response);

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
        GLOBAL.currentUser = User.initSignUpInfo(userName, 
                                                 response.Age, 
                                                 response.Gender, 
                                                 response.Height, 
                                                 response.Weight);

        //Navigate to the tabs
        this.props.navigation.navigate('TabNav');
      }
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
        <VideoBackgroundView source={AssetUtils.background_1}> 
        </VideoBackgroundView>
        <View style={styles.contentContainer}>
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
          <View style={styles.passwordConfirmContainer}>
              <TextInput
                secureTextEntry = {true}
                underlineColorAndroid="transparent"
                style = {{alignItems:'center', color: '#FFF'}}
                placeholder="Verify Password"
                placeholderTextColor="#FFF"
                onChangeText={(text) => this.setState({passwordCfn :text})}
                value = {this.state.passwordCfn}
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
          <View style={styles.signupContainer}>
            <Button style={styles.signupButton}
              onPress={this.onPressSignup}
              title="Create Account"
              color="#92B558"
            />
          </View>
          <View style={styles.loginContainer}>  
            <Text style={styles.loginText}
            	onPress={() => {
                  const {goBack} = this.props.navigation;
                  goBack();
                }
              }
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
  signupContainer:{
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
  loginContainer:{
    backgroundColor: 'rgba(0,0,0,0)',
    width: 250,
    marginTop: 35
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
  passwordConfirmContainer: {
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
  signupButton:{
  },
  loginText:{
    textAlign: 'center',
    color: '#FFF',
    opacity: 0.5,
  },
  alertText: {
    color: '#FFF',
    fontSize: 12
  }
});

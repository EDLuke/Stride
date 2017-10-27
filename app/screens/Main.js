import React from 'react';
import {Font} from 'expo';

import { Button, StyleSheet, Text, View } from 'react-native';
import SwipeBackgroundView from '../components/animation/SwipeBackgroundView';

export default class Main extends React.Component {
  state = {
    
  };
  
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
        <View style={styles.buttonContainer}>
          <View style={styles.loginContainer}>
            <Button style={styles.loginButton}
              onPress={() => this.props.navigation.navigate('Login')}
              title="Login"
            />
          </View>
          <View style={styles.signupContainer}>  
            <Button style={styles.signupButton}
              onPress={() => this.props.navigation.navigate('Login')}
              title="Sign Up"
            />
          </View>
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
  buttonContainer: {
    margin: 50,
    flexDirection: 'column',
  },
  loginContainer:{
    
  },
  signupContainer:{
    marginTop: 10,
  },
  titleContainer:{

  },
  subtitleContainer:{
    marginTop: 15,
  },
  loginButton:{

  },
  signupButton:{

  },

});

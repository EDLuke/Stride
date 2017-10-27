import React from 'react';
import {Font} from 'expo';

import { Button, StyleSheet, Text, View } from 'react-native';
import SwipeBackgroundView from '../components/animation/SwipeBackgroundView';

export default class Main extends React.Component {
  state = {
      fontLoaded: false,
  };
  
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
          {
            this.state.fontLoaded ?
            (  
            <Text style={styles.title}>Stride</Text>  
            ) : null
          }
          </View>
          <View style={styles.subtitleContainer}>  
          {
            this.state.fontLoaded ?
            (
            <Text style={styles.subtitle}>Fit with Friends</Text>
            ) : null
          }
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
    fontFamily: 'Helvetica',
    fontSize: 50,
    fontWeight: '900',
    color: '#fff'
  },
  subtitle: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    color: '#fff'
  },
  buttonContainer: {
    margin: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loginContainer:{
    backgroundColor: 'rgba(0,0,0,0)',
    marginRight: 10,
  },
  signupContainer:{
    backgroundColor: 'rgba(0,0,0,0)',
    marginLeft: 10,
  },
  titleContainer:{
    backgroundColor: 'rgba(0,0,0,0)',
  },
  subtitleContainer:{
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: 15,
  },
  loginButton:{

  },
  signupButton:{

  },

});

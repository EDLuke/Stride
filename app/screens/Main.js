import React from 'react';
import {Font} from 'expo';

import { Button, StyleSheet, Text, View } from 'react-native';
import SwipeBackgroundView from '../components/animation/SwipeBackgroundView';

export default class Main extends React.Component {
  state = {
    fontLoaded: false,
  };
  
  async componentDidMount(){
    /* Load the assets for Expo app*/
    await Font.loadAsync({
      'Helvetica': require('../../assets/fonts/Helvetica.ttf'),
    });

    this.setState({fontLoaded: true});
  }

  render() {
    return (
      <View style={styles.container}>
        <SwipeBackgroundView>
        {
          this.state.fontLoaded ? 
          (
            <Text style={styles.title}>Stride</Text>
          ) : null
        }
        {
          this.state.fontLoaded ? 
          (
            <Text style={styles.subtitle}>Fit with Friends</Text> 
          ) : null
        }
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('Login')}
            title="Sign in with email"
          />
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
    fontSize: 35,
    fontStyle: 'italic',
    color: '#fff'
  },
  subtitle: {
    fontFamily: 'Helvetica',
    fontSize: 15,
    fontStyle: 'italic',
    color: '#fff'
  },
  buttonContainer: {
    margin: 50,
  }
});

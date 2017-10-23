import React from 'react';
import {Font} from 'expo';

import { Button, StyleSheet, Text, View } from 'react-native';

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
            onPress={() => this.props.navigation.navigate('TabNav')}
            title="Sign in with email"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Helvetica',
    fontSize: 35,
    fontStyle: 'italic',
    color: '#494949'
  },
  subtitle: {
    fontFamily: 'Helvetica',
    fontSize: 15,
    fontStyle: 'italic',
    color: '#686868'
  },
  buttonContainer: {
    margin: 50,
  }
});
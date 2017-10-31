import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';

// const backAction = NavigationActions.back({
//   	key: 'Main',
// });

export default class Setting extends React.Component{
	


	render() {
		return (
		<View style = {styles.container}>
	        <View style = {styles.loginContainer}>
	          <Button style={styles.loginButton}
              	onPress={() => this.props.navigation.navigate('Main')}
              	title="Logout"
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
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    backgroundColor: 'rgba(0,0,0,0)',
    fontFamily: 'Helvetica',
    fontSize: 50,
    fontWeight: '900',
    color: '#fff'
  },
  boxtext:{
    fontFamily: 'Helvetica',
    fontSize: 20,
    color: '#686868'
  },
  subtitle: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    color: '#fff'
  },

  loginContainer:{
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: 15,
  },
  signupContainer:{
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: 35,
  },
  titleContainer:{
    backgroundColor: 'rgba(0,0,0,0)',
    width: 250,
    marginTop: 35
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

});
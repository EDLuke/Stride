import React from 'react';
import {Font} from 'expo';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { NavigationBar, Title, Image } from '@shoutem/ui';

export default class SocialDetail extends React.Component{
	


	render() { 
		return (
		<View style = {styles.container}>
          <Image
              source={{uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png'}}
              style={{ width: 375, height: 70 }}
            >
            <NavigationBar
              styleName="no-border"
              centerComponent={<Title>{this.props.navigation.params.name}'s PROFILE</Title>}
            />
          </Image>
			    <View style = {styles.titleContainer}>
	          <Text style = {styles.boxtext}>Loading</Text>
	        </View>
	        <View style = {styles.loginContainer}>
	          <Button style={styles.loginButton}
              	onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
              	title="Return"
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
    marginTop: 64
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
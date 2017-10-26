import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert} from 'react-native';
import Api from '../components/Api';
import User from '../components/class/UserClass.js'

GLOBAL = require('../components/CurrentUser');

export default class Login extends React.Component{
	constructor(props) {
		super(props);
		this.state = {email: '',
					  password: '',
            responseText: 'responseText',
					};
	}

  onPressLogin = () => {
    var userName = this.state.email;
    var password = this.state.password;

    Api.login(userName, password).then((response) => {
      console.log(response);     

      //Set global user
      GLOBAL.currentUser = new User(response.UserID, response.Age, response.Gender, response.Height, response.Weight);

      //Navigate to the tabs
      this.props.navigation.navigate('TabNav');
    })
    .catch(error => {
      console.error(error);
    });
  }

	render() {
		return (
			      
        <View style={styles.container}>
        		<Text>Login With Email</Text>
            
        		<View style={styles.textBoxContainer}>
					   <TextInput
        				style = {{alignItems:'center'}}
        				placeholder="Email Address"
        				onChangeText={(text) => this.setState({email:text})}
        				value = {this.state.email}
        			/>
            </View>
            
            {
            <View style={styles.textBoxContainer}>
        			<TextInput
        				secureTextEntry = {true}
        				style = {{alignItems:'center'}}
        				placeholder="Password"
        				onChangeText={(text) => this.setState({password:text})}
        				value = {this.state.password}
        			/>
				    </View>
        	  }
            {
        		<View style={styles.buttonContainer}>
          			<Button
           				onPress={this.onPressLogin}
                  // onPress = {() => this.props.navigation.navigate('TabNav')}
           				title="Login"
                />
            </View>
            }
            {
            <View style={styles.Container}>
              <Text>{this.state.responseText}</Text>
            </View>
            } 
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
  textBoxContainer: {
  	backgroundColor: '#bbb',
    height: 30,
    width: 300,
  	margin: 20,

  	justifyContent: 'space-around',
  },
  buttonContainer: {
    margin: 50,
  }
});
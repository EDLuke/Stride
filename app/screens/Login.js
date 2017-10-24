import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert} from 'react-native';
import Api from '../components/Api';
GLOBAL = require('../components/CurrentUser');

export default class Login extends React.Component{
	constructor(props) {
		super(props);
		this.state = {email: '',
					  password: ''
					};
	}

  onPressLogin = () => {
    var userName = this.state.email;
    var password = this.state.password;

    Api.login(userName, password).then((response) => {
      console.log(response);
    });
  }

	render() {
		return (
			<View style={styles.container}>
        		<Text>Login With Email</Text>

        		<View style={styles.textBoxContainer}>
					<TextInput
        				style = {{margin:20,
        						  height:40}}
        				placeholder="Email Address"
        				onChangeText={(text) => this.setState({email:text})}
        				value = {this.state.email}
        			/>
        			<TextInput
        				secureTextEntry = {true}
        				style = {{margin:20,
        						  height:40}}
        				placeholder="Password"
        				onChangeText={(text) => this.setState({password:text})}
        				value = {this.state.password}
        			/>
				</View>
        	
        		<View style={styles.buttonContainer}>
          			<Button
           				onPress={this.onPressLogin}
           				title="Login"
        			/>
      			</View>
      		</View>
		);
	}ta
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
  	margin: 50,
  	flexDirection: 'column',
  	justifyContent: 'space-around',
  },
  buttonContainer: {
    margin: 50,
  }
});
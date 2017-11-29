import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { Toolbar } from 'react-native-material-ui';
import ApiUtils from '../components/utils/ApiUtils';

// const backAction = NavigationActions.back({
//   	key: 'Main',
// });

export default class Setting extends React.Component{
	state = {
    keyboardFocused: false,
    email: GLOBAL.currentUser.username,
    emailErrorMsg: "",
    pw1: "",
    pw2: "",
    pwErrorMsg: "",
    userWeight: "",
    userHeight: "",
    userGender: "",
    userAge: "",
  }

  toggleKeyboardFocused = () => {
    this.setState({
      keyboardFocused: !this.state.keyboardFocused,
    });

  }

  onEmailSelectionChanged = () => {
    var email = this.state.email

    if(!ApiUtils.validateEmail(email)){
      this.setState({
          emailErrorMsg: "This email address is not in a valid format.",
      });

      return;
    } else {
      this.setState({
          emailErrorMsg: "",
      });
    }
  }

  checkPassword = () => {
    var pw1 = this.state.pw1
    var pw2 = this.state.pw2

    if (pw1 != pw2) {
      this.setState({
        pwErrorMsg: "Passwords must match."
      });
    } else {
      this.setState({
        pwErrorMsg: ""
      });
    }

  }

	render() {
		return (
		<View style = {styles.container}>
          <Toolbar
              centerElement="Settings"
          />
	        <View style = {styles.contentContainer}>
          <ScrollView>
              <FormLabel>Email</FormLabel>
              <FormInput
                // containerStyle={styles.input}
                placeholder={GLOBAL.currentUser.username}
                onChangeText={(text) => this.setState({email: text})}
                onEndEditing={this.onEmailSelectionChanged}
                onFocus={this.toggleKeyboardFocused}
              />
              <FormValidationMessage>
                {this.state.emailErrorMsg}
              </FormValidationMessage>
             
              <FormLabel>New Password</FormLabel>
              <FormInput
                secureTextEntry={true}
                placeholder="Enter New Password"
                onChangeText={(text) => this.setState({pw1: text})}
                onFocus={this.toggleKeyboardFocused}
              />
              <FormValidationMessage>
                {this.state.pwErrorMsg}
              </FormValidationMessage>
              
              <FormLabel>Retype New Password</FormLabel>
              <FormInput
                secureTextEntry={true}
                placeholder="Retype New Password"
                onChangeText={(text) => this.setState({pw2: text})}
                onFocus={this.toggleKeyboardFocused}
                onEndEditing={this.checkPassword}
              />
              <FormValidationMessage>
                {this.state.pwErrorMsg}
              </FormValidationMessage>

              <FormLabel>Weight</FormLabel>
              <FormInput
                onChangeText={(text) => this.setState({userWeight: text})}
                onFocus={this.toggleKeyboardFocused}
              />

              <FormLabel>Height</FormLabel>
              <FormInput
                onChangeText={(text) => this.setState({userHeight: text})}
                onFocus={this.toggleKeyboardFocused}
              />

              <FormLabel>Gender</FormLabel>
              <FormInput
                onChangeText={(text) => this.setState({userGender: text})}
                onFocus={this.toggleKeyboardFocused}
              />

              <FormLabel>Age</FormLabel>
              <FormInput
                onChangeText={(text) => this.setState({userAge: text})}
                onFocus={this.toggleKeyboardFocused}
              />
            </ScrollView>

            </View>

              <Button
                raised
                buttonStyle={styles.buttonStyle}
                title="Update Account Info"
              />
              <Button
                raised
                buttonStyle={styles.buttonStyle}
              	onPress={() => this.props.navigation.navigate('Main')}
              	title="Logout"
            	/>

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
  toolBarContainer: {
    flex: 1,
  },
  label: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  input: {
    width: 300,
    alignItems: 'center',
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
  contentContainer:{
    flex: 6,
    marginTop: 15,
    width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
    justifyContent: 'flex-start',
    marginBottom: 15,
    
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
  buttonStyle:{
    backgroundColor: '#bbb',
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  }
  

});
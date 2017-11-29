import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { Octicons } from '@expo/vector-icons';
import { Toolbar } from 'react-native-material-ui';
import ApiUtils from '../components/utils/ApiUtils';
import Api from '../components/Api';
import User from '../components/class/UserClass';

// const backAction = NavigationActions.back({
//   	key: 'Main',
// });

export default class Setting extends React.Component{
	state = {
    keyboardFocused: false,
    email: GLOBAL.currentUser.username,
    emailErrorMsg: "",
    weightErrorMsg: "",
    heightErrorMsg: "",
    ageErrorMsg: "",
    pw1: "",
    pw2: "",
    pwErrorMsg: "",
    userWeight: "",
    userHeight: "",
    userGender: "",
    userAge: "",
    isUpdating: false,
    updateErrorMsg: "",
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



  checkNumericFormatWeight = (num) => {
    if (isNaN(num)) {
      this.setState({
        weightErrorMsg: "Entry must be a number.",
      });
    } else {
      this.setState({
        weightErrorMsg: "",
      })
    }
  }

  checkNumericFormatHeight = (num) => {
    if (isNaN(num)) {
      this.setState({
        heightErrorMsg: "Entry must be a number.",
      });
    } else {
      this.setState({
        heightErrorMsg: "",
      })
    }
  }

  checkNumericFormatAge = (num) => {
    if (isNaN(num)) {
      this.setState({
        ageErrorMsg: "Entry must be a number.",
      });
    } else {
      this.setState({
        ageErrorMsg: "",
      })
    }
  }

  onPressUpdate = () => {
    this.setState({isUpdating: true});

    var username = this.state.email
    var password = this.state.pw1
    var userheight = this.state.userHeight
    var userweight = this.state.userWeight
    var usergender = this.state.userGender
    var userage = this.state.userAge

    Api.update(username, password, userheight, userweight, usergender, userage).then((response) => {
    
    if (typeof response === "undefined") {
        this.setState({
          pw1: "",
          pw2: "",
          updateErrorMsg: "Network error.",
          isUpdating: false,
        });
      }
      else if(response.Error != ""){
        this.setState({
          pw1: "",
          pw2: "",
          updateErrorMsg: response.Error,
          isUpdating: false,
        });
      }
      else{
        //Set global user
        GLOBAL.currentUser = User.initLoginInfo(response.UserID, 
                                                response.Age, 
                                                response.Gender, 
                                                response.Height, 
                                                response.Weight, 
                                                response.Friendlist, 
                                                response.Fitnesslist);

        console.log(GLOBAL.currentUser);

        //Navigate to the tabs
        this.setState({
          isUpdating: false,
        });
      }
    });

  }




	render() {
		return (
		<View style = {styles.container}>
          <Toolbar
              centerElement="Settings"
          />
	        <View style = {styles.contentContainer}>
          <ScrollView>
              <FormValidationMessage>
                {this.state.updateErrorMsg}
              </FormValidationMessage>
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
                onChangeText={(text) => this.setState({userWeight: text}), (text) => this.checkNumericFormatWeight(text)}
                onFocus={this.toggleKeyboardFocused}
              />
              <FormValidationMessage>
                {this.state.weightErrorMsg}
              </FormValidationMessage>

              <FormLabel>Height</FormLabel>
              <FormInput
                onChangeText={(text) => this.setState({userHeight: text}), (text) => this.checkNumericFormatHeight(text)}
                onFocus={this.toggleKeyboardFocused}
              />
              <FormValidationMessage>
                {this.state.heightErrorMsg}
              </FormValidationMessage>

              <FormLabel>Gender</FormLabel>
              <FormInput
                placeholder="M or F"
                onChangeText={(text) => this.setState({userGender: text})}
                onFocus={this.toggleKeyboardFocused}
              />
              <FormValidationMessage>
              </FormValidationMessage>

              <FormLabel>Age</FormLabel>
              <FormInput
                onChangeText={(text) => this.setState({userAge: text}), (text) => this.checkNumericFormatAge(text)}
                onFocus={this.toggleKeyboardFocused}
              />
              <FormValidationMessage>
               {this.state.ageErrorMsg}
              </FormValidationMessage>
            </ScrollView>

            </View>

              <Button
                raised
                buttonStyle={styles.buttonStyle}
                title="Update Account Info"
                onPress={this.onPressUpdate}
                loading={this.state.isUpdating}
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
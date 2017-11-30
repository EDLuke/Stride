import React from 'react';
import { StyleSheet, Text, TextInput, View, ToolbarAndroid, Dimensions } from 'react-native';
import { Container, Toast } from 'native-base';
import moment from 'moment';
import DatePicker from 'react-native-datepicker'
import Api from '../components/Api';
import { MaterialIcons } from '@expo/vector-icons';
import { Toolbar } from 'react-native-material-ui';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

GLOBAL = require('../components/CurrentUser');



export default class ChartsAdd extends React.Component{

	state = {
      calorie: '0',
      calErrorMsg: "",
      error: '',
      date: moment(),

      isAdding: false,

      keyboardFocused: false,
  	};

  	toggleKeyboardFocused = () => {
    	this.setState({
      		keyboardFocused: !this.state.keyboardFocused,
    	});

  	}

  	setCalorie = (cal) =>{
  		this.setState({calorie: cal});
  		if (isNaN(this.state.calorie)) {
  			this.setState({
  				calErrorMsg: "Entry must be a number.",
  			});
  		} else {
  			this.setState({
  				calErrorMsg: "",
  			})
  		}

  	}

	onActionSelected = () => {

		console.log("adding");

		this.setState({
			isAdding: true,
		});

		var userName = GLOBAL.currentUser.username;
		var date = moment(this.state.date).format("YYYY-MM-DD");
		var calorie = this.state.calorie;

		Api.addFitness(userName, calorie, date).then((response) => {
			 console.log(response);
			 
			 if (typeof response === "undefined") {
		        this.setState({
		          calorie: '0',
		          date: moment(),
		          error: "Network error.",
		        });

		        this.setState({
		      		isAdding: false,
		      	});

		        Toast.show({
		          text: "Network error. Please try again.",
		          position: 'bottom',
		          buttonText: 'Okay',
		        });

		      }
		      else if(response.Error != ""){
		        this.setState({
		          calorie: '0',
		          date: moment(),
		          error: response.Error,
		        });

		        this.setState({
		      		isAdding: false,
		      	});

		        Toast.show({
		          text: this.state.error,
		          position: 'bottom',
		          buttonText: 'Okay',
		        });

		      }
		      else{
		      	//If successful, append to the GLOBAL user
		      	GLOBAL.currentUser.FitnessRecord.push(
		      	{
		      		date: date,
		      		calorie: calorie,
		      	});

		      	this.setState({
		      		isAdding: false,
		      	});

		      	Toast.show({
		          text: "Record added successfully.",
		          position: 'bottom',
		          buttonText: 'Okay',
		        });

		      	//call Chart's refresh function
		      	this.props.navigation.state.params.refresh();

		      	// go back to the previous screen
		      	// const {goBack} = this.props.navigation;


         //        goBack();
		      }
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<Toolbar
			      centerElement="Add Record"
			    />
				    <View style={styles.chartContainer}>
				    		<FormLabel>Calorie</FormLabel>
				    		<FormInput
				                placeholder="0"
				                onChangeText={(text) => this.setCalorie(text)}
				                onFocus={this.toggleKeyboardFocused}
				              />
				             <FormValidationMessage>
				             	{this.state.calErrorMsg}
				             </FormValidationMessage>
				    		<FormLabel>Date</FormLabel>
				    		<DatePicker
						        style={{
						        	width: 300
						        }}
						        date={this.state.date}
						        mode="date"
						        showIcon={true}
						        placeholder="select date"
						        format="YYYY-MM-DD"
						        minDate="2017-01-01"
						        maxDate="2018-12-31"
						        confirmBtnText="Confirm"
						        cancelBtnText="Cancel"
						        onDateChange={(date) => {this.setState({date: date})}}
						        iconSource={require('../../assets/images/google_calendar.png')}
						        customStyles={{
						        	dateInput: {
						        		marginLeft: 23
						        	}
						        }}
						      />
						      
				    </View>

				    		<Button
                				raised
                				buttonStyle={styles.buttonStyle}
                				title="Back"
                				onPress={() => this.props.navigation.dispatch(NavigationActions.back())}

              				  />
              				  <Button
                				raised
                				buttonStyle={styles.buttonStyle}
                				title="Add"
                				onPress={this.onActionSelected}
                				loading={this.state.isAdding}
              				  />
	      </View>
		);
	}
}


const backIcon = (<MaterialIcons name="arrow-back" size={25} color="#FFF"/>);

const checkIcon = (<MaterialIcons name="check" size={25} color="#FFF" />);

const toolbarActions = [
	{title: 'Add', icon: require('../../assets/images/check.png'), show: 'always'},	
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center',
  },
  chartContainer: {
  	flex: 6,
  	marginTop: 15,
  	marginBottom: 15,
  	width: Dimensions.get('window').width,
  	justifyContent: 'flex-start',
  },
  calorieContainer: {

  },
  dateContainer: {

  },
  calorieText: {
  	fontFamily: 'Helvetica',
    fontSize: 17,
  },
  dateText: {
  	fontFamily: 'Helvetica',
    fontSize: 17,
  },
  calorieTextInput: {
  	textAlign:"center",
  	color: '#000',
  	borderColor: 'gray', 
  	borderWidth: 1,
  	width: 250,
  	height: 37,
  },
  toolbar: {
    backgroundColor: '#578CA9',
    height: 56,
  },
  buttonStyle:{
    backgroundColor: '#bbb',
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
});

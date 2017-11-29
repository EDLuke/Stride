import React from 'react';
import { StyleSheet, Text, TextInput, View, ToolbarAndroid } from 'react-native';
import { Container, Button } from 'native-base';
import moment from 'moment';
import DatePicker from 'react-native-datepicker'
import Api from '../components/Api';

GLOBAL = require('../components/CurrentUser');

export default class ChartsAdd extends React.Component{

	state = {
      calorie: '0',
      error: '',
      date: moment(),
  	};

	onActionSelected = () => {
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
		      }
		      else if(response.Error != ""){
		        this.setState({
		          calorie: '0',
		          date: moment(),
		          error: response.Error,
		        });
		      }
		      else{
		      	//If successful, append to the GLOBAL user
		      	GLOBAL.currentUser.FitnessRecord.push(
		      	{
		      		date: date,
		      		calorie: calorie,
		      	});

		      	//call Chart's refresh function
		      	this.props.navigation.state.params.refresh();

		      	//go back to the previous screen
		      	const {goBack} = this.props.navigation;
                goBack();
		      }
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<ToolbarAndroid
			      title="Add Record"
			      titleColor="#FFF"
			      style={styles.toolbar}
			      actions={toolbarActions}
			      onActionSelected={() => this.onActionSelected()}
			    />
			    <Container>
				    <View style={styles.chartContainer}>
				    	<View style={styles.calorieContainer}>
				    		<Text style={styles.calorieText}>Calorie</Text>
				    		<TextInput
				                style = {styles.calorieTextInput}
				                underlineColorAndroid="transparent"
				                onChangeText={(text) => this.setState({calorie:text})}
				                value = {this.state.calorie}
				              />
				    	</View>
				    	<View style={styles.dateContainer}>
				    		<Text style={styles.dateText}>Date</Text>
				    		<DatePicker
						        style={{width: 250}}
						        date={this.state.date}
						        mode="date"
						        showIcon={false}
						        placeholder="select date"
						        format="YYYY-MM-DD"
						        minDate="2017-01-01"
						        maxDate="2018-12-31"
						        confirmBtnText="Confirm"
						        cancelBtnText="Cancel"
						        onDateChange={(date) => {this.setState({date: date})}}
						      />
				    	</View>
				    </View>
		      	</Container>
	      </View>
		);
	}
}

const toolbarActions = [
	{title: 'Add', icon: require('../../assets/images/check.png'), show: 'always'},	
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chartContainer: {
  	marginLeft: 35,
  	marginTop: 50,
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
});
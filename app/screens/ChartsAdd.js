import React from 'react';
import { StyleSheet, Text, TextInput, View, ToolbarAndroid } from 'react-native';
import { Container, Button } from 'native-base';
import moment from 'moment';
import DatePicker from 'react-native-datepicker'

GLOBAL = require('../components/CurrentUser');

const TOOLBAR_HEIGHT = ToolbarAndroid.currentHeight;
console.log(ToolbarAndroid);

export default class ChartsAdd extends React.Component{

	state = {
      calorie: '0',
      error: '',
      date: moment(),
  	};

	onActionSelected = () => {
		//Navigate to the ChartsAdd
        this.props.navigation.navigate('ChartsAdd');
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
				                placeholderTextColor="#FFF"
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
  	alignItems:'center', 
  	color: '#FFF',
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
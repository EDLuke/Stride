import React from 'react';
import { FlatList, ScrollView, StyleSheet, View, ToolbarAndroid, Dimensions } from 'react-native';
import { Card, CardItem, Text, Body, Button, Icon, Left, Right, Container, List} from 'native-base';
import User from '../components/class/UserClass.js';
import SingleCalorie from '../components/layout/SingleCalorie';
import SingleFriendCard from '../components/layout/SingleFriendCard';
import moment from 'moment';
import { Octicons, MaterialIcons } from '@expo/vector-icons';
import { Toolbar } from 'react-native-material-ui';
import { NavigationBar, Title, Image } from '@shoutem/ui';
import { AssetUtils } from '../components/AssetUtils.js';

GLOBAL = require('../components/CurrentUser');

const renderCalorieList = (post, index) => (
	<SingleCalorie
	    key={index}
	    date={post.date}
	    calorieIn={post.calorieIn}
	    calorieOut={post.calorieOut}
  	/>
)

const renderCalorieCard = (records) => (
	<SingleFriendCard
		records = {records}
		addFriend = {false}
	/>
)

export default class Charts extends React.Component{

	groupByDate(records){
		// console.log(records);

		var sorted = records.sort(function(a, b){
			return a.days - b.days;
		});

		var ret = [];
		var idx = 0;
		var current = records[0];
		for(var i = 1; i < sorted.length; i++){
			var iter = sorted[i];
			if(iter.days == current.days){
				current.calorieIn = current.calorieIn + iter.calorieIn;
				current.calorieOut = current.calorieOut + iter.calorieOut; 
			}
			else{
				ret.push(current);
				current = iter;
			}
		}
		ret.push(current);

		return ret;
	}

	refresh = () => {
		// refresh the state
		this.setState({
			records: (GLOBAL.currentUser.FitnessRecord.length == 0) ? [] : this.groupByDate(GLOBAL.currentUser.FitnessRecord.map(
			    	function(fitness){
			    		var first = GLOBAL.currentUser.FitnessRecord[0];

			    		return {
			    			days: moment(fitness.date).diff(first.date, 'days'),
			    			calorieIn: parseInt(fitness.calorieIn),
			    			calorieOut: parseInt(fitness.calorieOut)
			    		}
	    			})),
		});

		console.log(this.state.records);
	}

	state = {
	    records: (GLOBAL.currentUser.FitnessRecord.length == 0) ? [] : this.groupByDate(GLOBAL.currentUser.FitnessRecord.map(
	    	function(fitness){
	    		var first = GLOBAL.currentUser.FitnessRecord[0];

	    		return {
	    			days: moment(fitness.date).diff(first.date, 'days'),
	    			calorieIn: parseInt(fitness.calorieIn),
	    			calorieOut: parseInt(fitness.calorieOut)
	    		}
	    	}))
	};

	onPressAdd = () => {
		// Navigate to the ChartsAdd
        this.props.navigation.navigate('ChartsAdd', {refresh: this.refresh, calorie: 0, calorieType: 'food'});
	}

	render() {
	    let data = [
	      this.state.records
	    ]
    
		return (
			<View style={styles.container}>
				<Image
			        source={{uri: AssetUtils.toolbarimg}}
			        style={{ width: 375, height: 70 }}
			     >
			      <NavigationBar
			        styleName="clear"
			        centerComponent={<Title>PROGRESSION</Title>}
			      />
			    </Image>
			    <View style={styles.chartContainer}>
			    	{
			    		renderCalorieCard(this.state.records)
			    	}
			    </View>	
			    <ScrollView style={styles.listContainer}>			
	          		<List>
		            {GLOBAL.currentUser.FitnessRecord.length > 0 && 
		              this.state.records.map((record, index) => {
		              	let d = moment(GLOBAL.currentUser.FitnessRecord[0].date)

			          	let date = d.add(record.days,'days').format('MM-DD')
			          	let recordNew = {
			          		date: date,
			          		calorieIn: record.calorieIn.toString(),
			          		calorieOut: record.calorieOut.toString()
			          	}

		              	return renderCalorieList(recordNew, index)
		              })
		            }
		          	</List>
			    </ScrollView>
		      	
		      	<Button
		          rounded
		          style={styles.button}
		          onPress={() => this.onPressAdd()}
		        >
		        	<Octicons
		            name="plus"
		            size={16}
		            color="#FFF"
		            style=
		            {{
		            	left: 2,
		            	padding: 15
		            }}
		          />
		        </Button>
		        <Button
		          rounded
		          style={styles.refresh}
		          onPress={() => this.refresh()}
		        >
		        	<Octicons
		            name="sync"
		            size={16}
		            color="#FFF"
		            style=
		            {{
		            	left: 2,
		            	padding: 15
		            }}
		          />
		        </Button>

	      </View>
		);
	}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chartContainer: {
  	flex: 2,
  },
  listContainer: {
  	flex: 1,
  },
  toolbar: {
    backgroundColor: '#578CA9',
    height: 56,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  refresh: {
    position: 'absolute',
    bottom: 70,
    right: 20,
  },
  contentContainer:{
    flex: 1,
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 7,
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Rubik-Regular',
    overflow: 'scroll',
  },
});

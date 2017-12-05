import React from 'react';
import { FlatList, ScrollView, StyleSheet, View, ToolbarAndroid, Dimensions } from 'react-native';
import { Card, CardItem, Text, Body, Button, Icon, Left, Right, Container, List} from 'native-base';
import User from '../components/class/UserClass.js';
import { SmoothLine, StockLine } from 'react-native-pathjs-charts';
import SingleCalorie from '../components/layout/SingleCalorie';
import moment from 'moment';
import { Octicons, MaterialIcons } from '@expo/vector-icons';
import { Toolbar } from 'react-native-material-ui';
import { ArtyCharty } from 'arty-charty';
import { NavigationBar, Title, Image } from '@shoutem/ui';

GLOBAL = require('../components/CurrentUser');

const renderCalorie = (post, index) => (
	<SingleCalorie
	    key={index}
	    date={post.date}
	    calorieIn={post.calorieIn}
	    calorieOut={post.calorieOut}
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

		// console.log(ret);

		return ret;
	}

	refresh = () => {
		// refresh the state
		this.setState({
			records: this.groupByDate(GLOBAL.currentUser.FitnessRecord.map(
			    	function(fitness){
			    		var first = GLOBAL.currentUser.FitnessRecord[0];

			    		return {
			    			days: moment(fitness.date).diff(first.date, 'days'),
			    			calorieIn: parseInt(fitness.calorieIn),
			    			calorieOut: parseInt(fitness.calorieOut)
			    		}
	    			})),
		});
	}

	state = {
	    records: this.groupByDate(GLOBAL.currentUser.FitnessRecord.map(
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
			        source={{uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png'}}
			        style={{ width: 375, height: 70 }}
			     >
			      <NavigationBar
			        styleName="clear"
			        centerComponent={<Title>PROGRESSION</Title>}
			      />
			    </Image>
			    <View style={styles.chartContainer}>
			    	<View style={styles.contentContainer}>
    				  <Card>
     					<CardItem>
        				  <Left>
         					<Body>
				            <Text style={styles.name}>Calorie Chart</Text>
				          	</Body>
				          </Left>
				      	</CardItem>
				      	<CardItem cardBody>
				        <ArtyCharty
				      		interactive={true}
					    	animated={true}
					    	yAxisLeft={{numberOfTicks: 5}}
					    	clickFeedback={true}
					    	pointsOnScreen={this.state.records.length}
						    width={Dimensions.get('window').width - 35}
						    data={[
						    {
						        type: 'line',
						        lineColor: 'green',
						        data: this.state.records.map((record) => {
						        	return {value: record.calorieIn};
						        }),
						        drawChart: true
						    },
						    {
						        type: 'line',
						        lineColor: 'red',
						        data: this.state.records.map((record) => {
						        	return {value: record.calorieOut};
						        }),
						        drawChart: true
						    }
					        ]} 
					   	/>
					  	</CardItem>
					  </Card>
				  </View>	
			    </View>	
			    <ScrollView style={styles.listContainer}>			
	          		<List>
		            {
		              this.state.records.map((record, index) => {
		              	let d = moment(GLOBAL.currentUser.FitnessRecord[0].date)

			          	let date = d.add(record.days,'days').format('MM-DD')
			          	let recordNew = {
			          		date: date,
			          		calorieIn: record.calorieIn.toString(),
			          		calorieOut: record.calorieOut.toString()
			          	}

		              	return renderCalorie(recordNew, index)
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

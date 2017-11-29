import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View, ToolbarAndroid } from 'react-native';
import { Container, Button, Content, List } from 'native-base';
import User from '../components/class/UserClass.js';
import { SmoothLine, StockLine } from 'react-native-pathjs-charts';
import SingleCalorie from '../components/layout/SingleCalorie';
import moment from 'moment';
import { Octicons, MaterialIcons } from '@expo/vector-icons';
import { Toolbar } from 'react-native-material-ui';

GLOBAL = require('../components/CurrentUser');

const renderCalorie = (post, index) => (
	<SingleCalorie
	    key={index}
	    date={post.date}
	    calorie={post.calorie}
  	/>
)

export default class Charts extends React.Component{

	refresh = () => {
		// refresh the state
		this.setState({
			records: GLOBAL.currentUser.FitnessRecord.map(
			    	function(fitness){
			    		var first = GLOBAL.currentUser.FitnessRecord[0];

			    		return {
			    			days: moment(fitness.date).diff(first.date, 'days'),
			    			calorie: parseInt(fitness.calorie),
			    		}
	    			}),
		});
	}

	state = {
	    records: GLOBAL.currentUser.FitnessRecord.map(
	    	function(fitness){
	    		var first = GLOBAL.currentUser.FitnessRecord[0];

	    		return {
	    			days: moment(fitness.date).diff(first.date, 'days'),
	    			calorie: parseInt(fitness.calorie),
	    		}
	    	}),
	    options: {
	      width: 250,
	      height: 250,
	      color: '#2980B9',
	      margin: {
	        top: 0,
	        left: 45,
	        bottom: 35,
	        right: 25,
	      },
	      animate: {
	        type: 'delayed',
	        duration: 200
	      },
	      axisX: {
	        showAxis: true,
	        showLines: true,
	        showLabels: true,
	        showTicks: true,
	        zeroAxis: false,
	        orient: 'bottom',
	        tickValues: [],
	        labelFunction: ((v) => {
	          let d = moment(GLOBAL.currentUser.FitnessRecord[0].date)

	          if(v % 1 === 0)
	          	return d.add(v,'days').format('MM-DD') 
	          return ""
	        }),
	        label: {
	          fontFamily: 'Arial',
	          fontSize: 8,
	          fontWeight: true,
	          fill: '#34495E'
	        }
	      },
	      axisY: {
	        showAxis: true,
	        showLines: true,
	        showLabels: true,
	        showTicks: true,
	        zeroAxis: false,
	        orient: 'left',
	        tickValues: [],
	        label: {
	          fontFamily: 'Arial',
	          fontSize: 8,
	          fontWeight: true,
	          fill: '#34495E'
	        }
	      }
	  	}
	};

	onPressAdd = () => {
		// Navigate to the ChartsAdd
        this.props.navigation.navigate('ChartsAdd', {refresh: this.refresh});
	}

	render() {
	    let data = [
	      this.state.records
	    ]


	    let options = this.state.options
    
		return (
			<View style={styles.container}>
				<Toolbar
					centerElement="Progression"
			    />

			    <View style={styles.chartContainer}>
	       		 <StockLine data={data} options={options} xKey='days' yKey='calorie' />
			    </View>
			    <ScrollView style={styles.listContainer}>			
	          		<List>
		            {
		              this.state.records.map((record, index) => {
		              	let d = moment(GLOBAL.currentUser.FitnessRecord[0].date)

			          	let date = d.add(record.days,'days').format('MM-DD')
			          	let recordNew = {
			          		date: date,
			          		calorie: record.calorie.toString()
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
  	marginTop: 10,
  	alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {

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
});

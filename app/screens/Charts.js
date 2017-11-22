import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View, ToolbarAndroid } from 'react-native';
import { Container, Button } from 'native-base';
import User from '../components/class/UserClass.js';
import { SmoothLine, StockLine } from 'react-native-pathjs-charts';
import moment from 'moment';
import { Octicons } from '@expo/vector-icons';

GLOBAL = require('../components/CurrentUser');

export default class Charts extends React.Component{
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
	          let d = moment('2016-10-08 14:00','YYYY-MM-DD HH:mm')
	          return d.add((v * 2),'hours').format('h:mm A')
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
		//Navigate to the ChartsAdd
        this.props.navigation.navigate('ChartsAdd');
	}

	render() {
	    let data = [
	      this.state.records
	    ]


	    let options = {
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
    
		return (
			<View style={styles.container}>
				<ToolbarAndroid
			      title="Progression"
			      titleColor="#FFF"
			      style={styles.toolbar}
			    />
			    <Container>
				    <View style={styles.chartContainer}>
		       		 <StockLine  data={data} options={options} xKey='days' yKey='calorie' />
				    </View>
		      	</Container>
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

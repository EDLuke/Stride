import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View, ToolbarAndroid } from 'react-native';
import { Container, Button } from 'native-base';
import User from '../components/class/UserClass.js';
import { SmoothLine, StockLine } from 'react-native-pathjs-charts';
import moment from 'moment';
import { Octicons } from '@expo/vector-icons';

GLOBAL = require('../components/CurrentUser');

const TOOLBAR_HEIGHT = ToolbarAndroid.currentHeight;
console.log(ToolbarAndroid);

export default class Charts extends React.Component{
	state = {
    records: [
      {
        'date':'10-17',
        'calorie':'1500',
        'goal':'1500'
      },
      {
        'date':'10-18',
        'calorie':'2000',
        goal:'1500'
      },
      {
        'date':'10-19',
        'calorie':'3000',
        goal:'1700'
      },
      {
        'date':'10-20',
        'calorie':'1000',
        goal:'1500'
      },
      {
        'date':'10-21',
        'calorie':'1500',
        goal:'1300'
      },
      {
        'date':'10-22',
        'calorie':'2500',
        goal:'1500'
      },
      {
        'date':'10-23',
        'calorie':'1500',
        goal:'1700'
      }
    ],
    options: {
      width: 280,
      height: 280,
      color: '#2980B9',
      margin: {
        top: 20,
        left: 45,
        bottom: 25,
        right: 20
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
        label: {
          fontFamily: 'Arial',
          fontSize: 14,
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
        label: {
          fontFamily: 'Arial',
          fontSize: 14,
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
      [{
        "x": 0,
        "y": 47782
      }, {
        "x": 1,
        "y": 48497
      }, {
        "x": 2,
        "y": 77128
      }, {
        "x": 3,
        "y": 73413
      }]
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
    
		return (
			<View style={styles.container}>
				<ToolbarAndroid
			      title="Progression"
			      titleColor="#FFF"
			      style={styles.toolbar}
			    />
			    <Container>
				    <View style={styles.chartContainer}>
		       		 <StockLine  data={data} options={options} xKey='x' yKey='y' />
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

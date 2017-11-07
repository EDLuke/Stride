import React from 'react';
import {Font} from 'expo';
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import User from '../components/class/UserClass.js';
import { SmoothLine } from 'react-native-pathjs-charts';

GLOBAL = require('../components/CurrentUser');

export default class Charts extends React.Component{
	state = {
    records: [
      {
        'date':'10-17',
        'calorie':'1500',
        goal:'1500'
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

	render() {
    let data = [
      [{
        "x": -10,
        "y": -1000
      }, {
        "x": -9,
        "y": -729
      }, {
        "x": -8,
        "y": -512
      }, {
        "x": -7,
        "y": -343
      }, {
        "x": -6,
        "y": -216
      }, {
        "x": -5,
        "y": -125
      }, {
        "x": -4,
        "y": -64
      }, {
        "x": -3,
        "y": -27
      }, {
        "x": -2,
        "y": -8
      }, {
        "x": -1,
        "y": -1
      }, {
        "x": 0,
        "y": 0
      }, {
        "x": 1,
        "y": 1
      }, {
        "x": 2,
        "y": 8
      }, {
        "x": 3,
        "y": 27
      }, {
        "x": 4,
        "y": 64
      }, {
        "x": 5,
        "y": 125
      }, {
        "x": 6,
        "y": 216
      }, {
        "x": 7,
        "y": 343
      }, {
        "x": 8,
        "y": 512
      }, {
        "x": 9,
        "y": 729
      }, {
        "x": 10,
        "y": 1000
      }],
      [{
        "x": -10,
        "y": 100
      }, {
        "x": -9,
        "y": 81
      }, {
        "x": -8,
        "y": 64
      }, {
        "x": -7,
        "y": 49
      }, {
        "x": -6,
        "y": 36
      }, {
        "x": -5,
        "y": 25
      }, {
        "x": -4,
        "y": 16
      }, {
        "x": -3,
        "y": 9
      }, {
        "x": -2,
        "y": 4
      }, {
        "x": -1,
        "y": 1
      }, {
        "x": 0,
        "y": 0
      }, {
        "x": 1,
        "y": 1
      }, {
        "x": 2,
        "y": 4
      }, {
        "x": 3,
        "y": 9
      }, {
        "x": 4,
        "y": 16
      }, {
        "x": 5,
        "y": 25
      }, {
        "x": 6,
        "y": 36
      }, {
        "x": 7,
        "y": 49
      }, {
        "x": 8,
        "y": 64
      }, {
        "x": 9,
        "y": 81
      }, {
        "x": 10,
        "y": 100
      }]
    ]

    let options = {
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
    
		return (
			<View style={styles.container}>
        <SmoothLine data={data} options={options} xKey='x' yKey='y' />
      </View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    fontFamily: 'Helvetica',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#494949'
  },
  subtitle: {
    fontFamily: 'Helvetica',
    fontSize: 25,
    color: '#686868'
  },
  boxtitle: {
    fontFamily: 'Helvetica',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#686868'
  },
  boxtext:{
    fontFamily: 'Helvetica',
    fontSize: 18,
    color: '#686868'
  },
  textBoxContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    padding: 10,
  },
  chartBoxContainer: {
    flex: 3,
    backgroundColor: '#bbb',
    justifyContent: 'flex-start',
    aspectRatio: 3
  },
  buttonContainer: {
    margin: 50,
  }
});

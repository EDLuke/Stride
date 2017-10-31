import React from 'react';
import {Font} from 'expo';
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import User from '../components/class/UserClass.js'

GLOBAL = require('../components/CurrentUser');

export default class Charts extends React.Component{
	state = {
	};
  
  // async componentDidMount(){
  //   /* Load the assets for Expo app*/
  //   await Font.loadAsync({
  //     'Helvetica': require('../../assets/fonts/Helvetica.ttf'),
  //   });

  //   this.setState({fontLoaded: true});
  // }

	render() {
		return (
			<View style = {styles.container}>
            <View style={styles.textBoxContainer}>
				    {
            	<Text style={styles.title}>Visualize...</Text>
        		}
        		{
        			<Text style={styles.subtitle}>During the last 7 days</Text>
        		}
            </View>
        		{
        		<View style={styles.textBoxContainer}>
        				<Text style={styles.boxtitle}>Calorie Output</Text>
        		</View>
            }
            {
        			<View style={styles.chartBoxContainer}>
        				<ScrollView>
        					<Text style = {styles.boxtext}>
                    {GLOBAL.currentUser.username}'s Chart
                  </Text>
        				</ScrollView>
        			</View>
        		}
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

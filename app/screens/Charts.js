import React from 'react';
import {Font} from 'expo';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Charts extends React.Component{
	state = {
		fontLoaded: false,
	};
  
  async componentDidMount(){
    /* Load the assets for Expo app*/
    await Font.loadAsync({
      'Helvetica': require('../../assets/fonts/Helvetica.ttf'),
    });

    this.setState({fontLoaded: true});
  }

	render() {
		return (
			<View style = {styles.container}>
				{
          			this.state.fontLoaded ? 
          			(
            		<Text style={styles.title}>Visualize...</Text>
          			) : null
        		}
        		{
        			this.state.fontLoaded ?
        			(
        			<Text style={styles.subtitle}>During the last 7 days</Text>
        			) : null
        		}
        		{
        		<View style={styles.textBoxContainer}>
        			{
        				this.state.fontLoaded ?
        				(	
        				<Text style={styles.boxtitle}>Calorie Output</Text>
        				) : null
        			}
        			<View style={styles.chartBoxContainer}></View>
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
  textBoxContainer: {
  	backgroundColor: '#fff',
    height: 30,
    width: 300,
  	margin: 20,
  	justifyContent: 'flex-start',
  },
  chartBoxContainer: {
  	backgroundColor: '#bbb',
  	height: 150,
  	width: 300,
  	margin: 20,
  	justifyContent: 'flex-start'
  },
  buttonContainer: {
    margin: 50,
  }
});

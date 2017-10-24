import React from 'react';
import {Font} from 'expo';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Today extends React.Component{
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
            		<Text style={styles.title}>Today...</Text>
          			) : null
        		}
        		{
        		<View style={styles.textBoxContainer}>
        			{
        				this.state.fontLoaded ?
        				(	
        				<Text style={styles.boxtitle}>What did you have for meal?</Text>
        				) : null
        			}
        			<View style={styles.chartBoxContainer}></View>
        		</View>
        		}
        		{
        		<View style={styles.textBoxContainer}>
        			{
        				this.state.fontLoaded ?
        				(	
        				<Text style={styles.boxtitle}>How much exercise did you get?</Text>
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
  	flex: 2,
  	backgroundColor: '#fff',
    height: 200,
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
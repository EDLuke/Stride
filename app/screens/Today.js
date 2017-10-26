import React from 'react';
import {Font} from 'expo';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

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
        				<Text style={styles.boxtitle}>MealPlan</Text>
        				) : null
        			}
        			<View style={styles.chartBoxContainer}>
        				<ScrollView>
        					<Text style={styles.boxtext}>{
                    GLOBAL.currentUser.username
                  } astonishingly weights {
                    GLOBAL.currentUser.weight
                  } so probably should not eat anything today.
                  </Text>

        				</ScrollView>
        			</View>
        		</View>
        		}
        		{
        		<View style={styles.textBoxContainer}>
        			{
        				this.state.fontLoaded ?
        				(	
        				<Text style={styles.boxtitle}>Exercise</Text>
        				) : null
        			}
        			<View style={styles.chartBoxContainer}>
        				<ScrollView>
        					<Text style={styles.boxtext}>ScrollMePls.</Text>
        					<Text style={styles.boxtext}>ScrollMePls.</Text>
        					<Text style={styles.boxtext}>ScrollMePls.</Text>
        					<Text style={styles.boxtext}>ScrollMePls.</Text>
        					<Text style={styles.boxtext}>ScrollMePls.</Text>
        					<Text style={styles.boxtext}>ScrollMePls.</Text>
        					<Text style={styles.boxtext}>ScrollMePls.</Text>
        					<Text style={styles.boxtext}>ScrollMePls.</Text>
        					<Text style={styles.boxtext}>ScrollMePls.</Text>

        				</ScrollView>
        			</View>
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
    height: 33,
  	color: '#686868'
  },
  textBoxContainer: {
  	flex: 2,
  	backgroundColor: '#fff',
  	margin: 20,
  	justifyContent: 'flex-start',
  },
  chartBoxContainer: {
    flex: 2,
  	backgroundColor: '#bbb',
  	margin: 20,
  	justifyContent: 'flex-start'
  },
  buttonContainer: {
    margin: 50,
  }
});
import React from 'react';
import {Font} from 'expo';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

export default class Today extends React.Component{
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
            <Text style={styles.title}>Today...</Text>
            </View>
        		{
        		<View style={styles.textBoxContainer}>
        				<Text style={styles.boxtitle}>MealPlan</Text>
            </View>
            }
            {
        		<View style={styles.chartBoxContainer}>
        			<ScrollView>
        				<Text style={styles.boxtext}>{
                  GLOBAL.currentUser.username
                } astonishingly weights {
                  GLOBAL.currentUser.weight
                } so probablyweiugwiuqhgouwahguwqh should not eat anything today.
              </Text>
              </ScrollView>
        		</View>
        		}
        		{
        		  <View style={styles.textBoxContainer}>
        				<Text style={styles.boxtitle}>Exercise</Text>
              </View> 
            }
            {
        			<View style={styles.chartBoxContainer}>
        				<ScrollView>
        					<Text style={styles.boxtext}>ScrollMePls.--------------</Text>
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
    flex: 5,
  	backgroundColor: '#bbb',
  	justifyContent: 'flex-start',
    aspectRatio: 3
  },
  buttonContainer: {
    margin: 50,
  }
});
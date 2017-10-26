import React from 'react';
import {Font} from 'expo';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

export default class Social extends React.Component{
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
            		<Text style={styles.title}>Your Friends' Circle</Text>
            		) : null
        		}
        		{
        		<View style={styles.textBoxContainer}>	
        			{
        				this.state.fontLoaded ?
        				(	
        				<Text style={styles.boxtitle}>LeaderBoard </Text>
        				) : null
        			}
        			<View style={styles.leaderBoardBoxContainer}>
                  <ScrollView>
                  <Text style={styles.boxtext}>1 HEHEXD 1210 Calorie</Text>
                  <Text style={styles.boxtext}>2 HEHEXD 1210 Calorie</Text>
                  <Text style={styles.boxtext}>3 HEHEXD 1210 Calorie</Text>
                  <Text style={styles.boxtext}>4 HEHEXD 1210 Calorie</Text>
                  <Text style={styles.boxtext}>5 HEHEXD 1210 Calorie</Text>
                  <Text style={styles.boxtext}>6 HEHEXD 1210 Calorie</Text>
                  <Text style={styles.boxtext}>7 HEHEXD 1210 Calorie</Text>
                  <Text style={styles.boxtext}>8 HEHEXD 1210 Calorie</Text>
                  <Text style={styles.boxtext}>9 HEHEXD 1210 Calorie</Text>
                  <Text style={styles.boxtext}>10 ILLUMINATI 888 Calorie</Text>
                  <Text style={styles.boxtext}>11 ILLUMINATI 888 Calorie</Text>
                  <Text style={styles.boxtext}>12 ILLUMINATI 888 Calorie</Text>
                  <Text style={styles.boxtext}>13 ILLUMINATI 888 Calorie</Text>
                  <Text style={styles.boxtext}>14 ILLUMINATI 888 Calorie</Text>
                  <Text style={styles.boxtext}>15 ILLUMINATI 888 Calorie</Text>
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
    fontSize: 20,
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
  leaderBoardBoxContainer: {
  	backgroundColor: '#bbb',
  	height: 400,
  	width: 300,
  	margin: 20,
  	justifyContent: 'flex-start'
  },
  buttonContainer: {
    margin: 50,
  }
});

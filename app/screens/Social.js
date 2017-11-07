import React from 'react';
import {Font} from 'expo';
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

GLOBAL = require('../components/CurrentUser');

// class MyListItem extends React.PureComponent { 
//   _onPress = () => { 
//     this.props.onPressItem(this.props.id); 
//   }; 
//   render() {
//     <Text style={styles.boxtext}
//       onPress={() => this.props.navigation.navigate('SocialDetail')}
//     >{item}</Text>
//     } 
// }

export default class Social extends React.Component{
	state = {
	};

	render() {
		return (
			<View style = {styles.container}>
              <View style={styles.textBoxContainer}>
            		<Text style={styles.title}>Friends' Circle</Text>
              </View>
        		<View style={styles.textBoxContainer}>	
        				<Text style={styles.boxtitle}>LeaderBoard</Text>
            </View>
        			<View style={styles.leaderBoardBoxContainer}>
                  <ScrollView>
                  <FlatList
                    data = {GLOBAL.currentUser.friends}
                    keyExtractor = {(item, index) => item}
                    renderItem = {({item}) => <Text style={styles.boxtext}
                                                onPress={() => this.props.navigation.navigate('SocialDetail', {name: item})}
                                              >{item}</Text>}
                  />
                  </ScrollView>
              </View>
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
  	flex: 1,
  	backgroundColor: '#fff',
  	justifyContent: 'flex-start',
    marginTop: 10,
    padding: 10
  },
  leaderBoardBoxContainer: {
    flex: 3, 
  	backgroundColor: '#bbb',
  	justifyContent: 'flex-start',
    aspectRatio: 3

  },
  buttonContainer: {
    margin: 50,
  }
});

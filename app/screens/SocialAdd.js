import React, { Component } from 'react';
import {Font} from 'expo';
import { ScrollView, StyleSheet, View, ToolbarAndroid, TextInput  } from 'react-native';
import { Container, Content, List, Button, Icon, Text } from 'native-base';
import { Octicons, MaterialIcons } from '@expo/vector-icons';
import { AssetUtils } from '../components/AssetUtils.js';
import { Toolbar } from 'react-native-material-ui';
import { NavigationBar, Title, Image } from '@shoutem/ui';
import { SearchBar } from 'react-native-elements';
import SingleFriendCard from '../components/layout/SingleFriendCard';
import Api from '../components/Api';
import moment from 'moment';
import FitnessRecord from '../components/class/FitnessRecordClass.js';


GLOBAL = require('../components/CurrentUser');

export default class SocialAdd extends React.Component {
	state = {
    searchText: '',
    friendFitness: [],
    friendID: '',
    error: '',
	};


  onPressAdd = (friendID) => {
    Api.addFriend(GLOBAL.currentUser.username, friendID).then((response) => {
      console.log(response);
      
      if (typeof response === "undefined") {
        this.setState({
          friendFitness: [],
          friendID: '',
          error: "Network error.",
        });
      }
      else if(response.Error != ""){
        this.setState({
          friendFitness: [],
          friendID: '',
          error: response.Error,
        });
      }
      else{

      }
    });
  }

  onChangeSearchText = (text) => {
    if(text.length == 0)
      return;

    Api.searchFriend(text).then((response) => {  

      if (typeof response === "undefined") {
        this.setState({
          friendFitness: [],
          friendID: '',
          error: "Network error.",
        });
      }
      else if(response.Error != ""){
        this.setState({
          friendFitness: [],
          friendID: '',
          error: response.Error,
        });
      }
      else{
        this.setState({
          friendID: response.UserID,
        });

        console.log(response.Fitnesslist);

        if(response.Fitnesslist != null){
          var fitnessMap = response.Fitnesslist.map(
            function(fitness){
              var entry = fitness.split(" ");
              var calorieIn = (entry[2].length > 0) ? parseInt(entry[2]) : 0;
              var calorieOut = (entry[4].length > 0) ? parseInt(entry[2]) : 0;

              return new FitnessRecord(entry[0], calorieIn, calorieOut);
            }
          )
          this.setState({
            friendFitness: fitnessMap.map(
              function(fitness){
                var first = fitnessMap[0];

                return {
                  days: moment(fitness.date).diff(first.date, 'days'),
                  calorieIn: parseInt(fitness.calorieIn),
                  calorieOut: parseInt(fitness.calorieOut)
                }
              })
          });
        }
        else{
          this.setState({
            friendFitness: [],
          });
        }
      }
    });
  }

	render() {
		return (
		
  		<View style={styles.container}>
  		  <Image
          source={{uri: AssetUtils.toolbarimg}}
          style={{ width: 375, height: 70 }}
        >
          <NavigationBar
            styleName="clear"
            centerComponent={<Title>STRIDE</Title>}
          />
        </Image>
        <View style={styles.searchContainer}>
          <SearchBar
            noIcon
            containerStyle = {{alignItems:'center'}}
            placeholder="Type a username"
            onChangeText={(text) => this.onChangeSearchText(text)}
          />
        </View>
        <View style={styles.searchResult}>

            {
              this.renderCalorieCard(this.state.friendFitness)
            }
        </View>
  		</View>
	  );
  }

  renderCalorieCard = (records) => {
    return (
      <SingleFriendCard
        records = {records}
        addFriend = {true}
        friendID = {this.state.friendID}
        onPress={() => this.onPressAdd(this.state.friendID)}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  searchContainer: {
  },
  searchResult: {
    flex: 1,
  },
});
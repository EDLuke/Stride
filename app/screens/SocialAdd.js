import React, { Component } from 'react';
import {Font} from 'expo';
import { ScrollView, StyleSheet, View, ToolbarAndroid, TextInput  } from 'react-native';
import { Button } from 'react-native-elements';
import { Container, Content, List, Icon, Text, Toast } from 'native-base';
import { Octicons, MaterialIcons } from '@expo/vector-icons';
import { AssetUtils } from '../components/AssetUtils.js';
import { Toolbar } from 'react-native-material-ui';
import { NavigationBar, Title, Image } from '@shoutem/ui';
import { SearchBar } from 'react-native-elements';
import SingleFriendCard from '../components/layout/SingleFriendCard';
import Api from '../components/Api';
import moment from 'moment';
import FitnessRecord from '../components/class/FitnessRecordClass.js';
import { NavigationActions } from 'react-navigation';


GLOBAL = require('../components/CurrentUser');

export default class SocialAdd extends React.Component {
	state = {
    searchText: '',
    friendFitness: [],
    friendID: '',
    error: '',
    isAdding: false,
    isSearching: false,
	};


  onPressAdd = (friendID) => {
    this.setState({
      isAdding: true,
    });

    Api.addFriend(GLOBAL.currentUser.username, friendID).then((response) => {
      console.log(response);
      
      if (typeof response === "undefined") {
        this.setState({
          isAdding: false,
          friendFitness: [],
          friendID: '',
          error: "Network error.",
        });

        Toast.show({
              text: "Network error. Please try again.",
              position: 'bottom',
              buttonText: 'Okay',
        });

      }
      else if(response.Error != ""){
        this.setState({
          isAdding: false,
          friendFitness: [],
          friendID: '',
          error: response.Error,
        });

        Toast.show({
              text: response.Error,
              position: 'bottom',
              buttonText: 'Okay',
            });

      }
      else{
        /* Add friend locally first */
        GLOBAL.currentUser.friends.push(friendID);
        
        this.setState({
          isAdding: false,
        })

        Toast.show({
              text: "Friend Added Successfully.",
              position: 'bottom',
              buttonText: 'Okay',
            });
      }
    });
  }

  onChangeSearchText = (text) => {
    if(text.length == 0)
      return;

    this.setState({
      isSearching: true,
    })

    Api.searchFriend(text).then((response) => {  

      if (typeof response === "undefined") {
        this.setState({
          isSearching: false,
          friendFitness: [],
          friendID: '',
          error: "Network error.",
        });

        Toast.show({
              text: "Network error. Please try again.",
              position: 'bottom',
              buttonText: 'Okay',
            });
      }
      else if(response.Error != ""){
        this.setState({
          isSearching: false,
          friendFitness: [],
          friendID: '',
          error: response.Error,
        });

        Toast.show({
              text: response.Error,
              position: 'bottom',
              buttonText: 'Okay',
            });
      }
      else{
        this.setState({
          isSearching: false,
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
            isSearching: false,
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
            centerComponent={<Title>ADD FRIEND</Title>}
          />
        </Image>
        <View style={styles.searchContainer}>
          <SearchBar
            noIcon
            placeholder="Type a username"
            onChangeText={(text) => this.setState({searchText: text})}
            containerStyle={styles.searchBar}
          />
        </View>
        <View style={styles.searchResult}>

            {
              this.renderCalorieCard(this.state.friendFitness)
            }
        </View>
                      <Button
                        raised
                        buttonStyle={styles.buttonStyle}
                        title="Search Friend"
                        onPress={() => this.onChangeSearchText(this.state.searchText)}
                        loading={this.state.isSearching}
                        />
                      <Button
                        raised
                        buttonStyle={styles.buttonStyle}
                        title="Back"
                        onPress={() => this.props.navigation.dispatch(NavigationActions.back())}

                        />
                        <Button
                        raised
                        buttonStyle={styles.buttonStyle}
                        title="Add Friend"
                        onPress={() => this.onPressAdd(this.state.friendID)}
                        loading={this.state.isAdding}
                        />

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
    backgroundColor: '#fff'
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
  searchBar:{
    width: 375,
  },
  buttonStyle:{
    backgroundColor: '#bbb',
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
});
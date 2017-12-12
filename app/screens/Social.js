import React, { Component } from 'react';
import User from '../components/class/UserClass.js';
import { Font, AppLoading } from 'expo';
import { FlatList, ScrollView, StyleSheet, View, ToolbarAndroid, Navigator, NativeModules, StatusBar } from 'react-native';
import { Container, Content, List, Button, Icon, Text, Tab, Tabs, TabHeading, Header } from 'native-base';
import SingleFeed from '../components/layout/SingleFeed';
import { Octicons, MaterialIcons } from '@expo/vector-icons';
import { AssetUtils } from '../components/AssetUtils.js';
import { Toolbar, Dialog, DialogDefaultActions } from 'react-native-material-ui';
import { SearchBar } from 'react-native-elements';
import { NavigationBar, Title, Image } from '@shoutem/ui';
import UserCard from '../components/layout/UserCard.js';
import Api from '../components/Api';
import moment from 'moment';
import FitnessRecord from '../components/class/FitnessRecordClass.js';

GLOBAL = require('../components/CurrentUser');


function searchFriendPromise(friendID) {

  var foundFriend = new Promise((resolve, reject) => {
      console.log(GLOBAL.currentUser.friendsWithName(friendID));
      resolve(GLOBAL.currentUser.friendsWithName(friendID) == true);
    }
  );

  foundFriend.then(
      ()=>this.props.navigation.navigate('SocialDetail', {name: friendID})
    )
  .catch({
      render() {
        return(
                     <View>
                      <Dialog>
                      <Dialog.Title>
                        <Text>Friend not found</Text>
                      </Dialog.Title>
                      <Dialog.Content>
                        <Text>Try with another name!</Text>
                      </Dialog.Content>
                      <Dialog.Actions>
                        <DialogDefaultActions>
                          actions={['Dismiss']}
                          onActionPress={() => {}}
                        </DialogDefaultActions>
                      </Dialog.Actions>
                      </Dialog>
                      </View>
              );
        }
    });

};


// function cacheFonts(fonts) {
//   return fonts.map(font => Font.loadAsync(font));
// }

export default class Social extends React.Component{
	state = {
    // fontLoaded: false,
    searchID: "",
	};

  onPressAdd = () => {
    // Navigate to the ChartsAdd
    this.props.navigation.navigate('SocialAdd');
  }

  onPress(friendID){
    console.log(friendID);

    Api.searchFriend(friendID).then((response) => {  

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
          var records = fitnessMap.map(
              function(fitness){
                var first = fitnessMap[0];

                return {
                  days: moment(fitness.date).diff(first.date, 'days'),
                  calorieIn: parseInt(fitness.calorieIn),
                  calorieOut: parseInt(fitness.calorieOut)
                }
              })
       

          this.props.navigation.navigate('SocialDetail', {friendID: friendID, records: records});
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
    // if (!this.state.fontLoaded) {
    //   return (
    //     <AppLoading
    //       start={this._loadMaterialIcons}
    //       onFinish={() => this.setState({ fontLoaded: true })}
    //       onError={console.warn}
    //     />
    //   );
    // }

		return (
			<View style={styles.container}>
            <Image
              source={{ uri: AssetUtils.toolbarimg}}
              style={{ width: 375, height: 70 }}
            >
            <NavigationBar
              styleName="clear"
              centerComponent={<Title>PROFILES</Title>}
            />
            </Image>
            <Tabs initialPage={0}>
              <Tab heading={ <TabHeading><Text style={styles.tabText}>MY PROFILE</Text></TabHeading>}>
                <UserCard
                  name={GLOBAL.currentUser.username}
                  displayname = {GLOBAL.currentUser.displayName}
                  lastActiveDate={GLOBAL.currentUser.getLastActiveDate()}
                  mostOutput={GLOBAL.currentUser.getMostOutPutEntry().calorieOut}
                  mostOutputDate={GLOBAL.currentUser.getMostOutPutEntry().date}
                  age={GLOBAL.currentUser.age}
                  gender={GLOBAL.currentUser.gender}
                />
              </Tab>
              <Tab heading={ <TabHeading><Text style={styles.tabText}>FRIEND PROFILES</Text></TabHeading>}>
                <View style={styles.leaderBoardBoxContainer}>
                  <ScrollView>
                  <FlatList
                    data = {GLOBAL.currentUser.friends}
                    keyExtractor = {(item, index) => item}
                    renderItem = {({item}) => <Text style={styles.boxtext}
                                                onPress={() => this.onPress(item)}
                                              >{item}</Text>}
                  />
                  </ScrollView>
                </View>
              </Tab>
            </Tabs>
        		<Button
              rounded
              style={styles.button}
              onPress={() => this.onPressAdd()}
            >
              <Octicons
                name="plus"
                size={16}
                color="#FFF"
                style=
                {{
                  left: 2,
                  padding: 15
                }}
              />
            </Button>
			</View>
      );
	}
}

const addIcon = (<MaterialIcons name="add" size={25} color="#FFF" />);


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
  	justifyContent: 'flex-start',
    marginTop: 10,
    padding: 10
  },
  leaderBoardBoxContainer: {
    flex: 3, 
  	backgroundColor: '#fff',
  	justifyContent: 'flex-start',
    aspectRatio: 3

  },
  buttonContainer: {
    margin: 50,
  },
  tabText: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Rubik-Regular',
    overflow: 'scroll',
  },
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

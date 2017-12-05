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


  // var SearchBar = require('react-native-search-bar');

  // async _loadMaterialIcons(){

  //   const fontAssets = cacheFonts([MaterialIcons.font]);

  //   await Promise.all([fontAssets]);

  // }


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
            <Tabs initialPage={1}>
              <Tab heading={ <TabHeading><Text style={styles.tabText}>MY PROFILE</Text></TabHeading>}>
              </Tab>
              <Tab heading={ <TabHeading><Text style={styles.tabText}>FRIEND PROFILES</Text></TabHeading>}>
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
              </Tab>
            </Tabs>
        			
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
});

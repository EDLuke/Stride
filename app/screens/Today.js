import React, { Component } from 'react';
import {Font} from 'expo';
import { ScrollView, StyleSheet, View, ToolbarAndroid, Image, TextInput  } from 'react-native';
import { Container, Content, List, Button, Icon, Text } from 'native-base';
import { Octicons, MaterialIcons } from '@expo/vector-icons';
import { AssetUtils } from '../components/AssetUtils.js';
import { Toolbar } from 'react-native-material-ui';

import Api from '../components/Api';

GLOBAL = require('../components/CurrentUser');


export default class Today extends React.Component {
	state = {
    searchText: "",
	};

  onChangeSearchText = (text) => {
    console.log(text);

    Api.searchFood(GLOBAL.currentUser.username, text).then((response) => {  
      console.log(response);
    });
  }

	render() {
		return (
		
		<View style={styles.container}>
		  <Toolbar
        centerElement="Stride"
      />
      <View style={styles.searchContainer}>
        <TextInput
          style = {{alignItems:'center', color: '#FFF'}}
          underlineColorAndroid="transparent"
          placeholder="Search food or exercise"
          placeholderTextColor="#FFF"
          onChangeText={(text) => this.onChangeSearchText(text)}
        />
      </View>
		</View>
		
		);
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
});

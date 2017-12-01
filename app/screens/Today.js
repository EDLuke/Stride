import React, { Component } from 'react';
import {Font} from 'expo';
import { ScrollView, StyleSheet, View, ToolbarAndroid, Image, TextInput  } from 'react-native';
import { Container, Content, List, Button, Icon, Text } from 'native-base';
import { Octicons, MaterialIcons } from '@expo/vector-icons';
import { AssetUtils } from '../components/AssetUtils.js';
import { Toolbar } from 'react-native-material-ui';
import SingleCalorieCard from '../components/layout/SingleCalorieCard';

import Api from '../components/Api';

GLOBAL = require('../components/CurrentUser');

export default class Today extends React.Component {
	state = {
    searchText: "",
    calorieInfo: [],
	};

  onPressAdd = (calorie) => {
    console.log("Function pointer " + calorie);

    this.props.navigation.navigate('ChartsAdd', {calorie: calorie}); 
  }

  renderCalorieCard = (post, index) => {
    return (
      <SingleCalorieCard
        key={index}
        calorie={post.calorie}
        foodPicture={post.foodPicture}
        name={post.name} 
        onPress={() => this.onPressAdd(post.calorie)}
      />
    )
  }


  onChangeSearchText = (text) => {
    if(text.length == 0)
      return;

    Api.searchFood(GLOBAL.currentUser.username, text).then((response) => {  
      if(response.branded === "undefined")
        return;

      this.setState({
        calorieInfo: response.branded.map(
          function(res){
            return {
              calorie: Math.round(res.nf_calories),
              foodPicture: res.photo.thumb,
              name: res.brand_name_item_name,
            }
          }
        ),
      });
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
          style = {{alignItems:'center', color: '#000'}}
          underlineColorAndroid="transparent"
          placeholder="Search food or exercise"
          placeholderTextColor="#000"
          onChangeText={(text) => this.onChangeSearchText(text)}
        />
      </View>
      <ScrollView style={styles.searchResult}>

          {
            this.state.calorieInfo.map((record, index) => {
              return this.renderCalorieCard(record, index)
            })
          }

      </ScrollView>
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
  searchContainer: {
  },
  searchResult: {
    flex: 1,
    backgroundColor: 'black'
  }
});

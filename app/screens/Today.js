import React, { Component } from 'react';
import {Font} from 'expo';
import { ScrollView, StyleSheet, View, ToolbarAndroid, TextInput  } from 'react-native';
import { Container, Content, List, Button, Icon, Text } from 'native-base';
import { Octicons, MaterialIcons } from '@expo/vector-icons';
import { AssetUtils } from '../components/AssetUtils.js';
import { Toolbar } from 'react-native-material-ui';
import { NavigationBar, Title, Image } from '@shoutem/ui';
import SingleCalorieCard from '../components/layout/SingleCalorieCard';
import { SearchBar } from 'react-native-elements';


import Api from '../components/Api';

GLOBAL = require('../components/CurrentUser');

export default class Today extends React.Component {
	state = {
    searchText: "",
    calorieInfo: [],
	};

  onPressAdd = (calorie) => {
    this.props.navigation.navigate('ChartsAdd', {calorie: calorie, calorieType: 'food'}); 
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

      if(typeof response.branded === "undefined")
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
          placeholder="Food or Brand Name (e.g. Tropicana)"
          onChangeText={(text) => this.onChangeSearchText(text)}
          containerStyle={styles.searchBar}
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
  },
  searchBar:{
    width: 375,
  },
});

import React from 'react';
import { Card, CardItem, Text, Body, Button, Icon, Left, Right, List, ListItem } from 'native-base';
import { View, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Social from '../../screens/Social';
import User from '../class/UserClass.js';

export default (props) => (
  <View style={styles.contentContainer}>
    <Card>
      <CardItem>
        <Left>
          <Body>
            <Text style={styles.name}>PROFILE</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
      	<Text style={styles.cardText}>
      		Email Address: {props.name} {"\n"}
      		{"\n"}
      		Age: {props.age} {"\n"}
      		Gender: {props.gender} {"\n"}
      		{"\n"}
      		Last Active Date: {props.lastActiveDate} {"\n"}
      		Daily Calorie Output Record: {props.mostOutput} @ {props.mostOutputDate} {"\n"}
      	</Text>
      </CardItem>
    </Card>
  </View>
)

const styles = StyleSheet.create({
  contentContainer:{
  	flex: 1,
  	flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 7,
    marginBottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Rubik-Regular',
    overflow: 'scroll',
  },
  cardText: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Rubik-Regular',
    overflow: 'visible',
    padding: 10,
  },
  calorie: {
    fontSize: 14,
    fontFamily: 'Rubik-Regular',
  },
  foodImage: {
    height: 200,
    width: null,
    flex: 1,
  }
});
import React from 'react';
import { Card, CardItem, Text, Body, Button, Icon, Left, Right } from 'native-base';
import { View, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ChartsAdd from '../../screens/ChartsAdd';



export default (props) => (
  <View style={styles.contentContainer}>
    <Card>
      <CardItem>
        <Left>
            <Text style={styles.name}>{props.name}</Text>
            <Text note>{props.calorie}</Text>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image source={{uri :props.foodPicture}} style={styles.foodImage}/>
      </CardItem>
      <CardItem>
        <Right>
          <Button transparent onPress={props.onPress}>
            <Icon name="add" />
            <Text>Add</Text>
          </Button>
        </Right>
      </CardItem>
    </Card>
  </View>
)

const styles = StyleSheet.create({
  contentContainer:{
    flex: 1,
    flexDirection: 'row',
  },
  name: {
    fontSize: 14,
  },
  calorie: {
    fontSize: 14,
  },
  foodImage: {
    height: 200,
    width: null,
    flex: 1,
  }
});
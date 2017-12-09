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
          <Body>
            <Text style={styles.name}>{props.name}</Text>
            <Text note>{props.calorie} calories</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image source={{uri :props.foodPicture}} style={styles.foodImage}/>
      </CardItem>
      <CardItem>
        <Left>
          <Button transparent onPress={props.onPress}>
            <Icon name="add" />
            <Text style={styles.name}>Add To Records</Text>
          </Button>
        </Left>
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
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Rubik-Regular',
    overflow: 'scroll',
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
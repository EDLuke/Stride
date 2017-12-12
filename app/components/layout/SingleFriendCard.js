import React from 'react';
import { Card, CardItem, Text, Body, Button, Icon, Left, Right } from 'native-base';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ArtyCharty } from 'arty-charty';


export default (props) => {
  console.log(props);
  return (
  <View style={styles.contentContainer}>
    <Card>
      <CardItem>
          <Left>
            <Body>
              <Text style={styles.name}>{props.friendID}</Text>
            </Body>
          </Left>
      </CardItem>
      {props.records.length > 0 && 
        <CardItem cardBody>
          <ArtyCharty
          animated={true}
          yAxisLeft={{numberOfTicks: 5}}
          clickFeedback={true}
          pointsOnScreen={props.records.length}
          width={Dimensions.get('window').width - 35}
          data={[
          {
              type: 'line',
              lineColor: 'green',
              data: props.records.map((record) => {
                return {value: record.calorieIn};
              }),
              drawChart: true
          },
          {
              type: 'line',
              lineColor: 'red',
              data: props.records.map((record) => {
                return {value: record.calorieOut};
              }),
              drawChart: true
          }
            ]} 
          />
        </CardItem>
      }
      {props.addFriend && props.friendID != '' &&
        <CardItem>
          <Left>
            <Button transparent onPress={props.onPress}>
              <Icon name="add" />
              <Text style={styles.name}>Add Friend</Text>
            </Button>
          </Left>
        </CardItem>
      }
    </Card>
  </View> 
  );
}

const styles = StyleSheet.create({
  contentContainer:{
    flex: 1,
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 7,
    marginBottom: 8,
  },
  chartContainer: {
    flex: 2,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Rubik-Regular',
    overflow: 'scroll',
  },
});
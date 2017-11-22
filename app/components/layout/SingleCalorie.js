import React from 'react';
import { ListItem, Text, Body } from 'native-base';
import { View, StyleSheet } from 'react-native';

export default (props) => (
  <ListItem>
      <Body>
        <View style={styles.contentContainer}>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>{props.date}</Text>
          </View>
          <View style={styles.calorieContainer}>
            <Text style={styles.calorie}>{props.calorie}</Text>
          </View>
        </View> 
      </Body>
  </ListItem>
)

const styles = StyleSheet.create({
  contentContainer:{
    flex: 1,
    flexDirection: 'row',

  },
  dateContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calorieContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  date: {
    fontSize: 14,
  },
  calorie: {
    fontSize: 14,
  },
});
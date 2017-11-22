import React from 'react';
import { ListItem, Thumbnail, Text, Body } from 'native-base';
import { View, StyleSheet } from 'react-native';

export default (props) => (
  <ListItem>
      <Thumbnail size={60} source={{uri :props.profilePicture}} />
      <Body>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{props.name}</Text>
        </View>
        <Text style={styles.content}>{props.content}</Text>
      </Body>
  </ListItem>
)

const styles = StyleSheet.create({
  nameContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  name: {
    fontWeight: '600',
    fontSize: 14,
  },
  username: {
    fontWeight: '200',
    fontSize: 12,
  },
  content: {
    fontSize: 16,
  },
});
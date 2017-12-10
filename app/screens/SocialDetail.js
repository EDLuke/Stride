import React from 'react';
import {Font} from 'expo';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { NavigationBar, Title, Image } from '@shoutem/ui';
import SingleFriendCard from '../components/layout/SingleFriendCard';

const renderCalorieCard = (records) => (
  <SingleFriendCard
    records = {records}
    addFriend = {false}
  />
)

export default class SocialDetail extends React.Component{
	
  state = {
    friendID: this.props.navigation.state.params.friendID,
    records: this.props.navigation.state.params.records,
  }


	render() { 
		return (
		  <View style = {styles.container}>
          <Image
              source={{uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png'}}
              style={{ width: 375, height: 70 }}
            >
            <NavigationBar
              styleName="no-border"
              centerComponent={<Title>{this.state.friendID}'s PROFILE</Title>}
            />
          </Image>
          <View style = {styles.chartContainer}>
            {
              renderCalorieCard(this.state.records)
            }
          </View>
	        <View style = {styles.backContainer}>
	          <Button style={styles.backButton}
              	onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
              	title="Return"
            	/>
	        </View>
	    </View>
		);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chartContainer: {
    flex: 2,
  },
  backContainer:{
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: 15,
  },
  backButton:{
    borderRadius:0,
  },

});
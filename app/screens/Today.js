import React from 'react';
import {Font} from 'expo';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import SingleFeed from '../components/layout/SingleFeed';

const renderFeed = (post, index) => (
  <SinglePost
    key={index}
    name={post.name}
    username={post.username}
    profilePicture={post.profilePicture}
    content={post.content}
  />
)

export default class Today extends React.Component{
	state = {
	};

  componentDidMount(){
    this.props.posts = 
    [
      {
        profilePicture:'https://randomuser.me/api/portraits/thumb/men/83.jpg',
        name:'Romain',
        content:'I just hit my goal of the day!'
      },
      {
        profilePicture:'https://randomuser.me/api/portraits/thumb/women/45.jpg',
        name:'Mary',
        content:'I had cabbage, carrots and yogurt for lunch with about 1000 calorie'
      },
      {
        profilePicture:'https://randomuser.me/api/portraits/thumb/women/24.jpg',
        name:'Elizabeth',
        content:'I had steak for dinner with about 1200 calorie'
      },
      {
        profilePicture:'https://randomuser.me/api/portraits/thumb/women/39.jpg',
        name:'Shea',
        content:'I am looking for workout tips, any suggestions?'
      },
      {
        profilePicture:'https://randomuser.me/api/portraits/thumb/women/43.jpg',
        name:'Linda',
        content:'Just had a great workout burning 2000 calorie!'
      },
      {
        profilePicture:'https://randomuser.me/api/portraits/thumb/women/41.jpg',
        name:'Sindy',
        content:'Almost hit my goal today...will try harder tmr'
      },
      {
        profilePicture:'https://randomuser.me/api/portraits/thumb/men/21.jpg',
        name:'Jacob',
        content:'Finally at the top of my leaderboard!'
      }
    ]
  }

	render() {
		return (
			<Container>
       <Content>
          <List>
            {
              !!this.props.posts.length && this.props.posts.map(renderPost)
            }
          </List>
          <Text style={styles.end}>{endMsg}</Text>
        </Content>
        <Button
          rounded
          style={styles.button}
          onPress={() => Actions.newPost()}
        >
          <Icon
            name="create"
            style={{padding: 5}}
          />
        </Button>
      </Container>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    fontFamily: 'Helvetica',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#494949'
  },
  subtitle: {
    fontFamily: 'Helvetica',
    fontSize: 25,
    color: '#686868'
  },
  boxtitle: {
  	fontFamily: 'Helvetica',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#686868'
  },
  boxtext:{
  	fontFamily: 'Helvetica',
  	fontSize: 18,
  	color: '#686868'
  },
  textBoxContainer: {
  	flex: 1,
  	backgroundColor: '#fff',
  	justifyContent: 'flex-start',
    padding: 10,
  },
  chartBoxContainer: {
    flex: 5,
  	backgroundColor: '#bbb',
  	justifyContent: 'flex-start',
    aspectRatio: 3
  },
  buttonContainer: {
    margin: 50,
  }
});
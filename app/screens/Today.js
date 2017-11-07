import React from 'react';
import {Font} from 'expo';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Container, Content, List, Button, Icon, Text } from 'native-base';
import SingleFeed from '../components/layout/SingleFeed';
import { Octicons } from '@expo/vector-icons';

const renderFeed = (post, index) => (
  <SingleFeed
    key={index}
    name={post.name}
    username={post.username}
    content={post.content}
  />
)

export default class Today extends React.Component{
	state = {
    posts: [
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
	};

	render() {
		return (
			<Container>
       <Content>
          <List>
            {
              //console.log(this.state.posts)
              this.state.posts.map((feed, index) => renderFeed(feed, index))
            }
          </List>
        </Content>
        <Button
          rounded
          style={styles.button}
          onPress={() => Actions.newPost()}
        >
          <Octicons
            name="plus"
            size={16}
            color="#FFF"
            style=
            {{
            	left: 2,
            	padding: 15
            }}
          />
        </Button>
      </Container>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});
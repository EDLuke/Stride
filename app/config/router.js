import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';

import Main from '../screens/Main';
import Today from '../screens/Today';
import Charts from '../screens/Charts';
import Social from '../screens/Social';
import Setting from '../screens/Setting';
import Signup from '../screens/Signup';
import SocialDetail from '../screens/SocialDetail';

export const StackNavSocial = StackNavigator({
	Social:{
		screen: Social,
	},
	SocialDetail:{
		screen: SocialDetail,
		navigationOptions: ({navigation}) => ({
      	title: `${navigation.state.params.name}'s Profile`
    }),

	}
},
{
	// headerMode: 'none',
});

export const TabNav = TabNavigator({
	Today:{
		screen: Today,
		tabBarIcon: () => (
			<MaterialCommunityIcons name="home" size={16} color="#FFF"/>
		)
	},
	Charts:{
		screen: Charts,
	},
	Social:{
		screen: StackNavSocial,
	},
	Settings:{
		screen: Setting,
	},
},
{
	headerMode: 'float',
	tabBarPosition: 'bottom',
	tabBarOptions:{
		activeTintColor: "#FFF",
		inactiveTintColor: "#FFF",
		labelStyle: {
			margin: 0,
			fontSize: 12,
		},
		indicatorStyle: {
			backgroundColor: "#004B8D",
		},
		style:{
			height: 30,
			backgroundColor: "#578CA9",
		}
	}
});


export const StackNav = StackNavigator({
	Main:{
		screen: Main,
	},
	Signup:{
		screen: Signup,
	},
	TabNav:{
		screen: TabNav,
	},
}, 
{
	headerMode: 'none',
});

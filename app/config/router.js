import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';

import Main from '../screens/Main';
import Today from '../screens/Today';
import Charts from '../screens/Charts';
import Social from '../screens/Social';
import Setting from '../screens/Setting';
import Signup from '../screens/Signup';
import SocialDetail from '../screens/SocialDetail';
import ChartsAdd from '../screens/ChartsAdd';
import SocialAdd from '../screens/SocialAdd';

import { MaterialCommunityIcons, 
SimpleLineIcons, FontAwesome } from '@expo/vector-icons';

export const StackNavSocial = StackNavigator({
	Social:{
		screen: Social,
	},
	SocialAdd: {
		screen: SocialAdd,
	},
	SocialDetail:{
		screen: SocialDetail,
	}
},
{
	headerMode: 'none',
});

export const StackNavChart = StackNavigator({
	Charts:{
		screen: Charts,
	},
	ChartsAdd:{
		screen: ChartsAdd,
	}
},
{
	headerMode: 'none',
});


export const StackNavToday = StackNavigator({
	Today:{
		screen: Today,
	},
	ChartsAdd:{
		screen: ChartsAdd,
	}
},
{
	headerMode: 'none',
});

export const TabNav = TabNavigator({
	Today:{
		screen: StackNavToday,
		navigationOptions : ({navigation}) => ({
			tabBarIcon: ({ tintColor }) => (
				<MaterialCommunityIcons name="home" size={25} color={tintColor}/>
			),
		}),
		
	},
	Charts:{
		screen: StackNavChart,
		navigationOptions : ({navigation}) => ({
			tabBarIcon: ({ tintColor }) => (
				<SimpleLineIcons name="graph" size={25} color={tintColor}/>
			),
		}),
	},
	Social:{
		screen: StackNavSocial,
		navigationOptions : ({navigation}) => ({
			tabBarIcon: ({ tintColor }) => (
				<FontAwesome name="users" size={23} color={tintColor}/>
			),
		}),	
	},
	Settings:{
		screen: Setting,
		navigationOptions : ({navigation}) => ({
			tabBarIcon: ({ tintColor }) => (
				<MaterialCommunityIcons name="account-circle" size={25} color={tintColor}/>
			),
		}),
	},
},
{
	headerMode: 'float',
	tabBarPosition: 'bottom',
	tabBarOptions:{
		showIcon: true,
		showLabel: false,
		activeTintColor: "#FFF",
		inactiveTintColor: "#FFF",
		iconStyle:{
			margin: -12,
			height: 30,
			width: 55,
		},
		labelStyle: {
			margin: 0,
			fontSize: 12,
		},
		indicatorStyle: {
			// backgroundColor: "#004B8D",
			backgroundColor: "#000000"
		},
		style:{
			height: 30,
			// backgroundColor: "#578CA9",
			backgroundColor: "#000000"
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

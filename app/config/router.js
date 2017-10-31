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
	headerMode: 'float'
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

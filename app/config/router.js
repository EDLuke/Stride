import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';

import Main from '../screens/Main';
import Login from '../screens/Login';
import Today from '../screens/Today';
import Charts from '../screens/Charts';
import Social from '../screens/Social';
import Setting from '../screens/Setting';

export const TabNav = TabNavigator({
	Today:{
		screen: Today,
	},
	Charts:{
		screen: Charts,
	},
	Social:{
		screen: Social,
	},
	Settings:{
		screen: Setting,
	},
});


export const StackNav = StackNavigator({
	Main:{
		screen: Main,
	},
	Login:{
		screen: Login,
	},
	TabNav:{
		screen: TabNav,
	},
}, 
{
	headerMode: 'none',
});

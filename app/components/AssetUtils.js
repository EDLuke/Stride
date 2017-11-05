import {Font} from 'expo';

export const AssetUtils = {
	loadAssets: async function(){
		await Font.loadAsync({
	      'Helvetica': require('../../assets/fonts/Helvetica.ttf'),
	    });
	},
};

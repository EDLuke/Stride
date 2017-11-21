import {Font, Asset} from 'expo';

export const AssetUtils = {
	loadAssets: async function(){
		await Font.loadAsync({
	      'Helvetica': require('../../assets/fonts/Helvetica.ttf'),
	      'Fibre': require('../../assets/fonts/Fibre.otf'),
	    });

	    await Asset.loadAsync([
	    	require('../../assets/videos/background_1.mp4'),
	    ]);

	    await Asset.loadAsync([
	    	require('../../assets/images/plus.png'),
	    ]);

	    this.background_1 = Asset.fromModule(require('../../assets/videos/background_1.mp4')).uri
	},
};

import { Font, Asset} from 'expo';

export const AssetUtils = {
	loadAssets: async function(){
		await Font.loadAsync({
	      'Helvetica': require('../../assets/fonts/Helvetica.ttf'),
	      'Fibre': require('../../assets/fonts/Fibre.otf'),
	      'Roboto': require('../../assets/fonts/Roboto-Regular.ttf'),
	      'Rubik-Regular': require('../../assets/fonts/Rubik-Regular.ttf'),
	      'rubicon-icon-font': require("@shoutem/ui/fonts/rubicon-icon-font.ttf"),
		  Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
		  Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
		   
	    });

	    await Asset.loadAsync([
	    	require('../../assets/videos/background_1.mp4'),
	    ]);

	    await Asset.loadAsync([
	    	require('../../assets/images/plus.png'),
	    ]);

	    await Asset.loadAsync([
	    	require('../../assets/images/image_3.png'),
	    ]);

	    this.background_1 = Asset.fromModule(require('../../assets/videos/background_1.mp4')).uri;
	    this.toolbarimg = Asset.fromModule(require('../../assets/images/image_3.png')).uri;
	},
};

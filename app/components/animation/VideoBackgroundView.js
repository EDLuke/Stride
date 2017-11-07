import React from 'react';
import {Animated, View, Dimensions, StyleSheet} from 'react-native';
import {Video, Constants} from 'expo';

export default class VideoBackgroundView extends React.Component{

	render(){
		return (
	      <View style={styles.container}>
	        <Video
	          source={{ uri: this.props.source }}
	          rate={1.0}
	          volume={0.0}
	          muted={true}
	          resizeMode="cover"
	          shouldPlay
  			  isLooping
	          style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
	        />
	      </View>
	    );
   }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
  },
});

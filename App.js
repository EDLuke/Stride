 import React from 'react';
import { Font } from 'expo';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StackNav } from './app/config/router.js';
import { AssetUtils } from './app/components/AssetUtils.js';

export default class App extends React.Component {
  state = {
    assetLoaded: false,
  }

  async componentWillMount(){
    await AssetUtils.loadAssets();
    
    this.setState({assetLoaded: true});
  }

  render(){
    //TODO: Added Loading View, preferrably linked with AssetUtil.loadAssets
    if(!this.state.assetLoaded){
      return <Text>Loading</Text>;
    }

    return <StackNav />;
  }
  
}

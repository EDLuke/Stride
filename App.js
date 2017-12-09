import React from 'react';
import { Root } from 'native-base';
import { Font } from 'expo';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StackNav } from './app/config/router.js';
import { AssetUtils } from './app/components/AssetUtils.js';
import { ThemeProvider } from 'react-native-material-ui';



const uiTheme = {
    fontFamily: 'Rubik-Regular',
    palette: {
        primaryColor: '#578CA9',
    },
    toolbar: {
        container: {
            marginTop: 20,
            height: 50,
        },
    },
};

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
    
    return (
      <Root>
        <ThemeProvider uiTheme={uiTheme}>
          <StackNav />
        </ThemeProvider>
      </Root>
    );
  }
  
}

import React from 'react';
import { Font } from 'expo';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StackNav } from './app/config/router.js';

export default class App extends React.Component {
  render(){
    return <StackNav />;
  }
  
}
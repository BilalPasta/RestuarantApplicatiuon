
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import {Provider} from 'react-redux';
import Store from './src/Store/index';
import DrawerNav from './src/AppComponent/DrawerNavigator';

export default class App extends Component {

 
 myView= <Provider store={Store}>   

 
 <DrawerNav/>

 </Provider>;
  render() {
    return this.myView;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
}); 


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert,AsyncStorage} from 'react-native';




var flag = 20;
var muzammil = [12,23,34,12,45,56];






const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  // Read from the given Link
  // https://aboutreact.com/react-native-application-life-cycle-of/


  constructor() {
    super();

  //  Alert.alert('Check Constructor is calling');

    this.state={
        bookArray:[56,78,90,98,100],
        newVar:'0'
      }


  }


  componentWillMount() {
    // console.log('componentWillMount called.');
   // Alert.alert('Will Mount');

  }

  componentDidMount() {
    // console.log('componentDidMount called.');
    //Alert.alert('Did Mount');
    this.yasirFunction();


  }


  yasirFunction(){

    Alert.alert ('Yasir Function');

    this.newFunction();

  }

  newFunction(){

    Alert.alert('str = ' + this.state.bookArray[2]);

    this.setState({newVar:1});
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
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

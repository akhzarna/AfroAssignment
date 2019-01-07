/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert,AsyncStorage, Button,
        FlatList, TouchableOpacity

        } from 'react-native';

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

    this.state={
        bookArray:['hasnain','hasan','ABC'],
        newVar:'0'
      }
  }

  componentDidMount() {

    flag = 80;
    this.setState({newVar:20});

    // console.log('componentDidMount called.');

//  this.setState({newVar:1});

  // Alert.alert('Did Mount' + this.state.newVar);

  AsyncStorage.getItem("login").then((value) => {
  if (value == null) {
  }else{
  }
}
).done();

AsyncStorage.getItem("password").then((value) => {

if (value == null) {

}else{

}

}
).done();

    AsyncStorage.setItem('login', 'abc');
    AsyncStorage.setItem('password', '123');
    this.yasirFunction();
  }



  componentWillMount() {


    flag = 50;


    // console.log('componentWillMount called.');
    // Alert.alert('Will Mount = ');
  }


  yasirFunction(){
    // Alert.alert ('Yasir Function');
    this.newFunction();
  }

  newFunction(){
    // Alert.alert('str = ' + this.state.bookArray[2]);
    // this.setState({newVar:1});
  }

    componentWillReceiveProps(nextProp) {
      // Alert.alert('componentWillReceiveProps');
      console.log('componentWillReceiveProps called.', nextProp);
    }

    // Called 1
    shouldComponentUpdate(nextProp, nextState) {
      // Alert.alert('shouldComponentUpdate');
      console.log('shouldComponentUpdate called.');
      return true;
    }

    // Called 2
    componentWillUpdate(nextProp, nextState) {
      // Alert.alert('componentWillUpdate');
      console.log('componentWillUpdate called.');
    }

    componentDidUpdate(prevProp, prevState) {
      // Alert.alert('componentDidUpdate');
      console.log('componentDidUpdate called.');
    }

    componentWillUnmount() {
      Alert.alert('componentWillUnmount');
      console.log('componentWillUnmount called.');
    }

    componentDidCatch(error, info) {
      Alert.alert('componentDidCatch');
      console.log('componentDidCatch called.');
    }



// callSomeFunction(index){
//
//   Alert.alert('Hello '+ this.state.bookArray[index]);
//
// }


  //
  // wordSelected(index){
  //
  //   Alert.alert('Test is = '+index);
  //
  // }





  render() {
    return (

  <View style={styles.container}>

  <View style={styles.viewStyleOne}>
    <Text style={styles.textStyle}> ABC </Text>
  </View>

  <View style={styles.viewStyleTwo}>
    <Text style={styles.textStyle}> XYZ </Text>
  </View>

  </View>

    );
  }



}

const styles = StyleSheet.create({

  container:{
    backgroundColor:'#4286f4',
    flex:1,
    flexDirection:'row',
    // justifyContent: 'center',
    // alignItems:'center'

    // justifyContent: 'flex-end',
    // alignItems:'flex-start'

    },

  textStyle:{
    textAlign:'center'
  },

  viewStyleOne: {
    width:40,
    height:200,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'red',
    flex:500,
    // flexGrow: 1,
    // alignSelf: 'flex-start',
  },

  viewStyleTwo: {
    width:40,
    height:200,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#b642f4',
    flex:500,
    // flexGrow: 1,
    // alignSelf: 'flex-start',
  },
  viewStyleThree: {
    width:40,
    height:40,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'green',
    flex:1,
    // flexGrow: 1,
    // alignSelf: 'flex-start',
  },


});

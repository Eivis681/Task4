import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import ScanerPage from './pages/ScanerPage';

import * as firebase from 'firebase';
import "firebase/database";
import { firebaseConfig } from "./firebase/db";


const Stack = createStackNavigator();
//firebase.initializeApp(firebaseConfig);
export default class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={HomePage}/>
          <Stack.Screen name='Details' component={DetailsPage}/>
          <Stack.Screen name='Scan' component={ScanerPage}/>

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {updateData} from "../firebase/db";
import 'react-native-get-random-values';



export default class UpdatePage extends Component{
     
    render(){  
        return(
            
            <View style={styles.container}>
            <View style={styles.inputView} >
            <TextInput  
              style={styles.inputText}
              placeholder="Item name" 
              placeholderTextColor="#003f5c"/>
              </View>
              <TouchableOpacity 
                onPress={this.checkIfEmpty}
                style={styles.loginBtn}>
                    <Text >UPDATE</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
    },
    inputView:{
        width:"80%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },
      inputText:{
        height:50,
        color:"white"
      },
      loginBtn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
      },
});
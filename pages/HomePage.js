import React, { Component } from "react";
import { StyleSheet, View, Text , TouchableOpacity, Alert, FlatList} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import {getData} from '../firebase/db'
import * as firebase from 'firebase';
import "firebase/database";
import FadeInView from 'react-native-fade-in-view';


const renderItem = (items) => (
    <FadeInView duration={1000}>
    <TouchableOpacity style={styles.itemDisplay} 
    onPress={() => this.props.navigation.navigate('Details',{
        id: items.id,
        data: items.data
    })}>
        <Text style={styles.loginBtn}>{items.item}</Text>
    </TouchableOpacity>
    </FadeInView>
)

export default class HomePage extends Component{
    constructor(){
        super()
        this.state = {
            hasPermission: false,
            displayData: []
        }
    }

    componentDidMount(){
        var datas=[];
          firebase.database().ref('data').once('value').then(snapshot=>{
            snapshot.forEach(data=>{
                var temp ={id: data.val().id, items: data.val().item}
                datas.push(temp)
                
            })
            this.setState({
                displayData:datas
            })
            console.log(displayData)
          })
         
    }

    async scan(){
        if(this.state.hasPermission === false){
            const {status} = await BarCodeScanner.requestPermissionsAsync()
            this.setState({
                hasPermission: status === 'granted'
            })
        }
        if(this.state.hasPermission === true)
            this.props.navigation.navigate('Scan')
    }


    render(){
        return(
            <View style={styles.container}>
                 <TouchableOpacity
                    onPress={()=> this.scan()}
                     style={styles.loginBtn}>
                    <Text style={styles.loginText}>SCAN</Text>
                </TouchableOpacity>
                <FlatList
                data={this.state.displayData}
                renderItem={({item})=>renderItem(item)}
                keyExtractor={item =>item.id}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'flex-start',
        },
        checkboxContainer: {
            flexDirection: "row",
            marginVertical:10,
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
            marginTop:5,
            marginBottom:10
          },
          separator: {
            marginVertical: 8,
            borderBottomColor: '#737373',
            borderBottomWidth: StyleSheet.hairlineWidth,
          },
    });

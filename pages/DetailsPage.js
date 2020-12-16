import React, { Component } from "react";
import { View, Text , TouchableOpacity, Alert, StyleSheet} from "react-native";
import {deleteData} from '../firebase/db'

export default class DetailsPage extends Component{

    render(){
        const id = this.props.route.params.id;
        const data = this.props.route.params.data;
        return(
            <View style={styles.container}>
                <Text style={styles.titleRe}>Data:</Text>
                <Text >{data}</Text>

                <View style={styles.buttonConaiter}>
              <TouchableOpacity
                    onPress={()=> //this.props.removeAdd(id)
                        Alert.alert(
                            'Delete',
                            'Are you sure you want to delete this data',
                            [
                                {
                                    text: 'Yes',
                                    onPress: () =>{
                                        this.props.navigation.goBack(),
                                        deleteData(id)
                                    },
                                },
                                {
                                    text:'No',
                                },
                            ]
                        )
                }
                     style={styles.loginBtn}>
                    <Text style={styles.loginText}>DELETE</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> this.props.navigation.navigate('Update advertisements')}
                     style={styles.loginBtn}>
                    <Text style={styles.loginText}>UPDATE</Text>
                </TouchableOpacity>
                </View> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        justifyContent: 'flex-start',
        },
        buttonConaiter:{
            flexDirection: "row",
            marginVertical:10,
            justifyContent:'flex-end',
        },
        textContainer:{
            flexDirection:'row',
        },
          loginBtn:{
            width:"47%",
            backgroundColor:"#fb5b5a",
            borderRadius:25,
            height:50,
            alignItems:"center",
            justifyContent:"center",
            marginTop:5,
            marginBottom:10,
            marginHorizontal:5
          },
          titleRe:{
            fontWeight:'bold',
            textTransform:'uppercase',
            color:'#fff',
            fontSize:25,
            textAlign:'center',
            marginBottom:10,
        },
        toDo:{
            fontWeight:'bold',
            textTransform:'uppercase',
            color:'#fff',
            fontSize:20,
        },
        wordsText:{
            fontSize:15,
            color:'#fff',
            marginBottom:10,
            margin:5,
        },
    });

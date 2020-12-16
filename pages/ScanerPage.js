import { BarCodeScanner } from "expo-barcode-scanner";
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {saveData} from "../firebase/db";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';


export default class ScanerPage extends Component{
    
    constructor({props}){
        super(props)
        this.state = {
            scanned: false
        }
    }
    
    _onBarcodeScanned(result){
        if(this.state.scanned)
            return

        this.setState({
            scanned: true
        })
        if (result!=null)
        {
        saveData(result.data, uuidv4())
        this.props.navigation.navigate('Home')
        }
    }

     
    render(){  
        return(
            
            <View style={styles.container}>
                <BarCodeScanner 
                onBarCodeScanned={(barcode) => this._onBarcodeScanned(barcode)}
                style={StyleSheet.absoluteFillObject}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
import React, { Component } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import {WebView} from 'react-native-webview'

export default class StarMapScreen extends Component {
    constructor(){
        super()
        this.state = {
            longitude: '',
            latitude: ''
        }
    }
    render() {
        const {longitude, latitude} = this.state
        const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false`
        return (
           <View style={{flex: 1, backgroundColor: "#1a0023"}}>
            <SafeAreaView style={styles.droidSafeArea} />
            <View>
                <Text  style={styles.titleText}>Mapa Estelar</Text>
            </View>
            <TextInput 
                style={styles.inputStyle}
                placeholder="Digite sua latitude"
                placeholderTextColor="white"
                onChangeText={(text)=>{
                    this.setState({
                        latitude: text
                    })
                }}
            />
            <TextInput 
                style={styles.inputStyle}
                placeholder="Digite sua longitude"
                placeholderTextColor="white"
                onChangeText={(text)=>{
                    this.setState({
                        longitude: text
                    })
                }}
            />
            <WebView 
                scalesPageToFit={true}
                source={{uri:path}}
                style={{marginTop: 20, marginBottom:20}}
            />
           </View>
        )
    }
}
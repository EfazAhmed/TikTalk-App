import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native'
import Header from '../../components/Header'




export default class SoundScreen extends Component{

  render() {
    return (
      <View style={styles.container}>
        <Header title='TikTalk'/>
        <Text style={styles.text}>Coming Soon!</Text>
    </View>
    )
  }
  
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 60,
      backgroundColor: '#FE2C55',
    },
    text: {
        textAlign: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center', 
        paddingTop: Dimensions.get('window').height/3,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30
    }
  })

  
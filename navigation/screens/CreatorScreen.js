import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Header from '../../components/Header'


export default class CreatorScreen extends Component{

  render() {
    return (
      <View style={styles.container}>
      <Header title='TikTalk'/>
    </View>
    )
  }
  
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 60,
      backgroundColor: '#FE2C55'
    },
    item: {
      marginTop: 10,
      height: 50,
      fontSize: 24,
      marginLeft: 10,
      marginRight: 10
    },
    item_image: {
      width: 50,
      height: 50
    },
    title_text: {
      fontSize: 18,
      fontWeight: 'bold'
    },
    artist_text: {
      fontSize: 14,
      fontWeight: 'bold'
    },
    views_text: {
      fontSize: 12
    }
  })


    
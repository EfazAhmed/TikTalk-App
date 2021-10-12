import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Header from '../../components/Header'
import { ListItem, Avatar } from 'react-native-elements';
import Parse from 'parse/react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'


// Initialize the SDK for Parse
Parse.setAsyncStorage(AsyncStorage)
const app_id = '0kEMdS16SXoAhP2Sp2bl5DBQ7jpfIEhsM2qNFtKR'
const js_key = 'vA7F7nuFObXfc13sRscjKiw5041BPkNTZm4uW50h'
Parse.initialize(app_id, js_key)
Parse.serverURL = 'https://parseapi.back4app.com';

// Sorts the ParseObject Data in ascending order based on rank
function sortData(queryResult) {
  for (let i = 0; i < queryResult.length; i++) {
    for (let j = i+1; j < queryResult.length; j++) {
      if(parseInt(queryResult[i].get('rank')) > parseInt(queryResult[j].get('rank'))) {
        temp = queryResult[i]
        queryResult[i] = queryResult[j]
        queryResult[j] = temp
      }
    }
  }
  return queryResult
}

export default class SoundScreen extends Component{

  state = {
    data: []
  }

  renderItem = ({item}) => (
    <ListItem bottomDivider>
      <Text style={rankingStyle(parseInt(item.get('rank')))}>{item.get('rank')}</Text>
      <Avatar style={styles.item_image} source={{uri: item.get('image_url')}} />
      <ListItem.Content style={styles.item}>
        <ListItem.Title style={styles.title_text} ellipsize='tail' numberOfLines={1}>{item.get('user')}</ListItem.Title>
        <ListItem.Subtitle style={styles.artist_text}>{item.get('nickname')}</ListItem.Subtitle>
        <ListItem.Subtitle style={styles.views_text}>{item.get('followers')}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  )

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
      const query = new Parse.Query('Creators');
      await query.findAll()
      .then(response => sortData(response))
      .then((response) => {
        this.setState({data: response})
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
      console.log(this.state.data)
    return (
      <View style={styles.container}>
      <Header title='TikTalk'/>
      <FlatList 
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={(x,i) => i.toString()}
      />
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

  // Custom sizing for the rank text
  function rankingStyle(rank_number){
    if (rank_number >= 1 && rank_number < 10){
      return {
        color: '#FE2C55',
        fontWeight: 'bold',
        fontSize: 19,
        textAlign: "center",
        width: 28
      }
    }
    else if (rank_number < 100){
      return {
        color: '#FE2C55',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: "center",
        width: 28
      }
    }
    else if (rank_number >= 100){
      return {
        color: '#FE2C55',
        fontWeight: 'bold',
        fontSize: 13,
        textAlign: "center",
        width: 28
      }
    }
    else {
      return {
        color: '#FE2C55',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: "center",
        width: 28
      }
    }
  }
    
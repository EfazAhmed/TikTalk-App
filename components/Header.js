import React from "react"
import { View, Text, StyleSheet } from "react-native"

 export default Header = props => {
    return(
      <View style={styles.header}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    )
 }

 const styles = StyleSheet.create({
     header: {
         height: 60,
         padding: 15,
         backgroundColor: '#FE2C55'
     },
     text: {
         color: 'white',
         fontSize: 23,
         textAlign: 'center',
         fontWeight: 'bold'
     }
 })
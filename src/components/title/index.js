import React from "react";
import { StyleSheet, View, Text } from "react-native";


export default function Title(){
    return(
        <View style={styles.container}>
            <Text style={styles.text} >Calculadora IMC</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
    textAlign: "center",
      color:'white',  
      backgroundColor: 'black',
      fontSize: 40,
      padding: 10,
      marginBottom: 20,
      borderRadius: 10
    },
    
  });
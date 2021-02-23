import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function CharacterCard(props) {
  return (
    <View style={styles.container}>
        <Text style ={{color : "white"}}>ID : {props.id}</Text>
        <Text style ={{color : "white"}}>NAME : {props.name}</Text>
        <Text style ={{color : "white"}}>AGE :{props.age}</Text>
        <Text style ={{color : "white"}}>GENDER : {props.gen}</Text>
        <Text style ={{color : "white"}}>EMAIL : {props.email}</Text>
     </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    borderRadius: 10,
    height: 150,
    marginBottom: 10,
    backgroundColor: "rgb(32, 35, 41)",
    alignItems:'center',
    justifyContent:'center'
    
  },
});

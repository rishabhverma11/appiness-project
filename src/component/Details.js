import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { useState } from "react";
import { useEffect } from "react";
import CharacterCard from './CharacterCard'



export default function Details(props) {
  const [list, setList] = useState([]);
  console.log("props", props.navigation.state.params.userData.users.user)
  useEffect(() => {
    setList(props.navigation.state.params.userData.users.user)
  }, [])
  console.log("list", list)


  const renderRow = ({ item }) => {
    console.log("item", item);
    return (
      <CharacterCard id={item.id} name={item.name} age={item.age} gen={item.gender} email={item.email} />
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'black', }}>
      <View style={{ alignItems: 'center', paddingBottom: 10 }}>
        <Text style={{ color: "white", fontSize: 25, }}>Employee List</Text>
      </View>
      <FlatList
        keyExtractor={(item, index) => index}
        data={list}
        renderItem={renderRow}
      />

    </View>

  );
}


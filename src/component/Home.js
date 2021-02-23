import * as React from "react";
import { useState } from "react";
import { fetchUsers } from '../actions/action'
import { View, Text, StyleSheet, FlatList, Image, TextInput, TouchableOpacity } from "react-native";
import { connect } from 'react-redux'

function Home({ userData, fetchUsers, navigation }) {
    console.log("userData--->", userData)
    const [name, setUsername] = useState("");
    const [pass, setPassword] = useState("");
    setDetails = (val, type) => {
        if (type == "username") {
            setUsername(val)
        }
        if (type == "password") {
            setPassword(val)
        }
    }
    function getdetails(name, pass) {
        console.log('username', name)
        console.log("password", pass)
        var ar = { name, pass }
        fetchUsers(ar)
    }

    return (
        <View style ={{flex : 1 }}>
            {userData.users.user ? navigation.replace("Details" , {userData}) :
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 30, paddingBottom: 40 }}>Appiness Employee</Text>
                    <TextInput placeholder="Username" placeholderTextColor="#40707070" onChangeText={(value) => setDetails(value, "username")} style={{ fontSize: 15, color: 'black', borderWidth: 1, borderRadius: 6, width: '80%' }}></TextInput>
                    <TextInput secureTextEntry={true} placeholder="Password" onChangeText={(value) => setDetails(value, "password")} placeholderTextColor="#40707070" style={{ fontSize: 15, color: 'black', borderWidth: 1, borderRadius: 6, width: '80%', marginTop: 15 }} ></TextInput>
                    <TouchableOpacity onPress={() => getdetails(name, pass)} style={{ width: '50%', height: 50, backgroundColor: '#ADD8E6', alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginTop: 20 }} >
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>

            }
        </View>

    )

}



const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: (ar) => {
            dispatch(fetchUsers((ar))
            )
        }
    }
}
const mapStateToProps = state => {
    return {
        userData: state.user
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)



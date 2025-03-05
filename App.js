import React from 'react'
import { Provider } from 'react-redux' // redux -part

import store from './src/store/index'
import Home from './src/component/Home'
import Details from './src/component/Details'
import { StackNavigator, createStackNavigator } from 'react-navigation';
import { Header } from 'react-native/Libraries/NewAppScreen'

const MyStack = () => {
  return createStackNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
          // gesturesEnabled: false,
          header: null
        })
      },
      Details: {
        screen: Details,
        navigationOptions: ({ navigation }) => ({
          // gesturesEnabled: false,
          header: null
        })
      },

    },
    {
      initialRouteName: 'Home',
    }
  )
};
const Layout = MyStack();

const add = () =>{
    "asdasdsada"
}

function App() {
  return (

    <Provider store={store}>
      <Layout />
    </Provider>
  )
}

export default App

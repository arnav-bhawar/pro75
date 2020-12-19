import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import{createAppContainer} from 'react-navigation';
import{createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen'
import ReadStoryScreen from './screens/ReadStoryScreen'
import db from '../config'
import firebase from 'firebase'


export default class App extends React.Component() {
  render(){ 
    return <AppContainer />;
     
    }
  }    
    <View style={styles.container}>
     // <Text>Open up App.js to start working on your app!</Text>
      //<StatusBar style="auto" />
    </View>
  

  const TabNavigator = createBottomTabNavigator({
    Transaction: {screen: ReadStoryScreen},
    Search: {screen: WriteStoryScreen}
  },
  
  { 


defaultNavigationOptions: ({navigation}) => ({
  tabBarIcon : ({}) => {
     const routeName = navigation.state.routeName 
     if (routeName === 'readbook' ){
    return(
      <Image 
      source = {require('./assets/read.png')}
      style = {{width: 40 , height: 40 }}
      />

)
     }
     else if(routeName === 'Search'){
       return (
         <Image
         source = {require('./assets/write.png')}
         style = {{width: 40, height:40}}
         />
       )
     }
  }
})

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
});


/*
  const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
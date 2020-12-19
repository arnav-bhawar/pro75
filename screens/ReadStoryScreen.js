import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,KeyboardAvoidingView,FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import db from '../config'
import firebase from 'firebase' 

export default class App extends React.Component() {
    retriveStories= async ()=>{

    }
    render(){
        return(

      

            

            <View style = {styles.container}>
                 <View style = {styles.searchBar}>
                <Text>Read Story</Text>

                <TouchableOpacity 
                style = {styles.submitButton}
                onPress = {this.submitStory}
                >

                     <Text style = {styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                <KeyboardAvoidingView style = {styles.container} behavior = "padding"enabled>
                 </KeyboardAvoidingView>
                                  
            </View>
          
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    searchBar:{
        flexDirection:'row',
        height:40,
        width:'auto',
        borderWidth:0.5,
        alignItems:'center',
        backgroundColor: 'gray',
    },
  });
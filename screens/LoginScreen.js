import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,KeyboardAvoidingView,FlatList, Alert, TextInput } from 'react-native';
import * as firebase from 'firebase' 

export default class LoginScreen extends React.component{
    constructor(){
        super();
        this.state = {
            emailId: '',
            password:''
        }
    }

    login = async(email,password)=>{
        if(email && password){
            try{
                const repsonse = await firebase.auth().signInWithEmailAndPassword(email,password)
                if(response){
                    this.props.navigation.navigate('Transaction')
                }
            }
            catch(error){
                switch(error.code){
                    case 'auth/user-noy-found';
                    Alert.alert("user dosen't exist")
                    console.log("dosen't exist")
                    break
                }
            }
   
        }
        else{
            Alert/alert('enter email and password');
        }
    }

    render(){
        return(
            <KeyboardAvoidingView style = {{alignItems: 'center', marginTop:20}}>
            <View>
            <Image
            source ={require("../assets/read.png")}
            style={{width:200, height:200}}/>
            <Text style = {{textAlign : 'center', fontSize:30}}>Pro75</Text>
            </View>
            <View>
            <TextInput
            style = {styles.loginBox}
            placeholder = "abc@example.com"
            keyboardType = 'email-address'
            onChangeText = {(text)=>{
                this.setState({
                    emailId: text
                })
            }}
            />

            <TextInput
            style = {styles.loginBox}
            secureTextEntry = {true}
            placeholder = "enter Password"
            onChangeText = {(text)=>{
                this.ssetState({
                    password:text
                })
            }}
            />
            </View>
            <View>
                <TouchableOpacity style = {{height:30,width:90,borderWidth:1,marginTop:20,paddingTop:5,borderRadius:7}}
                onPress = {()=>{this.login(this.state.emailId, this.state.passwrd)}}>
                    <Text style = {{textAlign:'center'}}>Login</Text>
                </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
        )
    }
}

const style = styleSheet.create({
    loginBox:
    {
        width:300,
        height:40,
        borderWidth: 1.5,
        fontSize:20,
        margin:10,
        paddingLeft: 10
    }
})
import React, { Component } from "react";
import {View, StyleSheet, Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from './CustomButton';
import CustomInput from './CustomInput';
import CustomButton from "./CustomButton";

export default class SettingsScreen extends Component{
    constructor(){
        super();
        this.state = {
            email: firebase.auth().currentUser.email,
            firstName: '',
            lastName: '',
            address: '',
            contact: '',
            docId:''
        }
    }
    getUserDetails = ()=>{
        var {email} = this.state;
        db.collection('users')
        .where('email_id', '==', email)
        .get()
        .then(snapshot=>{
            snapshot.forEach(dox=>{
                var data = dox.data();
                this.setState({
                    email: data.email_id,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    address: data.address,
                    contact: data.contact,
                    docId: doc.id
                })
            })
        })
    }
    componentDidMount(){
        this.getUserDetails()
    }
    updateUserDetails = ()=>{
        var {docId} = this.state;
        if(docId){
            db.collection('users')
            .doc(docId)
            .update({
                first_name: this.state.firstName,
                last_name: this.state.lastName,
                address: this.state.address,
                contact: this.state.contact
            })
            .then(()=>{
                Alert.alert("Profile updated successfully")
            })
        }
        else{
            Alert.alert("Document Id is empty")
        }
    }
    render(){
        var {firstName, lastName, contact, address} = this.state;
        return(
            <View style = {StyleSheet.container}>
                <MyHeader title = 'Settings' navigation = {this.props.navigation}> </MyHeader>
                <View style = {styles.upperContainer}>
                    <CustomInput
                    style = {styles.input}
                    placeholder = {"First Name"}
                    maxLength = {8}
                    onChangeText = {text=>{
                        this.setState({
                            firstName: text
                        })
                    }}
                    value = {firstName}
                    >

                    </CustomInput>
                    <CustomInput
                    style = {styles.input}
                    placeholder = {"Last Name"}
                    maxLength = {8}
                    onChangeText = {text=>{
                        this.setState({
                            lastName: text
                        })
                    }}
                    value = {lastName}
                    >

                    </CustomInput>
                    <CustomInput
                    style = {styles.input}
                    placeholder = {"Contact"}
                    maxLength = {10}
                    keyboardType = {'numeric'}
                    onChangeText = {text=>{
                        this.setState({
                            contact: text
                        })
                    }}
                    value = {contact}
                    >

                    </CustomInput>
                    <CustomInput
                    style = {styles.input}
                    placeholder = {"Address"}
                    multiline = {true}
                    onChangeText = {text=>{
                        this.setState({
                            address: text
                        })
                    }}
                    value = {address}
                    >

                    </CustomInput>
                    <CustomButton
                    title = {'Save'}
                    style = {styles.button}
                    titleStyle = {styles.buttonTitle}
                    onPress = {()=>{this.updateUserDetails}}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upperContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center'
    },
    input: {
        width: '75%',
        height: 55,
        borderColor: '#6fc0b8',
        marginTop: 20
    },
    button: {
        marginTop:20,
        backgroundColor: '#6fc0ba'
    },
    buttonTitle: {
        color: '#fff'
    }
})
import React, {Component} from 'react';
import {View, Text, SafeAreaView, Alert, StyleSheet} from 'react-native';

const  MyHeader = props=>{
    return(
        <Header
        centerComponent = {{
            text: props.title,
            style: styles.title 
        }}
        />
    )
}
export default MyHeader;

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold'
    }
})
import React, {Component} from 'react';
import {View, Text, SafeAreaView, Alert, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from 'react-navigations-tabs';
import BookRequestScreen from '../screens/BookRequest';
import BookDonateScreen from '../screens/BookDonate';

export const AppTabNavigator = createBottomTabNavigator({
    BookDonate: {
        screen: BookDonateScreen,
        navigationOptions: {
            tabBarIcon: (
                <Image source = {require('../assets/request-list.png')}
                style = {{
                    width: 20,
                    height: 20
                }}
                ></Image>
            ),
            tabBarLabel: 'Donate Books'
        }
    },
    BookRequest: {
        screen: BookRequestScreen,
        navigationOptions: {
            tabBarIcon: (
                <Image source = {require('../assets/request-book.png')}
                style = {{
                    width: 20,
                    height: 20
                }}
                ></Image>
            ),
            tabBarLabel: 'Book Request'
        }
    }
})
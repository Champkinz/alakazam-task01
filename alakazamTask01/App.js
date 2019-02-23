import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Dashboard from './src/Dashboard/_components/DashboardLanding'
import {Font} from "expo";
import PropTypes from 'prop-types';

export default class App extends React.Component {

    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        console.log('App.js loaded');
        await Font.loadAsync({
            'SignikaBold': require('./assets/fonts/Signika-Bold.ttf'),
            'SignikaLight': require('./assets/fonts/Signika-Light.ttf'),
            'SignikaRegular': require('./assets/fonts/Signika-Regular.ttf'),
            'SignikaSemiBold': require('./assets/fonts/Signika-SemiBold.ttf')

        });

        this.setState({fontLoaded: true});
    }

    render() {
        return (

            this.state.fontLoaded ? (<Dashboard/>) : null
        );
    }
}
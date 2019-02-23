import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    LayoutAnimation,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Text
} from 'react-native';
import {Col, Row, Grid} from "react-native-easy-grid";
import Header from './Header/header'
const styles = StyleSheet.create({

    colorTester:{
        backgroundColor:'red'
    },
    colorTester2:{
        backgroundColor:'blue'
    },

});

class DashboardLanding extends Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        console.log('Dashboard Landing Component Mounted');
    }

    render() {
        return (
            <Header/>
        )
    }
}

export default DashboardLanding;
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
import SingleCard from './Features/SingleCard'
import Tools from './Tools/Tools'
import Organize from './Organize/Organize'
import SingleCardLanding from './Features/SingleCardLanding'


const styles = StyleSheet.create({

    colorTester: {
        backgroundColor: 'red'
    },
    colorTester2: {
        backgroundColor: 'blue'
    },
    mainContainer: {
        flex:1,
    },

});

class DashboardLanding extends Component {
    constructor() {
        super();

    }

    componentDidMount() {
        console.log('Dashboard Landing Component Mounted');
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={false}>
                    <Header/>
                    <SingleCardLanding/>
                    <Tools/>
                    <Organize/>
                </ScrollView>
            </View>
        )
    }
}

export default DashboardLanding;
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    LayoutAnimation,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Text, TextInput

} from 'react-native';
import PropTypes from 'prop-types';
import {Col, Row, Grid} from "react-native-easy-grid";
import Emoji from 'react-native-emoji';
import {LinearGradient} from 'expo';

const styles = StyleSheet.create({
    borderRadiusSet: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    colorTester2: {
        backgroundColor: '#FFFFFF',
        paddingTop: '10%',
        paddingLeft: '3%',
        paddingRight: '3%',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: "#989898",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.1,
        shadowRadius:10,
        elevation: 25,
    }

});

class header extends Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        console.log('header Component Mounted');

    }

    render() {
        return (
            <View style={styles.borderRadiusSet}>
                <View style={styles.colorTester2}>
                    <View>
                        <Text style={{fontFamily: 'SignikaRegular', fontSize: 35}}>Hey <Emoji name="wave"
                                                                                              style={{fontSize: 30}}/></Text>
                        <Text style={{fontFamily: 'SignikaLight', fontSize: 16}}>How can I help you?</Text>
                    </View>
                    <View>
                        <Image
                            style={{width: 79, height: 119}}
                            source={require('../../../../assets/img/logo-mascot.png')}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

export default header;
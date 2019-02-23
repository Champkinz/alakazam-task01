import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    LayoutAnimation,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Text, TextInput

} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import header from "../Header/header";
import {LinearGradient} from 'expo';

const styles = StyleSheet.create({
    toolsContainer: {
        marginTop: 20,
        marginLeft:40,
        marginBottom:20,
        justifyContent: 'center',alignItems: 'center'
    },
    cardBox: {
        width: 120,
        height: 120,
        borderRadius: 20,
        justifyContent: 'center',alignItems: 'center'
    },
    toolCardFont:{
        marginTop:10,
        fontFamily: 'SignikaLight',
        fontSize: 16,
    }
});

class ToolCard extends Component {

    constructor() {
        super();
        this.state = {}

    }

    componentDidMount() {
    }

    render() {

        return (
            <View style={styles.toolsContainer}>
                <LinearGradient
                    colors={[this.props.color1, this.props.color2]}
                    style={styles.cardBox}
                    start={[0.1,1]}
                    end={[1,0.1]}
                >
                    <View >
                        <Ionicons name={this.props.icon} size={55} color="white" />
                    </View>
                </LinearGradient>

                <Text style={styles.toolCardFont}>{this.props.title}</Text>
            </View>
        )
    }
}

export default ToolCard;
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
import PropTypes from 'prop-types';
import header from "../Header/header";

const styles = StyleSheet.create({
    SingleCardContainer: {
        justifyContent: 'center',
    }
});

class SingleCard extends Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        console.log('SingleCard Component Mounted');
    }

    render() {

        const {title,imageUrl} = this.props;
        console.log(this.props.imageUrl);
        var t = this.props.imageUrl;
        var sm = '../../../../assets/img/repost-now.png';
        var a  = sm;
        var tt = 'source={require("'+t+'")}';
        console.log(tt);
        return (
            <View style={{
                marginLeft:40,
                paddingTop: 30,
                paddingBottom: 30

            }}>
                <ImageBackground
                    style={{
                        width: 200, height: 200, backgroundColor: '#FFFFFF',
                        borderRadius: 20,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 0,
                        },
                        shadowOpacity: 0.1,
                        shadowRadius:10,
                        elevation: 6
                    }}
                    resizeMode={'center'}
                    source={this.props.imageUrl}


                >
                    <Text style={{
                        fontFamily: 'SignikaRegular',
                        fontSize: 24,
                        top: '78%',
                        textAlign: 'center',
                    }}>{title}</Text>
                </ImageBackground>
            </View>
        )
    }
}

export default SingleCard;



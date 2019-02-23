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
    Text, TextInput, Button

} from 'react-native';
import PropTypes from 'prop-types';
import Emoji from 'react-native-emoji';

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    organizeContainer: {
        marginTop:20,
        paddingLeft: '10%'
    },
    contentBox: {
        borderRadius: 20,
        width: deviceWidth-80,
        height: 1.0881355932203389830508474576271 * (deviceWidth-120),
        paddingRight:10,
        paddingLeft:10,
        paddingTop:8,
    }
});

class Organize extends Component {

    constructor() {
        super();
        this.state = {}
    }


    componentDidMount() {
        console.log('Organize Component Mounted');

    }

    render() {

        return (
            <View style={{marginTop: 20}}>
                <Text style={{fontFamily: 'SignikaRegular', fontSize: 35, marginLeft: '3%'}}>Organize <Emoji
                    name={"rocket"} style={{fontSize: 30}}/></Text>
                <View style={styles.organizeContainer}>
                    <ScrollView  horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                            <View style={styles.contentBox}>
                                <Text style={{
                                    fontFamily: 'SignikaRegular',
                                    fontSize: 22,
                                    textAlign: 'left',
                                    color: '#000000',
                                }}>Content Calendar</Text>
                                <View style={{justifyContent: 'center',
                                    alignItems: 'center',}}>
                                    <ImageBackground
                                        style={{
                                            width: deviceWidth-160,
                                            height: 1.0881355932203389830508474576271 * (deviceWidth-160),
                                        }}
                                        resizeMode={'center'}
                                        source={require('../../../../assets/img/schedule.png')}
                                    >
                                    </ImageBackground>
                                    <View style={{position:'absolute',backgroundColor: '#FF4F86',bottom:0,right:0,borderRadius:30,paddingTop:5,paddingBottom: 5,paddingLeft: 20,paddingRight:20}}>
                                        <Text style={{fontFamily: 'SignikaLight',
                                            fontSize: 18,color:'white'}}>Start Scheduling</Text>
                                    </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

export default Organize;
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
import ToolCard from "./ToolCard"
const styles = StyleSheet.create({

});

class Tools extends Component{

    constructor(){
        super();
        this.state ={
            Tools: [
                {
                    key: 1,
                    title: 'Content Library',
                    color1:'#00e7fc',
                    color2: '#018FFF',
                    icon:'md-images'
                }, {
                    key: 2,
                    title: 'Analytics',
                    color1:'#0AAF94',
                    color2: '#8FC73F',
                    icon:'md-stats'
                }, {
                    key: 3,
                    title: 'Grid Slicer',
                    color1:'#F56E9B',
                    color2: '#FC8D82',
                    icon:'md-grid'
                }
            ]
        }
    }

    componentDidMount(){
        console.log('Component Did Mount');
    }

    render(){
        return(
            <View style={{marginTop: 5}}>
                <View>
                    <Text style={{fontFamily:'SignikaRegular',fontSize:35,marginLeft:'3%'}}>Tools</Text>
                </View>
                <View>
                    <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>

                        {this.state.Tools && this.state.Tools.map((result)=>{


                            return(
                                <ToolCard
                                    key={result.key}
                                    title={result.title}
                                    color1={result.color1}
                                    color2={result.color2}
                                    icon={result.icon}
                                />
                            )
                        })}

                    </ScrollView>
                </View>
            </View>

        )
    }
}

export default Tools;
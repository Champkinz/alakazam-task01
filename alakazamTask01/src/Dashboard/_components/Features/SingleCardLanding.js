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
import SingleCard from "./SingleCard";

let deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({

});

class SingleCardLanding extends Component{
    constructor(){
        super();
        this.state = {
            features: [
                {
                    key: 1,
                    title: 'Create Post',
                    imageUrl: require('../../../../assets/img/post-now.png')
                }, {
                    key: 2,
                    title: 'Repost',
                    imageUrl: require('../../../../assets/img/repost-now.png')
                }
            ]


        };
    }

    render(){
        return(
            <View>
                <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                    {this.state.features && this.state.features.map((result) => {
                        console.log(result.key);
                        return (
                            <SingleCard
                                key={result.key}
                                title={result.title}
                                imageUrl={result.imageUrl}
                            />
                        )
                    })}
                </ScrollView>
            </View>

        )
    }
}

export default SingleCardLanding;
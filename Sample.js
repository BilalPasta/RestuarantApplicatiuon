import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Sample extends Component {
    state = {};

    render() {
        return (
            <View style={{}}>
                <Text>{this.props.children}</Text>
            </View>
        );
    }
}
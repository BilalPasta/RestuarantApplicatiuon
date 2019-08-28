import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Container, Content, Icon, Button } from 'native-base'
import CustomHeader from './CustomHeader'
import {DrawerActions} from 'react-navigation'
import Slider from './src/AppComponent/Slide';

class SettingsScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Settings",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer)} />,
        // drawerIcon:
            // <Image
            //     source={require('./assets/DrawerIcons/settings.png')}
            //     style={[styles.icon]}
            // />

    })

    render() {
        return (

            <Container>

                <CustomHeader
                    title="Settings"
                    drawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
                />
                <Content contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                <Slider/>
                    <Button
                        full
                        onPress={() => this.props.navigation.navigate('Home',{kjkjkj:'',fadfd:'',adfadfadf:'',dfdsafdsaf:'',fdsffdafad:''})}>
                        <Text style={{ color: 'white' }}>Go to Home screen</Text>
                    </Button>
                </Content>
            </Container>
        )
    }

}

export default SettingsScreen

const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24
    }
})
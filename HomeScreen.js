import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";
import {DrawerActions} from 'react-navigation';
import Slider from './src/AppComponent/Slide';
//library imports
import { Icon, Button, Container, Header, Content, Left } from 'native-base'
import {connect} from 'react-redux';
import {Getdata} from './src/Store/Action/index';
//custom components imports 
import CustomHeader from './CustomHeader';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate.openDrawer()} />,
    drawerLabel: 'Notification',
    // drawerIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('./assets/DrawerIcons/home.png')}
    //     style={styles.icon}
    //   />
    // ),
  })

//   componentWillMount(){
//     this.props.Getdata();
// }

  render() {
    return (

      <Container>

        <CustomHeader title="Home" drawerOpen={() => this.props.navigation.dispatch(DrawerActions.openDrawer())} />

        <Content
          contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
          <Slider/>
          <Button
            onPress={() => this.props.navigation.navigate('Settings')} full>
            <Text style={{ color: 'white' }}>Go To Settings Screen</Text>
          </Button>
        </Content>

      </Container>

    )
  }

}




const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});


function mapstate(state){
  return{

  }
}
function mapdispatch(dispatch){
  return{
    Getdata:()=>{
      dispatch(Getdata())
    }
  }
}
export default connect(mapstate,mapdispatch)(HomeScreen) ;
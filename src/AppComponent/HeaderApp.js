


import React, { Component } from "react";
import {
    View
} from "react-native";

import { Header, Body, Left,Container } from 'native-base';
import { CachedImage} from 'react-native-cached-image';

class HeaderApp extends Component {
    render() {

        return (
           
            <Container>
              
                   <View style={{flex:1}}>
     
                   <View>
            <Header style={{backgroundColor:'#db0000'}}>
                <Left>
                 
                  {this.props.left}
                    </Left>
                <Body style={{backgroundColor:"transparent"}}>
                  
                    <CachedImage style={{ width:'100%',height:50,alignItems:'center',justifyContent:'center'}} resizeMode="contain"   source={require('./headerimage.png')}/>
                </Body>
                {this.props.RightBar}    
                     
                   </Header>
                   </View>
               {this.props.children}
          
        </View>
                   </Container>
                  

        );
    }
}
export default HeaderApp;




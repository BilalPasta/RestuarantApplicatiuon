import React,{Component} from 'react';
import {View,TouchableOpacity,Image,ActivityIndicator,InteractionManager} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text } from 'native-base';
import Slider from '../Slide';
import Menuitems from '../MenuItems';

import AppHeader from '../HeaderApp';
import { CachedImage} from 'react-native-cached-image';


 class RelatedMenuPage extends Component {

constructor(props){
    super(props);
    this.state={
    ShowScreen:false
    }
}

componentDidMount(){
  // 1: Component is mounted off-screen
  
  InteractionManager.runAfterInteractions(() => {
this.setState({ShowScreen:true})
 
 });
//  alert(typeof(this.props.ActiveMenuDetails));
}


  render() {
    return (
      this.state.ShowScreen ?
      (<Container>
          <AppHeader left={<TouchableOpacity activeOpacity={0.7}  onPress={()=>{ this.props.navigation.navigate("HOME")
          }}>
        
        <CachedImage placeholder="menu" source={require('../../assets/images/back.png')} style={{width:40,height:40}}/>
                    </TouchableOpacity>} RightBar={    <Right >
<TouchableOpacity activeOpacity={0.7}
transparent
onPress={() => this.props.navigation.navigate('CART')}
>
<CachedImage source={require('../../assets/images/shopping-cart.png')}  style={{width:30,height:30}}/>

</TouchableOpacity>
</Right>}>
            
      
    
 <View style={{flex:1}}>
 <Slider/>
 <Menuitems ShowScreen={this.state.ShowScreen}   OpenItemDetails={(itemindex)=>this.props.navigation.navigate('ItemDetailsPage',{ItemIndex:itemindex})}/>
</View>
 </AppHeader>
      </Container>):(<ActivityIndicator size="small" 
       style={{flex:1,alignItems:'center',justifyContent:'center'}} 
        color="#db0000"/>)
  );
  }
}




  export  default RelatedMenuPage;







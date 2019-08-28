import React, { Component } from 'react';
import { Image,Dimensions,View ,TouchableOpacity,ActivityIndicator,InteractionManager} from 'react-native';
import { Container, Header, Content, Card, CardItem,Title, Thumbnail,Footer,FooterTab, Text, Button, Left,Right, Body ,Spinner} from 'native-base';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import {Additem,ReduceItem} from '../../Store/Action/index';
import { CachedImage,ImageCacheProvider ,    ImageCacheManager
} from 'react-native-cached-image';

 class ItemsDetails extends Component {

    constructor(props){
        super(props);
        this.state={
           ShowScreen:false,
            ItemIndex:this.props.navigation.state.params.ItemIndex,
            AppMenuData:this.props.Appmenudata.AppMenuData,
            MenuName:this.props.ActiveMenuDetails.ActiveMenuName,
            MenuIndex:this.props.ActiveMenuDetails.ActiveMenuIndex,
        }
   

    }
    componentDidMount(){
      InteractionManager.runAfterInteractions(() => {
      
        this.setState({
          ShowScreen: true,
        });
      });
     }
   
    // componentWillReceiveProps(nextprops){
    //   this.setState({AppMenuData:nextprops.Appmenudata.AppMenuData});
    // }
  render() {
    
    return (
      this.state.ShowScreen?
      (<Container>
<Content>
<Header transparent style={{backgroundColor:'#db0000'}} >
  <Left>
    <TouchableOpacity onPress={()=>this.props.navigation.navigate("HOME")}>
    <CachedImage  source={require('../../assets/images/back.png')} style={{width:40,height:40}}/>
      </TouchableOpacity>
  

  </Left>

  <Body>
<Text style={{color:'#fff',alignItems:'center',justifyContent:'center',fontWeight:'bold'}}>{this.state.MenuName.toUpperCase() }
  </Text>
  
  </Body>
  <Right >

<TouchableOpacity onPress={()=>this.props.navigation.navigate('CART')} >
<CachedImage source={require('../../assets/images/shopping-cart.png')} style={{width:30,height:30}}/>


  </TouchableOpacity>
</Right>
 
</Header>
<View style={{flex:1}}>

   <Text style={{color:'#fff',backgroundColor:'#000',textAlign:'center',fontSize:13,fontWeight:'bold',padding:5,marginTop:5,marginBottom:5}}>{this.state.AppMenuData[this.state.MenuIndex][this.state.ItemIndex].name.toUpperCase() }</Text>

           <CachedImage   source={ {uri:this.state.AppMenuData[this.state.MenuIndex][this.state.ItemIndex].imageurl}}   
          
           style={{height:300,
width: Dimensions.get('window').width}}
resizeMode={"stretch"}

      /> 
     
    <View style={{flex:1,flexDirection:'row',margin:10,marginBottom:30,borderColor:'#000',borderRightWidth:4,padding:10,borderLeftWidth:4}}>
      <View style={{flex:1,flexDirection:'row'}}>
      <CachedImage style={{flex:1,width:20,height:20,alignItems:'center',justifyContent:'center'}}
       source={require('../silverware-fork-knife.png')}/>
<Text style={{flex:1,marginLeft:3,textAlign:'center',fontWeight:'bold'}}>{this.state.AppMenuData[this.state.MenuIndex][this.state.ItemIndex].quantity.toUpperCase()}</Text>
        </View>

        <View style={{flex:1,flexDirection:'row'}}>
        <CachedImage  style={{flex:
          1,width:20,height:20,alignItems:'center',justifyContent:'center'}}  source={require('../cash.png')}/>
        <Text style={{flex:1,textAlign:'center',fontWeight:'bold'}}>
       {this.state.AppMenuData[this.state.MenuIndex][this.state.ItemIndex].price} </Text>
        </View>
  
       </View>
    {/* </CardItem> */}
 {/* </Card> */}
 </View>
 <View style={{margin:2,marginTop:10}}>
   <View>
     
     </View>
     <View style={{flex:1,flexDirection:'row',marginBottom:5}}>



<View style={{flex:1,flexDirection:'row'}}>



<TouchableOpacity style={{flex:1,backgroundColor:'#000',borderRadius:5}} onPress={()=>this.props.ReduceItem(this.state.MenuIndex,this.state.ItemIndex)} >
<View  style={{flex:1,alignItems:'center',justifyContent:'center'}} >
<Text style={{color:'#fff',fontSize:14}}> - </Text>

</View>
</TouchableOpacity>

<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
{(!this.state.AppMenuData[this.state.MenuIndex][this.state.ItemIndex].count)?(<Text>0</Text>):(<Text>{this.state.AppMenuData[this.state.MenuIndex][this.state.ItemIndex].count}</Text>)}

</View>


<TouchableOpacity style={{flex:1,backgroundColor:'#000',borderRadius:5}} onPress={() => this.props.Additem(this.state.MenuIndex,this.state.ItemIndex)} >
<View  style={{flex:1,alignItems:'center',justifyContent:'center'}} >
<Text style={{color:'#fff',fontSize:14}}> + </Text>

</View>
</TouchableOpacity>


</View>
<View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#000',margin:3,borderRadius:5}}>
<TouchableOpacity  style={{flex:1}} onPress={()=>this.props.navigation.navigate('CART')} >
    <Text style={{fontSize:15,fontWeight:'bold',padding:5,color:'#fff'}}>VIEW CARD </Text>
  </TouchableOpacity>
</View>
              </View>
   </View>
 
    </Content>
      </Container> ):(<ActivityIndicator size="large" style={{flex:1,alignItems:'center',justifyContent:'center'}}  color="#db0000"/>)
      

  );
  }
}

 

function mapstatetoprops (state){
  return{
    Appmenudata:state.Appdata,
    ActiveMenuDetails:state.Appdata,


  }
}

function mapdispatchtoprops (dispatch){
  return{
    Additem:(Menuindex,itemindex)=>{
      dispatch(Additem(Menuindex,itemindex))
    },
    ReduceItem:(Menuindex,itemindex)=>{
      dispatch(ReduceItem(Menuindex,itemindex))
    }

  }
}


export default connect(mapstatetoprops,mapdispatchtoprops)(ItemsDetails);
{/* export default ItemsDetails; */}



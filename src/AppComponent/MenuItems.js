import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Left, Body, Right, } from 'native-base';
import {TouchableOpacity} from 'react-native';
import {Additem} from '../Store/Action/index';
import {connect} from 'react-redux';
import {View,InteractionManager,ActivityIndicator} from 'react-native';
import { CachedImage 
} from 'react-native-cached-image';
import Toast from 'react-native-root-toast';




 class MenuItems extends Component {
    static navigationOptions = {
        header:null,
        drawer: () => ({
            label: 'Notifications'
        })
    }
    constructor(props)
    {
      super(props);
        this.state={
      
           
            MenuName:this.props.ActiveMenuDetails.ActiveMenuName,
            MenuIndex:'',
            MenuItems:this.props.ActiveMenuDetails.ActiveMenu,
            MenuIndex:this.props.ActiveMenuDetails.ActiveMenuIndex,

        }
      
                

       
    }
  
    
 
  
  
          
       

        
  render() {
    return (
      this.props.ShowScreen?
      (<Container>
        
        <Content>
          <View style={{flex:1}}> 
          <List>
         
       {(this.state.MenuItems!=null)?(
       <View style={{flex:1}}>

           <ListItem  itemDivider>
       
       
       <Text style={{padding:10,fontWeight:'bold'}}>{this.state.MenuName}</Text>
     
        </ListItem> 
                     
            
               { this.state.MenuItems.map((item,i)=>{
                    return(    <ListItem thumbnail key={i}>
                  
                          <Left>
                                       <CachedImage   style={{width:40,height:40}} source={{uri:item.imageurl}}  />
                            </Left>
                   
                            <Body>
                            <TouchableOpacity activeOpacity={0.5} transparent 
              onPress={()=>{
                this.props.OpenItemDetails(i)}}
                > 
                            <Text>{item.name}</Text> 
                 <Text note numberOfLines={1}>{item.description}</Text>
                 </TouchableOpacity>

                              </Body>
                              
                              <Right >
              <TouchableOpacity style={{borderRadius:5}} activeOpacity={0.7} onPress={() => {
           Toast.show('Item Added To Cart', {
            duration: 100,
            position: Toast.positions.BOTTOM,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
            onShow: () => {
                // calls on toast\`s appear animation start

            },
            onShown: () => {
                // calls on toast\`s appear animation end.

            },
            onHide: () => {
                // calls on toast\`s hide animation start.
            },
            onHidden: () => {
                // calls on toast\`s hide animation end.
                this.props.Additem(this.state.MenuIndex,i)


            }
        });
              
            }
            } 
              >

<CachedImage source={require('../assets/images/plus.png')}  style={{width:25,height:25,}}/>
</TouchableOpacity>
            

    
            
             </Right>
                          </ListItem>  )   })}
       
                      </View>):(<View style={{flex:1,paddingTop: 20,backgroundColor:"#fff",justifyContent: "center",alignItems: "center"}}><ActivityIndicator size="large" color="#db0000"  /></View>)}
                      </List>
       </View>
        </Content>
      </Container>):(<ActivityIndicator size="large" style={{flex:1,alignItems:'center',justifyContent:'center'}}  color="#db0000"/>)
    );
  }
}

function mapstatetoprops(state){
return{
  ActiveMenuDetails:state.Appdata,
}
}
function mapdispatchtoprops(dispatch){
return{
  Additem:(menuindex,itemindex)=>{
    dispatch(Additem(menuindex,itemindex));
}
}
}


export default connect(mapstatetoprops,mapdispatchtoprops)(MenuItems);




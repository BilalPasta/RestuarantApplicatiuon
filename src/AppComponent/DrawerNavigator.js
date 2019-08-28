import React,{Component} from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import {createDrawerNavigator,createStackNavigator} from 'react-navigation';
import Home from './Pages/Home';
import CardPage from './Pages/CardList';
import ContactUs from './Pages/Contact';
import Feedback from './Pages/Feedback';
import AboutUs from './Pages/About';
import PropTypes from 'prop-types';
import SplasScreen from './Pages/SplasScreen';
import  ItemDetailsPage from './Pages/ItemDetails';
import RelatedMenuPage from './Pages/RelatedMenuPage';


 class DrawerItemList extends Component {
    render() {
      return (  
        <View style={{flex:1,backgroundColor:'#808080'}}>

        <View style={{flex:1,backgroundColor:"#808080",marginTop:20}}>
 <Image  source={require('./headerimage.png')}
 style={{flex:1,width:200,alignItems:'center',justifyContent:'center'}} resizeMode="contain" /> 


          </View>
          
            <View style={{flex:4}}>
            
             <TouchableOpacity   full info onPress={()=>this.props.navigation.navigate("HOME")}>
            <Text  style={{marginLeft:35,color:'#fff',fontSize:18,fontWeight:"bold",height:24}}>HOME</Text>
          </TouchableOpacity>
             <TouchableOpacity onPress={()=>this.props.navigation.navigate("FEEDBACK")}> 
             <Text style={{marginLeft:35,color:'#fff',fontSize:18,fontWeight:"bold",height:24}}>FEEDBACK
                 </Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>this.props.navigation.navigate("CART")}> 
             <Text style={{marginLeft:35,color:'#fff',fontSize:18,fontWeight:"bold",height:24}}>CART
                 </Text>
             </TouchableOpacity>   
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("CONTACT")}> 
             <Text style={{marginLeft:35,color:'#fff',fontSize:18,fontWeight:"bold",height:24}}>CONTACT
                 </Text>
             </TouchableOpacity>  
             
               <TouchableOpacity onPress={()=>this.props.navigation.navigate("ABOUT")}> 
             <Text style={{marginLeft:35,color:'#fff',fontSize:18,fontWeight:"bold",height:24}}>ABOUT
                 </Text>
             </TouchableOpacity>
    
              </View>
            
          </View>
  
      );
    }
  }


  

const DrawerNav= createDrawerNavigator({
    Splash:{
        screen:createStackNavigator({
            screen:SplasScreen
        })
    },
    HOME:{screen:Home},
    FEEDBACK:{  screen:Feedback },
    CART:{   screen:CardPage },
    CONTACT:{screen:ContactUs},
    ABOUT:{   screen:AboutUs   },
    RelatedMenuPage:{screen:RelatedMenuPage} ,
    ItemDetailsPage:{screen: ItemDetailsPage }
},

{  drawerPosition:'left',
        drawerWidth:250,
        contentComponent:DrawerItemList,
        contentOptions:{
            activeTintColor:'white'
        }}
        )

export default DrawerNav;
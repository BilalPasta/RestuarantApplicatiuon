import React,{Component} from 'react';
import {View,Text,TouchableOpacity,Image,InteractionManager,ActivityIndicator,ScrollView} from 'react-native';
import { Container, Header, Content, Item, Input,Body ,Right,Button,Textarea} from 'native-base';
import AppHeader from '../HeaderApp';
import Slidr from '../Slide';
import HomeMenu from '../HomeMenu';
import {Icon} from 'react-native-elements';
import {DrawerActions} from 'react-navigation';

import { CachedImage,ImageCacheProvider ,    ImageCacheManager
} from 'react-native-cached-image';


export default class ContactUs extends Component {


  static navigationOptions = ({ navigation }) => ({
   drawerLabel:'Contact',
    drawerIcon:(tintColor)=>{
      return( <Icon 
        name="contact-mail"
      type='material-community'
 size={24} />

    )}  })
  
    constructor(props) {
      super(props);
   
      // 1: set didFinishInitialAnimation to false
      // This will render only the navigation bar and activity indicator
      this.state = {
        ShowScreen: false,
      };
    }


  render() {
    return (
      this.state.ShowScreen?( <Container>
             {/* <AppHeader left={  <TouchableOpacity activeOpacity={0.7} onPress={()=>{
      this.props.navigation.goBack()
          }} > */}
               
                 
            {/* <CachedImage source={require('../../assets/images/back.png')} style={{width:40,height:40}}/>
          </TouchableOpacity>} title="CONTACTUS" RightBar={<Right >
          <TouchableOpacity activeOpacity={0.7}
              transparent
              onPress={() => this.props.navigation.navigate('CardListPage')}
            >
                  <CachedImage source={require('../../assets/images/cart.png')}  style={{width:30,height:30}}/>

            </TouchableOpacity>
            </Right>}> */}
            <AppHeader left={   <TouchableOpacity activeOpacity={0.7} 
         onPress={()=>{
      this.props.navigation.navigate("HOME")
          }} >
               
            <CachedImage source={require('../../assets/images/back.png')} style={{width:40,height:40}}/>
          </TouchableOpacity>}   title="CONTACT" RightBar={<Right />} >
          <ScrollView>
            {/* <Content padder> */}
          <Item rounded style={{marginTop:20,marginBottom:10}}>
            <Input placeholder='Your Name?' style={{fontSize:12}}/>
          </Item>
          <Item rounded style={{marginTop:20,marginBottom:10}}>
            <Input placeholder='Your Email?' style={{fontSize:12}}/>
          </Item>
          <Item rounded style={{marginTop:20,marginBottom:10}}>
            <Input placeholder='Your Mobile No?' style={{fontSize:12}}/>
          </Item>
          <Textarea rounded rowSpan={5} bordered placeholder="Message" style={{marginTop:20,marginBottom:10,fontSize:12}} />
          <TouchableOpacity style={{backgroundColor:"#db0000"}} activeOpacity={0.7} full info onPress={()=>alert('clicked')}>
            <Text  style={{textAlign:'center',padding:5,color:'#fff'}}>Submit</Text>
          </TouchableOpacity>
          <View style={{marginTop:10}}>
            <Text style={{textAlign:'center',backgroundColor:"#000",color:'#fff',fontWeight:'bold',fontSize:12,padding:10}}>Main Branch (New Town)
              </Text>
              <Text style={{textAlign:'center',fontSize:12}}>
              Hanifia Bar BQ Shop No. 10, New Town Jama Masjid,
Karachi — Pakistan.
                </Text>
                <View style={{flex:1,flexDirection:'row'}}>
                <CachedImage style={{flex:1,width:20,height:20}} source={require('../telephone.png')}/>
                <Text style={{flex:4,padding:4}}>
                +92 213 4918322
                  </Text>
                  </View>
                  <View style={{flex:2,flexDirection:'row'}}>
                <CachedImage style={{flex:1,width:20,height:20}} source={require('../phone.png')}/>
                <Text style={{flex:4,padding:4}}>
                +92 335 4264342
                  </Text>
                  </View>
                  <View style={{flex:1,flexDirection:'row'}}>
                <CachedImage style={{flex:1,width:20,height:20}} source={require('../email.png')}/>
                <Text style={{flex:4,padding:4}}>
                info@hanifia.com
                  </Text>
                  </View>
                 
                  <Text style={{textAlign:'center',backgroundColor:"#000",color:'#fff',fontWeight:'bold',fontSize:12,padding:10}}>Other Branches
              </Text>

              <View style={{flex:1,flexDirection:'row'}}>
              <View style={{flex:1}}>
              <Text style={{fontSize:12,fontWeight:'bold',textAlign:'center'}}>
              New Town Branch
                </Text>
                <Text style={{fontSize:12,textAlign:'center'}}>
                Hanifia Hunter Beef, Shop No. 14,               New Town Jama Masjid,
Karachi.
                </Text>
                
 
               
                </View>
                <View style={{flex:1}}>
                <Text style={{fontSize:12,fontWeight:'bold',textAlign:'center'}}>
                Defence Branch
                </Text>
                <Text style={{fontSize:12,textAlign:'center'}}>
                Shop No. 3, Khayabane-Shamsheer,     Lane 4, Khadda Market, Near Meat One, DHA Phase V, Karachi.
                </Text>
                
           
              
                </View>
                <View style={{flex:1}}>
                <Text style={{fontSize:12,fontWeight:'bold',textAlign:'center'}}>
                Clifton Branch
                </Text>
                <Text style={{fontSize:12,textAlign:'center'}}>
                Shop No. 33, Block 5,
Hasho Terrace, Clifton,
Karachi.
                </Text>
                
                </View>

                </View>
            </View>
        {/* </Content> */}
        </ScrollView>

          </AppHeader>
       
           
           
         
       
      </Container>):(<ActivityIndicator size="large" style={{flex:1,alignItems:'center',justifyContent:'center'}}  color="#db0000"/>)
    );
  }
  componentDidMount() {
    // 1: Component is mounted off-screen
    InteractionManager.runAfterInteractions(() => {
    
      this.setState({
        ShowScreen: true,
      });
    });
  }
 
 
}
import React,{Component} from 'react';
import {View,Image,ScrollView,InteractionManager,ActivityIndicator,TouchableOpacity} from 'react-native';
import AppHeader from '../HeaderApp';
import {Icon} from 'react-native-elements';
import {EditStatus} from '../../Store/Action/index';
import { Container, Header, Content, Item, Input,Body,Right,Button,Text } from 'native-base';

import { CachedImage} from 'react-native-cached-image';

export default class AboutUs extends Component {

  constructor(props){
    super(props);
    this.state={

      ShowScreen:false
    }
    // this.ShowAboutScreen=this.ShowAboutScreen.bind(this);
  }
  // ShowAboutScreen(){
  //   this.setState({
  //     ShowScreen:true
  //   })
  // }

  
  static navigationOptions = ({ navigation }) => ({
drawerLabel:'About',
    drawerIcon:(tintColor)=>{
      return( <Icon name="home"
      type='material-community'
 size={24} >

      </Icon>)}
  })

  
  componentDidMount(){
    // 1: Component is mounted off-screen
    
    InteractionManager.runAfterInteractions(() => {
this.setState({ShowScreen:true})
   
   });
}

  render() {
    return (
      this.state.ShowScreen?(
      <Container>
              



             <AppHeader left={   <TouchableOpacity activeOpacity={0.7} 
         onPress={()=>{
      this.props.navigation.navigate("HOME")
          }} >
               
            <CachedImage source={require('../../assets/images/back.png')} style={{width:40,height:40}}/>
          </TouchableOpacity>}   title="ABOUT" RightBar={<Right />} >
            



       
            <View style={{flex:1,margin:3}}>
            <ScrollView>
<Text style={{color:'#000',fontSize:20,textAlign:'center',fontWeight:'bold'}}>WHO ARE WE
  </Text>
  <View style={{flex:2,flexDirection:'row'}}>
  <Text style={{fontSize:12,flex:2,margin:3,textAlign:'center'}}>
  What Al-Haj Muhammad Hanif Shimlavi (RA) started back
   in 1889 from Shimla, is now established as one of the most trusted names
    in food industry in Karachi. This trustworthy reputation has been earned by hard work with dedication for over a century. The business of preparing variety of Hunter Beef has Alhamdulillah gained more popularity and repute with the passage of time. The very original recipes and unique taste are the keystones to the success that Hanifia has had in Karachi 
  after partition. Today, Hanifia has spread across busy streets of Karachi.
    </Text>
    <View style={{flex:1,justifyContent: 'center',
                alignItems: 'center'}}>
    <CachedImage style={{height:100,width:100}} source={{uri:'http://hanifia.com/_assets/images/about-section.jpg'}}/>
    </View>
    </View>
    <View style={{flex:2,flexDirection:'row',marginTop:5}}>
<View  style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <CachedImage style={{height:100,width:100}}  source={{uri:'http://hanifia.com/_assets/images/about1.jpg'}}/> 
    </View>
    <Text style={{fontSize:12,flex:2,textAlign:'center',padding:10}}>
    Hanifia has the distinction of not only mastering the art of contemporary fast food,
     but also introducing some products of its own. Hanifia introduced first ever burger in 
     Karachi only for the price of 75 paisa. This trend still persists and Hanifia continue to 
     offer the best of tastes at the lowest of prices. Hanifia has successfully brought in food
      products of the world and given them exquisite Pakistani flavors. Zinger Burger from the West, 
      TAZIG from Saudi Arabia are just of the examples where Hanifia has given them an identity of their own. 
      Gyro is the latest addition in the delicious and flavorsome family. Hanifia believes in maintaining 
      standard in every detail- its very own ‘Mustard Sauce’ is unmatched in the entire industry.
    </Text>

      </View>
      <View style={{flex:1,marginTop:1}}>
        <Text style={{fontSize:13,color:"#db0000",padding:3,fontWeight:'bold'}}>
        WE ARE THANKFUL TO ALMIGHTY ALLAH FOR HIS CONTINUED BLESSINGS AND ALSO TO
         OUR VALUED CUSTOMERS FOR THEIR ENCOURAGING REMARKS AND POSITIVE FEEDBACK.
          WE URGE TO KEEP IMPROVING OUR CURRENT PRODUCTS AND KEEP ON CREATING NEW ITEMS. 
        FOR GENERATIONS, THIS TRUST HAS BEEN THE BACKBONE OF OUR SERVICE.
          </Text>
        </View>
        <View style={{flex:1,flexDirection:'row',marginTop:5}}>
        <Text style={{flex:1,fontSize:12,margin:3}}>
        Hanifia is also a trendsetter for Chatpati Raan and Hunter Raan on the auspicious Muslim festival 
        of Eid-ul-Azha. Hanifia accepts the ‘Raan’ piece from its distinguished
         customers, and have it prepared by a team of seasoned experts to enhance the enjoyment
          and happiness of the family and friends dinner time.

Hanifia is the oldest and the best in the business by a
 good healthy and tasty mile. Through its artistry, Hanifia can turn routine meal
  time in to a celebration.
          </Text>
          </View>
          </ScrollView>
  </View>


         
           
          </AppHeader>
           
         
       
      </Container>):(<ActivityIndicator size="large" style={{flex:1,alignItems:'center',justifyContent:'center'}}  color="#db0000"/>)
    );
  }
}
import React,{Component} from 'react';
import {View,Text,TouchableOpacity,Button,Image,InteractionManager,ActivityIndicator} from 'react-native';
import { Container, Header, Content, Item, Input,Body ,Right,Textarea} from 'native-base';
import AppHeader from '../HeaderApp';
import Slidr from '../Slide';
import HomeMenu from '../HomeMenu';
import {Icon} from 'react-native-elements';
import {FeedBackmsg} from '../../Store/Action/index';
import {connect} from 'react-redux';
import {DrawerActions} from 'react-navigation';
import { CachedImage,ImageCacheProvider ,    ImageCacheManager
} from 'react-native-cached-image';

 class Feedback extends Component {
  static navigationOptions = ({ navigation }) => ({
   drawerLabel:'FeedBack',
    drawerIcon:(tintColor)=>{
      return( <Icon 
        name="font-awesome"
      type='material-community'
 size={24} />

    )}  })
constructor(props){
super(props);
this.state={
  ShowScreen:false,
ClientName:'',
email:'',
MobileNumber:'',
message:''
}

this.Submit=this.Submit.bind(this);
this.onChangeText=this.onChangeText.bind(this);
}
onChangeText = (key, val) => {
  this.setState({ [key]: val.toLowerCase()})
}
 Submit(){
this.props.FeedBackmsg(this.state);
// alert(this.state.Message)
            }
  


componentDidMount(){
     // 1: Component is mounted off-screen
     InteractionManager.runAfterInteractions(() => {

      this.setState({
        ShowScreen: true,
      });
    });
}
  render() {
    return (
      this.state.ShowScreen ?(<Container>
              
        {/* <AppHeader left={ <TouchableOpacity onPress={()=>{
      this.props.navigation.goBack()
          }} >
               
              
            <CachedImage source={require('../../assets/images/back.png')} style={{width:40,height:40}}/>
          </TouchableOpacity> } title="FEEDBACK" RightBar={<Right >
          <TouchableOpacity
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
          </TouchableOpacity>}   title="FEEDBACK" RightBar={<Right/> } >

        <Content padder>
          <Item rounded style={{marginTop:20,marginBottom:10}}>
            <Input placeholder='Your Name?' style={{fontSize:12}}  onChangeText={val => this.onChangeText('ClientName', val)}
                 />
          </Item>
          <Item rounded style={{marginTop:20,marginBottom:10}}>
            <Input placeholder='Your Email?' style={{fontSize:12}} onChangeText={val => this.onChangeText('email', val)}/>
          </Item>
          <Item rounded style={{marginTop:20,marginBottom:10}}>
            <Input placeholder='Your Mobile No?' style={{fontSize:12}} onChangeText={val => this.onChangeText('MobileNumber', val)}/>
          </Item>
          <Textarea rounded rowSpan={5} bordered placeholder="message" style={{marginTop:20,marginBottom:10,fontSize:12}} onChangeText={val => this.onChangeText('message', val)} />
         
          
            <TouchableOpacity
  onPress={()=>{this.Submit();
  this.setState({ClientName:'',
  email:'',
  MobileNumber:'',
  message:''})}}
 
style={{backgroundColor:"#db0000"}}
>
<Text style={{textAlign:'center',padding:5,color:'#fff'}}>Submit </Text>
</TouchableOpacity>
        </Content>


          </AppHeader>
           
           
         
       
      </Container>):(<ActivityIndicator size="large" style={{flex:1,alignItems:'center',justifyContent:'center'}}  color="#db0000"/>)
    );
  }
}

function mapStateToProps(state){
  return{

  }
}
function mapDispatchToProps(dispatch){
  return{
    FeedBackmsg:(data)=>{
      dispatch(FeedBackmsg(data))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Feedback);
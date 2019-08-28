import React,{Component} from 'react';
import {View,TouchableOpacity,Image,ActivityIndicator,InteractionManager} from 'react-native';
import { Container, Header, Content, Item, Input,Body,Right,Button,Text } from 'native-base';
import OrderItemDetails from '../OrderItemDetail';
import AppHeader from '../HeaderApp';
import {Icon} from 'react-native-elements';
import {EditStatus} from '../../Store/Action/index';
import {connect} from 'react-redux';

import { CachedImage} from 'react-native-cached-image';
 class CardListPage extends Component{
    constructor(props){
        super(props)
       this.state={
           ShowScreen:false
    }
    }
    componentDidMount() {
        // 1: Component is mounted off-screen
        InteractionManager.runAfterInteractions(() => {
        
          this.setState({
            ShowScreen: true,
          });
        });
      }
    
    static navigationOptions = ({ navigation }) => ({
   drawerLabel:'Cart',
        drawerIcon:(tintColor)=>{
          return( <Icon 
            name="cart-outline"
          type='material-community'
     size={24} />
    
        )}  })
           
    render(){
        return(
            this.state.ShowScreen?
           ( <Container>
             
        <AppHeader left={   <TouchableOpacity activeOpacity={0.7} 
         onPress={()=>{
      this.props.navigation.navigate("HOME")
          }} >
               
            <CachedImage source={require('../../assets/images/back.png')} style={{width:40,height:40}}/>
          </TouchableOpacity>}   title="Cart" RightBar={<Right >
          <TouchableOpacity activeOpacity={0.7}
              transparent
              onPress={() => this.props.EditStatus()}
            >
            {(this.props.EditableStatus)?(  <CachedImage source={require('../../assets/images/pencil-off.png')} style={{width:30,height:30}}/>
):(            <CachedImage source={require('../../assets/images/pencil.png')}   style={{width:30,height:30}}  />
)}
             
            </TouchableOpacity>
            </Right>}>
            
<OrderItemDetails/>



          </AppHeader>
           
           
     
       
      </Container>):(<ActivityIndicator size="large" style={{flex:1,alignItems:'center',justifyContent:'center'}}  color="#db0000"/>)
        )
    }
}

function MapStateToProps(state){
    return{
        EditableStatus:state.Appdata.EditableStatus

    }
}
function MapDispatchToProps(dispatch){
    return{
        EditStatus:()=>{
            dispatch(EditStatus())
        }
    }
}


export default connect(MapStateToProps,MapDispatchToProps)(CardListPage);
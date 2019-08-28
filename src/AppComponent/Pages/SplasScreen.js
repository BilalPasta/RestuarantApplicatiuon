import React, {Component} from 'react';
import {Button, Dimensions, Text, View,Image,StatusBar,ActivityIndicator,ImageBackground,InteractionManager} from 'react-native';
import {Getdata} from '../../Store/Action/index';
import {connect} from 'react-redux';
import { CachedImage} from 'react-native-cached-image';

let {width} = Dimensions.get('window');
class Splash extends Component {

    static navigationOptions = {
        title: "Splash",
        header:null
    };
constructor(props){
super(props);
this.state={
    store:null,
    ShowScreen:false
}
}
// componentWillReceiveProps(nextprops){
//     this.setState({store:nextprops.Appdata});
//     // alert(this.state.store);


//   }
// componentWillMount(){
//     this.props.Getdata();
// }
    componentDidMount(){
          InteractionManager.runAfterInteractions(() => {
    
      this.setState({
        ShowScreen: true,
      });
      this.props.Getdata();
      setTimeout(()=>{
        //   if(this.props.Appdata!==null){    
  this.props.navigation.navigate("HOME")
// }

          } ,4000);
    });
      

           
    }

    render() {
        const {navigate} = this.props.navigation;
        

    return (
        this.state.ShowScreen?
         (<View style={{flex:1}}> 
      
   <CachedImage style={{flex:1,width:width}}   source={require('../../assets/images/SplashScreen.png')}  resizeMode="contain">
    <ActivityIndicator animating={ this.state.loading }  size="large" style={{flex:1,alignItems:'center',justifyContent:'center'}}  color="#db0000"/>

</CachedImage> 
    {/* <Image style={{flex:1,width:width}} source={require('./SplashImages/SplashScreen.png')} resizeMode="contain"/>  */}
     </View>):(
         <ActivityIndicator size="large" style={{flex:1,alignItems:'center',justifyContent:'center'}}  color="#db0000"/>
     )
  
     ) 
    
}}

function mapstatetoprops(state){
    return{
Appdata:state.Appdata.AppMenuData
    }
}

function mapdispatchtoprops(dispatch){
return{
    Getdata:()=>{
        dispatch(Getdata());
    }
}
}
export default connect(mapstatetoprops,mapdispatchtoprops)(Splash);
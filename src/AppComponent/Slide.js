import React, {Component} from 'react'
import {
    View,

    Dimensions,ActivityIndicator
} from 'react-native'
import Swiper from 'react-native-swiper'
import {connect} from 'react-redux';
import {Getdata} from '../Store/Action/index';
import { CachedImage
} from 'react-native-cached-image';
let {width} = Dimensions.get('window');





const styles = {
    container: {
        flex: 2
    },
    image: {
        
        flex:1,
        width:width,
        
    },
}


 class ImageSlider extends Component {
   

  
    
    render(){
        return (<View style={{flex:1,flexDirection:'column'}}>

            {(this.props.ImageSliderPictures.length>0)?
             (<Swiper
                    >
                {
                    this.props.ImageSliderPictures.map((item, i) =>{ 
                        console.log(item,'item');
                    return (     <View style={styles.container} key={i}>


        <CachedImage source={{uri:item}}  style={styles.image} resizeMode={"stretch"}/>
    </View>
       )
            })
                }

                </Swiper>):(<ActivityIndicator   size="small" style={{flex:1,alignItems:'center',justifyContent:'center'}}  color="#db0000"/>)} 
                </View> )
    
    }
}
function mapStateToProps(state){
    return{
        ImageSliderPictures:state.Appdata.SliderImages
    }
} 

function mapDispatchToProps(dispatch){
    return{
        Getdata:()=>dispatch(Getdata())
    }
} 


 export default connect(mapStateToProps,mapDispatchToProps)(ImageSlider);
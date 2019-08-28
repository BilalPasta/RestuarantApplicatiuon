import React, { Component } from 'react';
import { Text,
    Platform, Dimensions,
    TextInput,TouchableOpacity
} from 'react-native';
import Modal from 'react-native-modalbox';

var screen = Dimensions.get('window');
export default class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            ContactNumber: '',
        };
    }
    showAddModal = () => {
        this.refs.myModal.open();
    }
  
    render() {
        return (
      
            <Modal
                ref={"myModal"}
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'ios' ? 30 : 10,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 250
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                }}
            >
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 40,color:'#db0000'
                }}>User Information</Text>
                <TextInput
                    style={{
                        height: 40,
                      
                        margin:10,
                        marginBottom: 20,
                    }}           
                    onChangeText={(text) => this.setState({ email: text })}
                    placeholder="Enter Email"
                    value={this.state.email}                 
                />
                <TextInput
                    style={{
                        height: 40,
                      
                        margin:10,
                        marginBottom: 20,
                    }}
                    onChangeText={(text) => this.setState({ ContactNumber: text })}
                    placeholder="Enter Contact"
                    value={this.state.ContactNumber}
                />
                
                    <TouchableOpacity disabled={!this.state.ContactNumber.trim()&&!this.state.email.trim()} style={{  
       
        alignItems: 'center',backgroundColor:'#fff',borderRadius:3}}      onPress={() => { 
            this.props.handlerFromParant(this.state.email,this.state.ContactNumber);
setTimeout(()=>{
    this.props.UserOrder(); 
    this.refs.myModal.close();   


},500)
             }}
        

       >
    <Text style={{color:'#db0000',fontSize:15,fontWeight:'bold',textAlign:'center'}}>Confirm Order
        </Text>
        
    </TouchableOpacity>
                  
            </Modal>
        );
    }
}
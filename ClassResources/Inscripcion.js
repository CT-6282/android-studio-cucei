import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Modal, } from 'react-native';

export default class Inscripcion extends Component {
  constructor(props) {
    super(props);
    this.state = {
        modalVentana_Correo:false,
        modalVentana_Facebook:false,
    };
  }

  render() {
    const correo = () => {
        this.setState({modalVentana_Correo:true})
    }

    const facebook = () => {
        this.setState({modalVentana_Facebook:true})
    }

    const modalCierra = () => {
        this.setState({modalVentana_Correo:false,modalVentana_Facebook:false})
    }



    return (
      <View>
        <Text style ={{fontSize:50, textAlign:"center", color:"black",marginTop:20}}> Inscripción </Text>

        <TouchableOpacity style={{
            borderWidth:2,
            width:300,
            height:50,
            backgroundColor:"blue",
            borderRadius:40,
            marginLeft:40,
            marginTop:30,
            }} onPress={correo}> 

            <Text style={{
                fontSize:25, 
                color:"white",
                textAlign:"center",
                marginTop:5,
            
            }}  >Inscripción por Correo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
            borderWidth:2,
            width:300,
            height:50,
            backgroundColor:"white",
            borderRadius:40,
            marginLeft:40,
            marginTop:30,
            }} onPress={facebook}>

            <Text style={{
                fontSize:23, 
                color:"black",
                textAlign:"center",
                marginTop:5,
            
            }}>Inscripción por FaceBook</Text>
        </TouchableOpacity>

        <Modal 
        transparent={true}
        visible={this.state.modalVentana_Correo}
        animationType="slide"
        >
            <View style={{
                borderWidth:2,
                width:300,
                height:320,
                marginTop:350,
                marginLeft:45,
                borderRadius:5,
            }}>
                <Text style={{fontSize:20,marginLeft:5,color:"black"}}>Nombre: </Text>
                <TextInput></TextInput>
                <Text style={{fontSize:20,marginLeft:5,color:"black"}}>Correo: </Text>
                <TextInput></TextInput>
                <Text style={{fontSize:20,marginLeft:5,color:"black"}}>Password: </Text>
                <TextInput></TextInput>
                <TouchableOpacity style={{
                    borderWidth:2,
                    backgroundColor:"blue",
                    width:150,
                    height:50,
                    marginLeft:80,
                    marginTop:25,
                    borderRadius:30,    
                }} onPress={modalCierra} > 
                    <Text style={{color:"white", marginLeft:25, fontSize:25,}}>Aceptar</Text>
                </TouchableOpacity>
            </View>
        </Modal>

        <Modal 
        transparent={true}
        visible={this.state.modalVentana_Facebook}
        animationType="slide"
        >
            <View style={{
                borderWidth:2,
                width:300,
                height:240,
                marginTop:350,
                marginLeft:45,
                borderRadius:5,
            }}>
                <Text style={{fontSize:20,marginLeft:5,color:"black"}}>Correo: </Text>
                <TextInput></TextInput>
                <Text style={{fontSize:20,marginLeft:5,color:"black"}}>Contraseña: </Text>
                <TextInput></TextInput>
                <TouchableOpacity style={{
                    borderWidth:2,
                    backgroundColor:"blue",
                    width:150,
                    height:50,
                    marginLeft:80,
                    marginTop:25,
                    borderRadius:30,    
                }} onPress={modalCierra} > 
                    <Text style={{color:"white", marginLeft:25, fontSize:25,}}>Aceptar</Text>
                </TouchableOpacity>
            </View>
        </Modal>
      </View>
    );
  }
}
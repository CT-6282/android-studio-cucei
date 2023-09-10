import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextBase, Modal, TextInput,Image,StyleSheet } from 'react-native';

export default class Inscripcion extends Component {
  constructor(props) {
    super(props);
    this.state = {
        modalVentana:false,
    };
  }

  render() {
    const correo = () =>{
        this.setState({modalVentana:true})
    }
    const cierra = () =>{
        this.setState({modalVentana:false})
    }
    
    return (
      <View>
        <Text style={{fontSize:50,textAlign:'center',color:"black",}}> Inscripcion </Text> 
        {/* doble llave hace darle estilo ma texto */}
        <TouchableOpacity style={{
            borderWidth:2,
            width:300,
            height:50,
            backgroundColor:"white",
            borderRadius:40,
            marginLeft:55,
            marginTop:30,}} onPress={correo}>

            <Text style={{
                fontsize:25,
                color:"black",
                marginTop:2,
                textAlign:'center',}}>
                  <Image
                style={styles.ImagenF}
                source={require('./Imagenes/gmail.png')}
                />  Inscripcion por correo</Text>

        </TouchableOpacity>
        <TouchableOpacity style={{
            borderWidth:2,
            width:300,
            height:50,
            backgroundColor:"blue",
            borderRadius:40,
            marginLeft:55,
            marginTop:30,}} onPress={correo}>
            
            <Text style={{
                fontsize:25,
                color:"white",
                marginTop:2,
                textAlign:'center',}} >
                  <Image
                style={styles.ImagenF}
                source={require('./Imagenes/logFa.png')}
                />  Inscripcion por Facebook
                
                 </Text>

        </TouchableOpacity>
        <Modal
        transparent={true}
        visible={this.state.modalVentana}
        animationType='slide'
        >
            <View style={{
                borderWidth:2,
                width:300,
                height:300,
                marginTop:300,
                marginLeft:55,
                borderRadius:20,

            }}>
                <Text style={{color:"black",textAlign:'left',marginLeft:10,}}>Nombre:</Text>
                <TextInput></TextInput>
                <Text style={{color:"black",textAlign:'left',marginLeft:10,}}>Correo:</Text>
                <TextInput></TextInput>
                <Text style={{color:"black",textAlign:'left',marginLeft:10,}}>Password:</Text>
                <TextInput></TextInput>
                <TouchableOpacity style={{
                    
                    width:250,
                    height:50,
                    backgroundColor:"blue",
                    borderRadius:40,
                    marginLeft:25,
                    marginTop:30,
                }} onPress={cierra}>
                    <Text style={{color:"white",fontsize:25, textAlign:'center',marginTop:10,}}>ACEPTAR</Text>
                </TouchableOpacity>
            </View>
                
        </Modal>
        <Modal
        transparent={true}
        visible={this.state.modalVentana}
        animationType='slide'
        >
            <View style={{
                borderWidth:2,
                width:300,
                height:300,
                marginTop:300,
                marginLeft:55,
                borderRadius:20,

            }}>
                <Text style={{color:"black",textAlign:'left',marginLeft:10,}}>Nombre:</Text>
                <TextInput></TextInput>
                <Text style={{color:"black",textAlign:'left',marginLeft:10,}}>Correo:</Text>
                <TextInput></TextInput>
                <Text style={{color:"black",textAlign:'left',marginLeft:10,}}>Password:</Text>
                <TextInput></TextInput>
                <TouchableOpacity style={{
                    
                    width:250,
                    height:50,
                    backgroundColor:"blue",
                    borderRadius:40,
                    marginLeft:25,
                    marginTop:30,
                }} onPress={cierra}>
                    <Text style={{color:"white",fontsize:25, textAlign:'center',marginTop:10,}}>ACEPTAR</Text>
                </TouchableOpacity>
            </View>
                
        </Modal>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  ImagenF:{
      width:25,
      height:25,
      marginLeft:15,
      marginTop:10,
  }
})

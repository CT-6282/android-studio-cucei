import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
//importacion de los elementos que intervienen


export default class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
        //declaracion de variables
    };
  }

  render() {
    //la programacion de los objetos,botones, inputs, etc.
    return (
      <View>
        <Image
        style={styles.Imagen1}
        source={require('./Imagenes/const.png')}
      />
      <View style={styles.login}>
        <Text style={styles.txthandyman}> Welcome to handyman</Text>
        <View style={styles.btnemail}>
        <Text>            Sign in with Email</Text>
         <Image
        style={styles.ImagenF}
        source={require('./Imagenes/gmail.png')}
        /> 
            </View>
        <View style={styles.btnfacebook}><Text>            Sign in Facebook</Text>
        <Image
        style={styles.ImagenF}
        source={require('./Imagenes/logFa.png')}
        /> 
        
        </View>
        <View style={styles.btnsign}><Text>Dont have account, SIGN UP</Text></View>
      </View>
      
      </View>
    );
  }
}
//los estilos
const styles = StyleSheet.create({
    login:{
        width:350,
        height:220,
        borderWidth:2,
        borderColor:"#FF5733",
        backgroundColor:"#FF5733",
        borderRadius:30,
        marginLeft:20,
        marginTop:-80,
    },
    txthandyman:{
        fontSize:25,
        marginLeft:50,
        margintop:40,

    },
    
    btnemail:{
        width:210,
        height:35,  
        borderWidth:5,
        borderColor:"white",
        backgroundColor:"white",
        borderRadius:40,
        marginLeft:70,
        marginTop:5,
    },
    btnsign:{
        width:210,
        height:35,  
        borderWidth:5,
        borderColor:"#FF5733",
        backgroundColor:"#FF5733",
        borderRadius:40,
        marginLeft:80,
        marginTop:30
    },
    btnfacebook:{
        width:210,
        height:35,
        borderWidth:2,
        borderColor:"#3386FF",
        backgroundColor:"#3386FF",
        borderRadius:40,
        marginLeft:70,
        marginTop:10,
        textShadowColor: "white"
    },
    Imagen1:{
        width:425,
        height:500 ,
    },
    
    ImagenF:{
        width:20,
        height:20,
        marginLeft:15,
        marginTop:-18,
    }
})
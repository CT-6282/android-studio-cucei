import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {NavigationContext} from "@react-navigation/native"
//importacion de los elementos que intervienen


export default class Inicio extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
        //declaracion de variables
    };
  }

  render() {
    //la programacion de los objetos,botones, inputs, etc.
    const navigation = this.context;
    const click1 = () =>{
      console.log("le diste click al boton email");
    }
    const ir_a_insc =() =>{
      navigation.navigate("inscripcion");

    }

    const click2 = () =>{
      console.log("le diste click al boton Facebook");
    }
    return (
      <View>
        <Image
        style={styles.Imagen1}
        source={require('./Imagenes/const.png')}
      />
      <View style={styles.login}>
        <Text style={styles.txthandyman}> Welcome to handyman</Text>
        <TouchableOpacity style={styles.bemail} onPress={click1}>
        <View style={styles.btnemail} >
        <Text style={styles.txtemail}>                 Sign in with Email</Text>
         <Image
        style={styles.ImagenF}
        source={require('./Imagenes/gmail.png')}
        /> 
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bface} onPress={click2}>
        <View style={styles.btnfacebook}><Text style={styles.txtface}>                  Sign in Facebook</Text>
        <Image
        style={styles.ImagenF}
        source={require('./Imagenes/logFa.png')}
        /> 
        
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={ir_a_insc}>
        <View style={styles.btnsign}><Text>Dont have account, SIGN UP</Text></View>
        </TouchableOpacity>
      </View>
      
      </View>
    );
  }
}
//los estilos
const styles = StyleSheet.create({
  bemail:{
    // borderWidth:2,
    width:220,
    height:40,
    marginLeft:80,
    marginTop:5,
  } , 
  bface:{
      width:220,
      height:40,
      marginLeft:80,
      marginTop:5,
    },
  txtemail:{
    color:"black",
  },
  txtface:{

      color:"white",
    },
  
  
  login:{
        width:350,
        height:200,
        borderWidth:2,
        borderColor:"#FF5733",
        backgroundColor:"#FF5733",
        borderRadius:30,
        marginLeft:30,
        marginTop:-50,
    },
    txthandyman:{
        fontSize:25,
        marginLeft:40,
        margintop:40,

    },
    // bmail:{
    //   borderWidth:2,
    //   width:250,
    //   heigt:50,
    //   marginTop:20,
    //   marginLeft:70,
    // },
    btnemail:{
        width:210,
        height:35,  
        borderWidth:5,
        borderColor:"white",
        backgroundColor:"white",
        borderRadius:40,
        // marginLeft:70,
        //  marginTop:5,
    },
    btnsign:{
        width:210,
        height:35,  
        borderWidth:5,
        borderColor:"#FF5733",
        backgroundColor:"#FF5733",
        borderRadius:40,
        marginLeft:80,
        marginTop:10
    },
    btnfacebook:{
        width:210,
        height:35,
        borderWidth:2,
        borderColor:"#3386FF",
        backgroundColor:"#3386FF",
        borderRadius:40,
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
        marginTop:-15,
    }
})
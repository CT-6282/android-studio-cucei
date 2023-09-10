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
        <Text style={styles.txthandyman}> welcome to handyman</Text>
        <View style={styles.btnemail}></View>
        <View style={styles.btnfacebook}></View>
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
        marginLeft:30,
        marginTop:-80,
    },
    txthandyman:{
        fontSize:25,
        marginLeft:50,
        margintop:40,

    },
    
    btnemail:{
        width:210,
        height:50,  
        borderWidth:2,
        borderColor:"#3386FF",
        backgroundColor:"#3386FF",
        borderRadius:40,
        marginLeft:50,
        marginTop:5
    },

    btnfacebook:{
        width:210,
        height:50,
        borderWidth:2,
        borderColor:"white",
        backgroundColor:"white",
        borderRadius:40,
        marginLeft:50,
        marginTop:10
    },
    Imagen1:{
        width:425,
        height:500 ,
    },
})
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MenuDrawer from 'react-native-side-drawer';


export default class Tab1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        open: false
    };
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  drawerContent = () => {
    return (
      <View>
        <Text style={{color:"white", textAlign:"center", fontSize:15,}}>Bienvenido, {this.propsparams.nombre}</Text>
      <TouchableOpacity onPress={this.toggleOpen} style={styles.animatedBox}>
        <Image
        source={require('../assets/Logo.png')}
        style={{width:30, height:30}}
        ></Image>
        <Text style={{color:"white", textAlign:"center", fontSize:15,}}>Cerrar Drawer</Text>
      </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
        <View style={styles.container}>
        <MenuDrawer
          open={this.state.open}
          position={'left'}
          drawerContent={this.drawerContent()}
          drawerPercentage={45}
          animationTime={250}
          overlay={true}
          opacity={0.4}
        >
          <TouchableOpacity onPress={this.toggleOpen} style={{
            borderWidth:2,
            borderRadius:10,
            borderColor:"#F01292",
            width:80,
            height:50,
            backgroundColor:"#F01292",}}>
            <Text style={{color:"white", textAlign:"center", fontSize:15,}}>Abrir Drawer</Text>
          </TouchableOpacity>
        </MenuDrawer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 0
    },
    animatedBox: {
      //flex: 1,
      backgroundColor: "#E0D309",
      height: 800
    },
    body: {
      //flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      marginLeft: 350
    }
  })
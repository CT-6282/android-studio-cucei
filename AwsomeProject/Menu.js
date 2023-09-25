import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MenuDrawer from 'react-native-side-drawer';


export default class Menu extends Component {
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
      <TouchableOpacity onPress={this.toggleOpen} style={styles.animatedBox}>
        <Text style={{color:"white", marginTop:30, fontSize:20}}> Bienvenido, {this.props.route.params.nombre}!</Text>
        <Text style={{color:"white", textAlign:"center", marginTop:610, fontSize:15}}>Close</Text>
      </TouchableOpacity>
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
      marginTop: 30,
      zIndex: 0
    },
    animatedBox: {
      flex: 1,
      backgroundColor: "#E0D309",
      padding: 10
    },
    body: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F04812'
    }
  })
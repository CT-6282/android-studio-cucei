import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TAB1 from "./Tab1";
import TAB2 from "./Tab2";
import TAB4 from "./Tab4";
import Icon from 'react-native-vector-icons/Ionicons';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }

  render() {
    const Tab = createBottomTabNavigator();

    return (
      <Tab.Navigator
      screenOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen name="Listas"
        component={TAB1}
        //initialParams={{nombre:this.props.route.params.nombre}}
        options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="list-circle" color={"#077CAB"} size={30} />
        ),
      }}/>
      <Tab.Screen
        name="Videos"
        component={TAB2}
        //initialParams={{nombre:this.props.route.params.nombre}}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="videocam" color={"#077CAB"} size={30} />
        ),
      }}/>
      <Tab.Screen
        name="Mapa"
        component={TAB4}
        //initialParams={{nombre:this.props.route.params.nombre}}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="map" color={"#077CAB"} size={30} />
        ),
      }}/>
    </Tab.Navigator>
    );
  }
}
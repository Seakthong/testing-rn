import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {HomeStackNavigator} from '../stack_navigation/HomeStackNavigator'
import {ContactStackNavigator} from '../stack_navigation/ContactStackNavigator';


const Drawer = createDrawerNavigator();

const HomeDrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStackNavigator} />
      <Drawer.Screen name="Contact" component={ContactStackNavigator}/>
    </Drawer.Navigator>
  );
};

export {HomeDrawerNavigator}

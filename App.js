// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeDrawerNavigator} from './navigation/drawer_navigation/HomeDrawerNavigator'

function App() {
  return <NavigationContainer>
    <HomeDrawerNavigator/>
  </NavigationContainer>;
}

export default App;

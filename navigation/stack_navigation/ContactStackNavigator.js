
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {DetailsScreen} from '../../app/screens/DetailsScreen'
import {CreatePostScreen} from '../../app/screens/CreatePostScreen'
import {ContactScreen} from '../../app/screens/ContactScreen';

const Stack = createStackNavigator();

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Contact">
      <Stack.Screen
        name="Contact"
        component={ContactScreen}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="CreatePost" component={CreatePostScreen} />
    </Stack.Navigator>
  );
};

export {ContactStackNavigator};
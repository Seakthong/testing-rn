
import * as React from 'react';
import {Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from '../../app/screens/HomeScreen'
import {DetailsScreen} from '../../app/screens/DetailsScreen'
import {CreatePostScreen} from '../../app/screens/CreatePostScreen'

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // headerTitle: (props) => <LogoTitle {...props} />,
          headerLeft: () => (
            <Button onPress={() =>  {}} title="Info" color="#fff" />
          ),
        }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="CreatePost" component={CreatePostScreen} />
    </Stack.Navigator>
  );
};

export  {HomeStackNavigator};
import * as React from 'react';
import {Button, View, Text} from 'react-native';

function HomeScreen({navigation, route}) {
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Create Home post"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Button
        title="Go to Home Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
      <Text style={{margin: 10}}>Post: {route.params?.post}</Text>
    </View>
  );
}

export {HomeScreen};

import React from 'react';
import { FlatList, SafeAreaView ,StyleSheet, StatusBar} from 'react-native';
import Constants from 'expo-constants';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';

const messages=[
    {
        id: 1,
        title: 'T1s',
        description: 'Dl',
        image: require('../assets/chair.jpg')
        },  
          {
            id: 2,
            title: 'T12',
            description: 'D2',
            image: require('../assets/chair.jpg')
            }
]
function MessagesScreen(props) {
    return (
      <Screen >
      <FlatList data={messages}
      keyExtractor={message => message.id.toString()}
      renderItem={({ item }) =>
      <ListItem
      title={item.title}
      subTitle={item.description}
      image={item.image} /> } />
      </Screen>
    );
}
const styles = StyleSheet.create({
 
})

export default MessagesScreen;
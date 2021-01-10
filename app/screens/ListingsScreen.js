import React from 'react';
import { FlatList ,StyleSheet, Text } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import color from '../config/color';

const listings = [
    {
    id: 1,
    title: 'Red jacket for sale',
    price: 100,
    image: require('../assets/chair.jpg')
    },
    {
        id: 2,
        title: 'Red jacket for sale',
        price: 150,
        image: require('../assets/gal.jpeg')
        },
        
    ];

function ListingsScreen(props) {
    return (
       <Screen style={styles.screen}>
             
        <FlatList data={listings}
        keyExtractor={listing => listing.id.toString()} renderItem={({ item }) =><Card title={item.title+"s"} subTitle={"$"+item.price} image={item.image}/>} 
        />

       </Screen>
    );
}

const styles = StyleSheet.create({
    screen:{
        padding:20,
        backgroundColor : color.light
    }
})
export default ListingsScreen;
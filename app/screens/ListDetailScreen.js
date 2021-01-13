import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import color from '../config/color';
import AppText from '../components/AppText';
import ListItem from '../components/lists/ListItem';

function ListDetailScreen({route}) {
  const listing = route.params;
  return (
    <View>
      <Image style={styles.image} source={listing.image}></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItem
          image={require('../assets/chair.jpg')}
          title="gal hadida"
          subtitle="1 list"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },

  price: {
    color: color.primary,
    fontWeight: 'bold',
    fontSize: 22,
    marginVertical: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  detailsContainer: {
    padding: 10,
  },
  userContainer: {
    marginVertical: 30,
  },
});
export default ListDetailScreen;

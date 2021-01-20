import React, { useContext } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Icon from "../components/Icon";
import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import Screen from "../components/Screen";
import color from "../config/color";
import useAuth from "../auth/useAuth";
import { auth, logout } from "../components/Firebase/firebase";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: color.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: color.secondary,
    },
    targetScreen: "Messages",
  },
];
function AccountScreen({ navigation }) {
  const { email, displayName, phoneNumber, photoURL } = auth.currentUser;

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={email}
          subTitle={email}
          image={require("../assets/chair.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItems) => menuItems.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="delete" backgroundColor="#ffe66d" />}
        onPress={logout}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: color.light,
  },
  container: {
    marginVertical: 20,
  },
});
export default AccountScreen;

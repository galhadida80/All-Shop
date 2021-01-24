import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListDetailScreen from "../screens/ListDetailScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="Listings"
      component={ListingsScreen}
      initialParams={{ listprivate: false }}
    />
    <Stack.Screen
      name="ListDetailScreen"
      component={ListDetailScreen}
      //options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default FeedNavigator;

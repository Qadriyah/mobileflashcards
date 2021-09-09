import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../utils/colors";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import NewDeckScreen from "../screens/NewDeckScreen/NewDeckScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const iconSize = 32;

const BottomTabs = () => {
  return (
    <Tab.Navigator tabBarOptions={{ activeTintColor: Colors.GREEN }}>
      <Tab.Screen
        name="Decks"
        component={HomeScreen}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route);
          return {
            tabBarIcon: ({ color }) => {
              return (
                <MaterialCommunityIcons
                  name="cards"
                  size={iconSize}
                  color={color}
                />
              );
            },
            tabBarVisible:
              routeName === "Decks" || routeName === undefined ? true : false,
            headerTitleStyle: { color: Colors.WHITE, fontSize: 18 },
            headerBackground: () => {
              return (
                <View
                  style={{ backgroundColor: Colors.GREEN, height: "100%" }}
                />
              );
            },
          };
        }}
      />
      <Tab.Screen
        name="Add"
        component={NewDeckScreen}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route);
          return {
            title: "Add Deck",
            tabBarIcon: ({ color }) => {
              return (
                <MaterialIcons name="add-box" size={iconSize} color={color} />
              );
            },
            tabBarVisible:
              routeName === "Add" || routeName === undefined ? true : false,
            headerTitleStyle: { color: Colors.WHITE, fontSize: 18 },
            headerBackground: () => {
              return (
                <View
                  style={{ backgroundColor: Colors.GREEN, height: "100%" }}
                />
              );
            },
          };
        }}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BottomTabs}
        options={() => ({ headerShown: false })}
      />
    </Stack.Navigator>
  );
};
export default Navigation;

import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createNativeStackNavigator,
  isSelectionModeEnabled,
  disableSelectionMode,
} from "@react-navigation/native-stack";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";

import Colors from "../utils/colors";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import NewDeckScreen from "../screens/NewDeckScreen/NewDeckScreen";
import DeckScreen from "../screens/DeckScreen/DeckScreen";
import NewCardScreen from "../screens/NewCardScreen/NewCardScreen";
import QuizScreen from "../screens/QuizScreen/QuizScreen";
import { useFocusEffect } from "@react-navigation/core";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const iconSize = 32;

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          tabBarIcon: ({ color }) => {
            if (route.name === "Decks") {
              return (
                <MaterialCommunityIcons
                  name="cards"
                  size={iconSize}
                  color={color}
                />
              );
            }
            if (route.name === "Add") {
              return (
                <MaterialIcons name="add-box" size={iconSize} color={color} />
              );
            }
          },
          tabBarActiveTintColor: Colors.GREEN,
          title: route.name === "Add" ? "New Deck" : route.name,
          headerTitleStyle: { fontSize: 18 },
          headerTintColor: Colors.WHITE,
          headerBackground: () => {
            return (
              <View style={{ backgroundColor: Colors.GREEN, height: "100%" }} />
            );
          },
        };
      }}
    >
      <Tab.Screen name="Decks" component={HomeScreen} />
      <Tab.Screen name="Add" component={NewDeckScreen} />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route, navigation }) => ({
        title: route.name === "Card" ? "New Card" : route.name,
        headerTintColor: Colors.WHITE,
        headerStyle: { backgroundColor: Colors.GREEN },
        headerBackTitleVisible: false,
        headerTitleStyle: { fontSize: 18 },
        headerLeft: () => (
          <FontAwesome
            name="angle-left"
            size={30}
            color={Colors.WHITE}
            onPress={() => navigation.goBack(null)}
            style={{
              paddingRight: 20,
              paddingLeft: 10,
              marginLeft: -10,
            }}
          />
        ),
      })}
    >
      <Stack.Screen
        name="Home"
        component={BottomTabs}
        options={() => ({ headerShown: false })}
      />
      <Stack.Screen name="Card" component={NewCardScreen} />
      <Stack.Screen name="Quiz" component={QuizScreen} />
      <Stack.Screen name="Deck" component={DeckScreen} />
    </Stack.Navigator>
  );
};
export default Navigation;

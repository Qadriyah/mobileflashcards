import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../utils/colors";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import NewDeckScreen from "../screens/NewDeckScreen/NewDeckScreen";
import DeckScreen from "../screens/DeckScreen/DeckScreen";
import NewCardScreen from "../screens/NewCardScreen/NewCardScreen";
import QuizScreen from "../screens/QuizScreen/QuizScreen";

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
          headerTitleStyle: { color: Colors.WHITE, fontSize: 18 },
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
      screenOptions={({ route }) => ({
        title: route.name === "Card" ? "New Card" : route.name,
        headerTintColor: Colors.WHITE,
        headerStyle: { backgroundColor: Colors.GREEN },
        headerBackTitleVisible: false,
        headerTitleStyle: { fontSize: 18 },
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

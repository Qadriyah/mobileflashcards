import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";
import Colors from "./src/utils/colors";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.GREEN} />
      <Navigation />
    </NavigationContainer>
  );
}

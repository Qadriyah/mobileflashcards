import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import Navigation from "./src/navigation/Navigation";
import Colors from "./src/utils/colors";
import configureStore from "./src/redux/store/index";
import {
  createNotification,
  requestPermissionsAsync,
} from "./src/utils/notifications";

const store = configureStore({});

export default function App() {
  React.useEffect(() => {
    (async () => {
      await requestPermissionsAsync();
      await createNotification();
    })();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor={Colors.GREEN} />
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}

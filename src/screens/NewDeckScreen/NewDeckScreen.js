import React from "react";
import { View, Text } from "react-native";
import { useDispatch } from "react-redux";

import styles from "./styles";
import { saveDeckTitle } from "../../redux/actions/deck";

const NewDeckScreen = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    // dispatch(saveDeckTitle("Diamond"));
  }, [dispatch]);

  return (
    <View>
      <Text>New deck</Text>
    </View>
  );
};

export default NewDeckScreen;

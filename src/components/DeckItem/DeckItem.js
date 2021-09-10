import React from "react";
import { Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

const DeckItem = ({ title, cards, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.counter}>{`${cards} Cards`}</Text>
    </TouchableOpacity>
  );
};

DeckItem.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default DeckItem;
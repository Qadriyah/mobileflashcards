import React from "react";
import { Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

const DeckItem = ({ title, id, cards, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress({ id })}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.counter}>
        {`${cards} Card${cards === 1 ? "" : "s"}`}
      </Text>
    </TouchableOpacity>
  );
};

DeckItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  cards: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default DeckItem;

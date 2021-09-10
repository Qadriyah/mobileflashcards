import React from "react";
import { Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

const Button = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;

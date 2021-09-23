import React from "react";
import { Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

const Button = ({ label, onPress, style }) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => onPress({ label })}
    >
      <Text style={[styles.label, style ? { color: style.color } : null]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.shape({ backgroundColor: PropTypes.string }),
};

export default Button;

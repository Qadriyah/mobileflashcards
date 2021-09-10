import React from "react";
import { Modal, ActivityIndicator, View } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

const Loader = ({ loading, color }) => {
  return (
    <Modal transparent={true} visible={loading} onRequestClose={() => {}}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={color} />
      </View>
    </Modal>
  );
};

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

export default Loader;

import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('screen').height - 200,
  },
  label: {
    fontSize: 20,
  },
});

export default styles;

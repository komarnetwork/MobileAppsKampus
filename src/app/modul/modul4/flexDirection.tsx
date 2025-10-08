import { StyleSheet, View } from 'react-native';

export default function FlexDirection() {
  return (
    <View style={styles.container}>
      <View style={styles.boxRed} />
      <View style={styles.boxBlue} />
      <View style={styles.boxGreen} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  boxRed: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    borderWidth: 2,
    borderColor: 'black',
    margin: 10,
    padding: 10,
  },
  boxGreen: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    borderWidth: 2,
    borderColor: 'black',
    margin: 10,
    padding: 10,
  },
  boxBlue: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    borderWidth: 2,
    borderColor: 'black',
    margin: 10,
    padding: 10,
  },
});

import React from 'react';
import { StyleSheet, View } from 'react-native';
import WeatherMan from './weatherapp'
export default function App() {
  return (
    <View style={styles.container}>
      <WeatherMan />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

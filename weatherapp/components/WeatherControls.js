import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

const WeatherControls = (props) => (
    <View style={styles.container}>
        <View style={styles.textinput}>
            <TextInput
            onChangeText={props.onChangeText}
            value={props.value}
            placeholder="Enter city name"
            />
        </View>
        <View>
            <Button
                title="Search"
                onPress={props.search}
            />
        </View>
    </View>
)

export default WeatherControls;

const styles = StyleSheet.create({
    textinput: {
      border: '1px solid darkgray',
    },
    container: {
      display: 'flex',
      flexFlow: 'row',
      backgroundColor: '#fff',
    },
  });
  
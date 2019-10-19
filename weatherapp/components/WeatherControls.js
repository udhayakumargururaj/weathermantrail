import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import Suggestions from './Suggestions';

const WeatherControls = (props) => (
    <View style={styles.textInputAlign}>
        <TextInput
            style={styles.textinput}
            onChangeText={props.onChangeText}
            value={props.value}
            placeholder="Enter city name"
        />
        <Suggestions
            suggestions={props.suggestions}
            onPressHandler={props.search}
        />
    </View>
)

export default WeatherControls;

const styles = StyleSheet.create({
    textinput: {
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
    }
  });
  
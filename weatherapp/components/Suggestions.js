import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Suggestions = ({ suggestions, onPressHandler }) => {
    return(
        <View style={styles.container}>
            {
               suggestions.map((suggest) => 
                <Text 
                    style={styles.labels} 
                    onPress={() => onPressHandler(suggest.name)}
                >{suggest.name}
                </Text>)
            }
        </View>
    )
}

export default Suggestions;

const styles = StyleSheet.create({
    labels: { 
        height: 20, 
        borderColor: 'gray', 
        borderWidth: 1 
    },
    container: {
      display: 'flex',
      flexFlow: 'row',
      backgroundColor: '#fff',
      border: '1px solid black'
    },
  });
  

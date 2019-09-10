import React from 'react';
import { Text, View } from 'react-native';

const WeatherResults = (props) => (
    <View>
        <Text>
         { props.cityname && `${props.cityname}, ${props.country}` }
         </Text>
         <Text>
         { props.weatherDesc && props.weatherDesc}
         </Text>
         <Text>
         { props.message && `Message: ${props.message}`}
       </Text>
      </View>
)

export default WeatherResults;

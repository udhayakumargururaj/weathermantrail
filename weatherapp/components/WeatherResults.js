import React from 'react';
import { Text, View } from 'react-native';

const WeatherResults = (props) => (
    <View>
        <Text style={{fontSize:30, paddingTop: '25%'}}>
         { props.temp && props.temp }
         </Text>
        <Text style={{fontSize:16}}>
         { props.cityname && `${props.cityname}, ${props.country}` }
         </Text>
         <Text>
         { props.weatherDesc && props.weatherDesc}
         </Text>
      </View>
)

export default WeatherResults;

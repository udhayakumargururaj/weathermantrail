import React from 'react';
import { View, ToastAndroid, StyleSheet } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import WeathermanAPI from './api/WeatherManAPI';
import WeatherResults from './components/WeatherResults';
import WeatherControls from './components/WeatherControls';
import CityList from './constants/citylist.json';
import GPSLocation from './components/Location';
/**
 * This is main application like container has design layout 
 * and API calling making controls
 */
class Weatherman extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      cityname: '',
      weatherDesc: '',
      country:'',
      message: '',
      suggestions: [],
      temp: ''
    }
    this.onChangeText = this.onChangeText.bind(this);
    this.search = this.search.bind(this);
    this.componentDidMount=this.componentDidMount.bind(this);
  }
  /**
   * It update states whenever user provides the input and 
   * update the state
   * @param {*} e 
   */
  onChangeText(e){
    this.setState({ value: e });
    if(e && e.length >= 2) {
      const cityDetails = CityList.filter(city => 
        city.name.toLowerCase().includes(e.toLowerCase()));
      this.setState({ suggestions: cityDetails });
    } else {
      this.setState({ suggestions : [] });
    }
    this.setState({ cityname: '', weatherDesc: '', country:'', message: ''});
  }
  /**
   * It make API call to openweatherman api and 
   * returns the results
   */
  async search(value) {
    this.setState({value});
    this.setState({ suggestions : []});
    let response;
    try {
      response = await WeathermanAPI.getWeather(value);
      const { name, description, country, temp } = response;
      this.setState({ 
        cityname: name,
        weatherDesc: description,
        country: country,
        message: '',
        temp: this.getCelciusFromKelvin(temp)
      });
    } catch(e) {
      this.setState({ cityname: '', weatherDesc: '', country:'', message: `${this.state.value} not found`});
      ToastAndroid.show(`${this.state.value} not found`, ToastAndroid.SHORT);
    }
  
  }
  getCelciusFromKelvin(kelvin) {
    return `${kelvin-273.15}°C`;
  }

  getFahrenheitFromKelvin(kelvin) {
    return `${(kelvin-273.15)*9/5+32}°F`;
  }

  async componentDidMount(){
    const position = await GPSLocation.getLocationAsync();
    const { coords: { latitude, longitude} } = position;
    const results = await WeathermanAPI.getWeatherWithCoord(latitude, longitude);
    const { name, description, country, temp } = results;
      this.setState({ 
        cityname: name,
        weatherDesc: description,
        country: country,
        message: '',
        temp: this.getCelciusFromKelvin(temp)
      });
  }
  /**
   * Render method actually renders the DOM
   */
  render() {
    const { 
        value,
        cityname,
        weatherDesc,
        country,
        message,
        suggestions,
        temp 
      } = this.state;
    return (
      <View style={styles.container}>
      <WeatherControls
        value={value}
        onChangeText={this.onChangeText}
        search={this.search}
        suggestions={suggestions}
      />
      <WeatherResults
        cityname={cityname}
        weatherDesc={weatherDesc}
        country={country}
        message={message}
        temp={temp}
      />
      </View>
    );
  }
}

export default Weatherman;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    top: '10%',
    justifyContent: "flex-start",
    flexFlow: 'row',
    backgroundColor: '#fff',
  },
});

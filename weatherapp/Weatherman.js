import React from 'react';
import { View, ToastAndroid } from 'react-native';
import WeathermanAPI from './api/WeatherManAPI';
import WeatherResults from './components/WeatherResults';
import WeatherControls from './components/WeatherControls';

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
      message: ''
    }
    this.onChangeText = this.onChangeText.bind(this);
    this.search = this.search.bind(this);
  }
  /**
   * It update states whenever user provides the input and 
   * update the state
   * @param {*} e 
   */
  onChangeText(e){
    this.setState({ value: e });
    this.setState({ cityname: '', weatherDesc: '', country:'', message: ''});
  }
  /**
   * It make API call to openweatherman api and 
   * returns the results
   */
  async search() {
    let response;
    try {
      response = await WeathermanAPI.getWeather(this.state.value);
      const { data: { name, weather: [first], sys: { country }}} = response;
      this.setState({ cityname: name, weatherDesc: first.description, country: country, message: ''});
    } catch(e) {
      this.setState({ cityname: '', weatherDesc: '', country:'', message: `${this.state.value} not found`});
      ToastAndroid.show(`${this.state.value} not found`, ToastAndroid.SHORT);
    }
  
  }
  /**
   * Render method actually renders the DOM
   */
  render() {
    const { value, cityname, weatherDesc, country, message } = this.state;
    return (
      <View>
      <WeatherControls
        value={value}
        onChangeText={this.onChangeText}
        search={this.search} 
      />
      <WeatherResults
        cityname={cityname}
        weatherDesc={weatherDesc}
        country={country}
        message={message}
      />
      </View>
    );
  }
}

export default Weatherman;

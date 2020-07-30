import React from 'react';
import {Alert} from "react-native";
import Loader from './Loader'
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

const WEATHER_API_KEY = '5da4af11f12e1928506a8378ef49884b';
const API_KEY = process.env.REACT_APP_API_KEY ;//왜 API키가 안숨겨질까?
console.log(API_KEY);
console.log('why/');
export default class extends React.Component {
    state = {
      isLoading : true
    };
  getLocation = async() => {
      try {
        await Location.requestPermissionsAsync();//먼저 위치정보 permission 물어보고
        const {coords:{latitude,longitude}} = await Location.getCurrentPositionAsync();//펄미션 받으면 위치 정보 가져오기
        this.setState({isLoading : false})//가져오면 위치정보 셋팅
        this.getWeather(latitude,longitude);
      } catch (error) {
        Alert.alert("Can't find you.", "So sad");
    }
  }
  getWeather = async(lat,lon) => {
    const { data: {main:{temp},weather}
    } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    this.setState({
      isLoading:false, 
      temp: temp,
      condition:weather[0].main
    });
   
  }
  
  componentDidMount(){
    this.getLocation();//컴포넌트 삽입 후 이 함수 실행
  }
  render() {
    const {isLoading, temp, condition} = this.state;//state 객체의 isLoading 값을 가져올 수 있음

    return isLoading?<Loader/>:<Weather temp={Math.round(temp)} condition={condition}/>;
  }
}



import React from 'react';
import './App.css';
import Rain from "./Rain";
import API from "./API";
import MainCard from "./MainCard";
import HourCard from "./HourCard";
import DayCard from "./DayCard";

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      city: "Porto Alegre"
    };
  }
  
  groupBy = key => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});
  
  
  componentDidMount() {
    console.log("fetching data");
    this.getCityWeatherDays(40, this.state.city).then((data) => {
      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      let dates = data.list;
      var groupByDay = this.groupBy('dateIndex');
      dates = dates.map((item) => {
        let date = {
          dateName: days[new Date(item.dt_txt).getDay()],
          dateIndex: new Date(item.dt_txt).getDay(),
          weather: item.weather[0].main,
          min: item.main.temp_min,
          max: item.main.temp_max
        }
        return date;
      });
      
      
      dates = groupByDay(dates);
      console.log(dates);
      
      this.setState({dates});
    })
  }
  
  getCityWeatherDays(lines, cityName) {
    return new Promise((resolve, reject) => {
      console.log(API.appid);
      fetch(API.baseUrl+"forecast?q="+cityName+"&units=metric&cnt="+lines+"&appid="+API.appid)
      .then(response => response.json())
      .then(data => resolve(data), () => { reject() });
    })
  }
  
  render() {
    
    if(this.state.dates) {
      var daysElements = [];
      
      for(var day in this.state.dates) {
        daysElements.push(
          <DayCard day={this.state.dates[day][0].dateName} maxTemperature={this.state.dates[day][0].max.toFixed(0)} minTemperature={this.state.dates[day][0].min.toFixed(0)} weather={this.state.dates[day][0].weather}></DayCard>
          )
        }
        
      }
      
      return (
        <div style={{background: "rgba(0,0,0,0.3)"}} className="App">
        <div class="weather-app">
        <MainCard city={this.state.city}></MainCard>
        <div class="main-card__hourly">
        <HourCard time="Now" temperature="16°" weather="rain"></HourCard>
        <HourCard time="2pm" temperature="16°" weather="sun/cloud"></HourCard>
        <HourCard time="3pm" temperature="16°" weather="rain"></HourCard>
        <HourCard time="4pm" temperature="16°" weather="sun/cloud"></HourCard>
        <HourCard time="5pm" temperature="13°" weather="cloud"></HourCard>
        <HourCard time="6pm" temperature="14°" weather="cloud"></HourCard>
        <HourCard time="7pm" temperature="16°" weather="sun"></HourCard>
        <HourCard time="8pm" temperature="16°" weather="rain"></HourCard>
        <HourCard time="9pm" temperature="16°" weather="sun/cloud"></HourCard>
        <HourCard time="10pm" temperature="13°" weather="cloud"></HourCard>
        <HourCard time="11pm" temperature="14°" weather="cloud"></HourCard>
        <HourCard time="12pm" temperature="16°" weather="sun"></HourCard>
        </div>
        <div class="main-card__daily">
        {daysElements}
        </div>
        </div>
        </div>
        );
      }
    }
    
    export default App;
    
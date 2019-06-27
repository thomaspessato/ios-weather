import React from 'react';
import './App.css';
import Rain from "./Rain";
import MainCard from "./MainCard";
import HourCard from "./HourCard";
import DayCard from "./DayCard";

class App extends React.Component {
  render() {
    return (
      <div style={{background: "rgba(0,0,0,0.3)"}} className="App">
        <div class="weather-app">
          <MainCard></MainCard>
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
              <DayCard day="Saturday" maxTemperature="13°" minTemperature="8°" weather="cloud"></DayCard>
              <DayCard day="Sunday" maxTemperature="13°" minTemperature="8°" weather="sun"></DayCard>
              <DayCard day="Monday" maxTemperature="13°" minTemperature="8°" weather="sun"></DayCard>
              <DayCard day="Tuesday" maxTemperature="13°" minTemperature="8°" weather="sun/cloud"></DayCard>
              <DayCard day="Wednesday" maxTemperature="13°" minTemperature="8°" weather="cloud"></DayCard>
              <DayCard day="Thursday" maxTemperature="13°" minTemperature="8°" weather="rain"></DayCard>
              <DayCard day="Friday" maxTemperature="13°" minTemperature="8°" weather="rain"></DayCard>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

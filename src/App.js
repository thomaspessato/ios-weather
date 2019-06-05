import React from 'react';
import './App.css';
import Rain from "./Rain";
import MainCard from "./MainCard";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Rain background={"#111"} lineWidth={0.8} rainAmount={100}></Rain>
        <div style={{background: "rgba(0,0,0,0.3)"}} class="weather-app">
          <MainCard city={"Sydney"}></MainCard>
        </div>
      </div>
    );
  }
}

export default App;

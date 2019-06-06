import React from 'react';
import './App.css';
import Rain from "./Rain";
import MainCard from "./MainCard";

class App extends React.Component {
  render() {
    return (
      <div style={{background: "rgba(0,0,0,0.3)"}} className="App">
        <div class="weather-app">
          <MainCard></MainCard>
        </div>
      </div>
    );
  }
}

export default App;

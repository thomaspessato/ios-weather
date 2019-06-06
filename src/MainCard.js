import React from 'react';
import "./MainCard.css";
import API from "./API";
import Rain from "./Rain";
import Clear from "./Clear";

class MainCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        console.log("fetching data");
        // this.getCityWeather('Porto Alegre').then((data) => {
            // this.setState({data});
        // })
    }

    getCityWeather(cityName) {
        return new Promise((resolve, reject) => {
            fetch(API.baseUrl+'weather?q='+cityName+'&appid='+API.appid)
            .then(response => response.json())
            .then(data => resolve(data), () => { reject() });
        })
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    kelvinToCelcius(temp) {
        return (temp - 273.15).toFixed(1);
    }

    handleSubmit(event) {
        this.getCityWeather(this.state.value).then((data) => {
            this.setState({data});
        }, () => { console.log('City not found') });

        event.preventDefault();
    }

    render () {

        let weatherType = null;
        var weatherInfo = null;
        
        if(this.state.data) {
            weatherInfo = 
            <div>
                <h2 class="main-card__city">{this.state.data.name}</h2>
                <span class="main-card__status">{this.state.data.weather[0].main}</span>
                <span class="main-card__temperature">{this.kelvinToCelcius(this.state.data.main.temp)}</span>
            </div>
            console.log(this.state.data.weather[0].main.toUpperCase());
            switch (this.state.data.weather[0].main.toUpperCase()) {
                case "RAIN":
                    weatherType = <Rain background={"#111"} lineWidth={0.8} rainAmount={100}></Rain>;
                    break;
                case "CLEAR":
                    console.log("Placing CLEAR");
                    weatherType = <Clear background={"rgba(41, 102, 154, 0.3)"}></Clear>;
                default:
                    weatherType = "";
                    break;
            }
        }

       


        return (
            <div class="main-card">
                {weatherType}                
                <div class="main-card__content">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                        <input type="text" placeholder="City name" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    {weatherInfo}
                </div>
            </div>
        );
    }
}

export default MainCard;
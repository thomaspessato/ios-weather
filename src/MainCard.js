import React from 'react';
import "./MainCard.css";
import API from "./API";
import Rain from "./Rain";
import Clear from "./Clear";
import HourCard from "./HourCard";

class MainCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 'New York'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        console.log("fetching data");
        this.getCityWeather(this.state.value).then((data) => {
            this.setState({data});
        })

        this.getCityWeatherDays(7, this.state.value).then((data) => {
            console.log(data);
        })
    }

    getCityWeather(cityName) {
        return new Promise((resolve, reject) => {
            fetch(API.baseUrl+'weather?q='+cityName+'&appid='+API.appid)
            .then(response => response.json())
            .then(data => resolve(data), () => { reject() });
        })
    }

    getCityWeatherDays(days, cityName) {
        return new Promise((resolve, reject) => {
            fetch(API.baseUrl+"forecast?q="+cityName+"&units=metric&cnt="+days+"&appid="+API.appid)
            .then(response => response.json())
            .then(data => resolve(data), () => { reject() });
        })
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    kelvinToCelcius(temp) {
        return (temp - 273.15).toFixed(0);
    }

    handleSubmit(event) {
        this.getCityWeather(this.state.value).then((data) => {
            this.setState({data});
        }, () => { console.log('City not found') });

        this.getCityWeatherDays(7, this.state.value).then((data) => {
            console.log(data);
        })

        event.preventDefault();
    }

    render () {

        let weatherType = null;
        var weatherInfo = null;
        
        if(this.state.data) {
            weatherInfo = 
            <div class="main-card">
                <h2 class="main-card__city">{this.state.data.name}</h2>
                <span class="main-card__status">{this.state.data.weather[0].main}</span>
                <span class="main-card__temperature">{this.kelvinToCelcius(this.state.data.main.temp)}°</span>
            </div>
        
            switch (this.state.data.weather[0].main.toUpperCase()) {
                case "RAIN":
                    weatherType = <Rain lineWidth={0.8} rainAmount={100}></Rain>;
                    break;
                case "CLEAR":
                    weatherType = <Rain lineWidth={1} rainAmount={200}></Rain>;
                    break;
                default:
                    weatherType = <Rain lineWidth={1} rainAmount={200}></Rain>;
                    break;
            }
        }

        return (
            <div class="main-card">
                {weatherType}                
                <div class="main-card__content">
                    {/* <form class="main-card__city-form" onSubmit={this.handleSubmit}>
                        <label>
                        <input class="main-card__city-query" type="text" placeholder="City name" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input class="main-card__search" type="submit" value="Search" />
                    </form> */}
                    {weatherInfo}
                </div>
                <div class="main-card__today-info">
                    <div>
                        <span>Thursday</span>
                        <span>TODAY</span>
                    </div>
                    <div>
                        <span>10</span>
                        <span>2</span>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default MainCard;
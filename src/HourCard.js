import React from 'react';
import "./HourCard.css";
import API from "./API";
import Rain from "./Rain";
import Clear from "./Clear";

class HourCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let weather = "";
        switch(this.props.weather) {
            case "cloud": 
                weather = <i class="fas fa-cloud"></i>;
                break;
            case "sun":
                weather = <i class="fas fa-sun"></i>
                break;
            case "rain":
                weather = <i class="fas fa-cloud-rain"></i>
                break;
            case "sun/cloud":
                weather = <i class="fas fa-cloud-sun"></i>
                break;
            default:
                weather = <i class="fas fa-cloud"></i>; 
        }


        return (
            <div class="hour-card">
                <span class="hour-card__time">{this.props.time}</span>
                <div class="hour-card__weather-container">
                    <span class="hour-card__probability">30%</span>
                    {weather}
                </div>
                <span class="hour-card__temperature">{this.props.temperature}</span>
            </div>
        )
    }

}

export default HourCard;
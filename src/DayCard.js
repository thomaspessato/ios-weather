import React from 'react';
import "./DayCard.css";
import API from "./API";
import Rain from "./Rain";
import Clear from "./Clear";

class DayCard extends React.Component {
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
            <div class="day-card">
                <span class="day-card__day">{this.props.day}</span>
                {weather}
                <div>
                    <span class="day-card__max-temp">{this.props.maxTemperature}</span>
                    <span class="day-card__min-temp">{this.props.minTemperature}</span>    
                </div>
            </div>
        )
    }

}

export default DayCard;
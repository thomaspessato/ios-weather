import React from 'react';
import "./MainCard.css";

class MainCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    render () {
        return (
            <div class="main-card">
                <h2 class="main-card__city">
                    {this.props.city}
                </h2>
                <span class="main-card__status">Heavy Rain</span>
                <span class="main-card__temperature">11</span>
            </div>
        );
    }
}

export default MainCard;
import React from 'react';
import './Clear.css';


class Clear extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div style={{background: this.props.background}}class="weather-clear"></div>
        )
    }
}

export default Clear;
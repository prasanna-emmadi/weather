import React from 'react';
import Weather from './weather';

export default class Position extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 0.0,
            lng: 0.0,
            isLoaded: false
        }
    }

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.setState({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                    isLoaded: true
                });
            }, (error) => {
                alert(error);
            });
        } else {
            alert("Your browser does not support geolocation!");
        }
    }

    render() {
        const {lat, lng, isLoaded} = this.state;
        if (isLoaded) {
            return (
                <>
                    <h3>Your position is</h3>
                    <p>Position: {lat.toFixed(3)}, {lng.toFixed(3)}</p>
                    <Weather lat={lat} lng={lng}/>
                </>
            )
        } else {
            return (<p>Loading ....</p>)
        }
    }

    
}
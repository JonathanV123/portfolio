import React, { Component } from 'react';


export default class Ajax extends React.Component {
    render() {
        return (
            <div className="projectRight">
                This application incorporates the New York Times, Wikipedia,
                and Google Maps Geolocation API to generate location and articles asynchronously.
                The articles and location are based on user input. I built this application to
                learn more about Ajax requests and how to communicate and work with different APIs.
            </div>
        )
    }
}

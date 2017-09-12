import React, { Component } from 'react';


export default class ReactMovieApp extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="projectLeft">
                Having enjoyed utilizing React on my To Do List application,
                I decided to build another React application that would be bigger in scope.
                This application features a custom built calendar that pulls in movie information
                and release dates via the theMovieDB API. I had an absolute blast designing and
                building the calendar logic while figuring out how to handle multiple AJAX calls
                to retrieve the appropriate information for each particular movie. I gained new
                found knowledge in higher-order functions, design paradigms, and ES6 by building this application.
            </div>
        )
    }
}

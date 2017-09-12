import React, { Component } from 'react';
import Name from './Name';


export default class Introduction extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className = "imageContainer">
                <div className="brushStroke"></div>
                <Name/>
            </div>
        )
    }
}

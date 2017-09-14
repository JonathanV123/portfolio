import React, { Component } from 'react';
import Name from './Name';


export default class Header extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className = "imageContainer">
                <Name/>
            </div>
        )
    }
}

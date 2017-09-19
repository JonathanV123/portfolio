import React, {Component} from 'react';


export default class Contact extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="skillsAndExperience">
                <div className = "horizontalCardRow">
                <div className="card">
                    <a className="linkButtonContact" href="mailto:jonathanvoxland@gmail.com" target="_blank">jonathanvoxland
                        @gmail.com</a>
                </div>
                <div className="card">
                    <a className="linkButtonContact" href="https://www.linkedin.com/in/jonathan-voxland-037ba3b8"
                       target="_blank">LinkedIn</a>
                </div>
                <div className="card">
                    <a className="linkButtonContact" href="https://github.com/JonathanV123" target="_blank">Github</a>
                </div>
                </div>
            </div>
        )
    }
}
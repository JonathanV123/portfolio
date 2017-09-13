import React, {Component} from 'react';


export default class ProjectCards extends React.Component {
    constructor() {
        super();

    }
    render() {
        return (
                <div className="projectCard">
                    <h2>{this.props.projectInfo.name}</h2>
                    <p>{this.props.projectInfo.text}</p>
                </div>
        )
    }
}
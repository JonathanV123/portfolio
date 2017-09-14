import React, {Component} from 'react';
import waterTest from '../assets/images/waterTest.png'

export default class ProjectCards extends React.Component {
    constructor() {
        super();

    }
    render() {
        return (
                <div className="projectCard">
                    <h2>{this.props.projectInfo.name}</h2>
                    <p>{this.props.projectInfo.text}</p>
                    <img src={waterTest} alt={"logo"} className='projectBG'/>
                </div>
        )
    }
}
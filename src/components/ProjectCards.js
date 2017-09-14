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
                <div className="linksContainer">
                    <a href={this.props.projectInfo.sourceCodeLink} target="_blank" className="projectLink">
                        Live
                    </a>
                    <a href={this.props.projectInfo.liveLink} target="_blank" className="projectLink">
                        Source Code
                    </a>
                </div>
                <img src={waterTest} alt={"logo"} className='cardProjectBackground'/>
            </div>
        )
    }
}
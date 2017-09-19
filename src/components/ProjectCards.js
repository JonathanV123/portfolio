import React, {Component} from 'react';
import waterTest from '../assets/images/waterTest.png'

export default class ProjectCards extends React.Component {
    constructor() {
        super();

        this.renderSkills =this.renderSkills.bind(this);
    }
    renderSkills(skills){
        var skillsArr =[];
        skills.forEach(function(item){
            console.log(item);
            skillsArr.push(<span>{item}</span>)
        });
        console.log(skillsArr);
        return skillsArr
    }
    render() {
        return (
            <div className="projectCard">
                <h2>{this.props.projectInfo.title}</h2>
                <div className={this.props.projectInfo.name}>
                </div>
                {this.props.projectInfo.text}
                <div className="linksContainer">
                    <a href={this.props.projectInfo.sourceCodeLink} target="_blank" className="projectLink">
                        Live
                    </a>
                    <a href={this.props.projectInfo.liveLink} target="_blank" className="projectLink">
                        Source Code
                    </a>
                </div>
                <div className="techUsed">
                    {this.renderSkills(this.props.projectInfo.techUsed)}
                </div>
            </div>
        )
    }
}
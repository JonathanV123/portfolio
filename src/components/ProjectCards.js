import React, {Component} from 'react';

export default class ProjectCards extends React.Component {
    constructor() {
        super();
        this.renderTechUsed = this.renderTechUsed.bind(this);
    }

    renderTechUsed(skills) {
        var techUsed = [];
        skills.forEach(function (item) {
            techUsed.push(<span key={item}>{item}</span>)
        });
        return techUsed
    }

    render() {
        return (
            <div className="projectCard">
                <h2>{this.props.projectInfo.title}</h2>
                <div className={this.props.projectInfo.name}>
                </div>
                {this.props.projectInfo.text}
                <div className="linksContainer">
                    <a href={this.props.projectInfo.liveLink} target="_blank" className="projectLink">
                        Live
                    </a>
                    <a href={this.props.projectInfo.sourceCodeLink} target="_blank" className="projectLink">
                        Source Code
                    </a>
                </div>
                <div className="techUsed">
                    {this.renderTechUsed(this.props.projectInfo.techUsed)}
                </div>
            </div>
        )
    }
}
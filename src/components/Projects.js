import React, {Component} from 'react';
import ProjectCards from './ProjectCards';

export default class Projects extends React.Component {
    constructor() {
        super();
        this.generateCards = this.generateCards.bind(this);
    }

    generateCards(projects) {
        let individualProjectCards = [];
        projects.forEach(function (item) {
            individualProjectCards.push(
                <div className={`projectDiv + ${item.classNameAlt} `}>
                    <ProjectCards key={item.name} projectInfo={item}/>
                </div>
            )
        });
        return individualProjectCards
    }

    render() {
        return (
            <div className="projectsContainer">
                {this.generateCards(this.props.projects)}
            </div>
        )
    }
}

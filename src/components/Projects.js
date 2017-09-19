import React, {Component} from 'react';
import ProjectCards from './ProjectCards';

export default class Projects extends React.Component {
    constructor() {
        super();
        this.generateCards = this.generateCards.bind(this);
    }

    generateCards(projects) {
        let individualProjectCards = [];
        projects.forEach(function (item, i) {
            if (i % 2) {
                individualProjectCards.push(
                    <div className="leftSide">
                        <ProjectCards key={item.imgPath} projectInfo={item}/>
                    </div>
                );
            } else {
                individualProjectCards.push(
                    <div className="rightSide">
                        <ProjectCards key={item.name} projectInfo={item}/>
                    </div>
                );
            }
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

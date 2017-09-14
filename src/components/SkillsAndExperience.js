import React, {Component} from 'react';
// import myImage from '../assets/images/profilePic.jpg';


export default class SkillsAndExperience extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="skillsAndExperience">
                <div className="skillsTitle">Education</div>
                <div className="horizontalCardRow">
                    <div className="card exp">
                        <p>LearningFuze | 2016 | Accelerated Web Development Program</p>
                    </div>
                    <div className="card exp">
                        <p>Irvine Valley College | A.S | Business Administration</p>
                    </div>
                    <div className="card exp">
                        <p>Chef Eric's Professional Culinary Chef Program</p>
                    </div>
                </div>
            </div>
        )
    }
}

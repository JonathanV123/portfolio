import React, {Component} from 'react';
import Resume from '../assets/Jonathan_Voxland_Resume.pdf'
import PDFIcon from '../assets/images/pdfIcon.png'
import Splash from '../assets/images/patternPaintSplotch.png'


export default class SkillsAndExperience extends React.Component {
    constructor() {
        super();
        this.renderSkills = this.renderSkills.bind(this);
    }

    renderSkills(skills) {
        let skillArr = [];
        skills.map(function (skill) {
            skillArr.push(<div key={skill.title} className="skillWrapper">
                <div className={skill.className}>
                </div>
                <div className="skillName">
                    <p>{skill.title}</p>
                </div>
            </div>)
        });
        return skillArr
    }

    render() {
        return (
            <div className="skillsAndExperience">
                <div className="skillsContainer">
                    {this.renderSkills(this.props.skillsContent)}
                </div>
                <div className="card">
                    <h2>
                        LearningFuze
                    </h2>
                    <p>
                        Accelerated Web Development Program
                    </p>
                    <img src={Splash} className="bgSplash" alt="Paint Blotch"/>
                </div>
                <div className="card">
                    <h2>
                        Irvine Valley College
                    </h2>
                    <p> A.S Business Administration
                    </p>
                    <img src={Splash} className="bgSplash" alt="Paint Blotch"/>
                </div>
                <div className="card">
                    <h2>
                        Chef Eric’s Culinary Institute
                    </h2>
                    <p>
                        Professional French Culinary Chef Program
                    </p>
                    <img src={Splash} className="bgSplash" alt="Paint Blotch"/>
                </div>
                <div id="resume"><p>Download my full resume here:</p>
                    <a href={Resume} target="_blank">
                        <img className="pdfIcon" src={PDFIcon} alt='PDF file' width="100" height="100"/>
                    </a>
                </div>
            </div>
        )
    }
}

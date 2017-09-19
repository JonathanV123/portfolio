import React, {Component} from 'react';
import Resume from '../assets/Jonathan_Voxland_Resume.pdf'
import PDFIcon from '../assets/images/pdfIcon.png'



export default class SkillsAndExperience extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="skillsAndExperience">
                <div className="eduContent">
                    <p>LearningFuze <span>|</span> 2016 <span>|</span> Accelerated Web Development Program</p>
                </div>
                <div className="eduContent"><p>Irvine Valley College <span>|</span> A.S <span>|</span> Business
                    Administration</p>
                </div>
                <div className="eduContent">
                    <p>Chef Eric’s Culinary Institute <span>|</span> Professional French Culinary Chef Program</p>
                </div>
                <div id="resume"><p>Download my full resume here:</p>
                <a  href={Resume}  target="_blank">
                    <img className = "pdfIcon" src={PDFIcon} width="100" height="100"/>
                </a>
                </div>
            </div>
        )
    }
}

import React, {Component} from 'react';
import './App.css';
import {projects} from './ProjectDescriptions';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Divider from './components/Divider';
import SkillsAndExperience from './components/SkillsAndExperience';
import Contact from './components/Contact';



class App extends Component {
    constructor() {
        super();
        this.state = {
            dividerContent: [
                {content: 'Projects'},
                {content: 'Education'},
                {content: 'Get in touch'},
            ],
            projectInformation: projects,
        };
    }

    render() {
        return (
            <div className="portfolioContainer">
                <Header/>
                <Introduction/>
                <Divider dividerContent={this.state.dividerContent[0].content}/>
                <Projects projects={this.state.projectInformation}/>
                <Divider dividerContent={this.state.dividerContent[1].content}/>
                <SkillsAndExperience/>
                <Divider dividerContent={this.state.dividerContent[2].content}/>
                <Contact/>
            </div>
        );
    }
}

export default App;

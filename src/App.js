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
            projectInformation: projects,
        };
    }
    render() {
        return (
            <div className="portfolioContainer">
                <Header/>
                <Introduction/>
                <Divider/>
                <Projects projects={this.state.projectInformation}/>
                <Divider/>
                <SkillsAndExperience/>
                <Divider/>
                <Contact/>
            </div>
        );
    }
}

export default App;

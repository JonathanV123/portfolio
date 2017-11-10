import React, {Component} from 'react';
import './App.css';
import {allProjects} from './ProjectDescriptions';
import {Skills} from './Skills'
import Header from './components/Header';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Tutorials_Blog from './components/Tutorials_Blog';
import Divider from './components/Divider';
import SkillsAndExperience from './components/SkillsAndExperience';
import Contact from './components/Contact';


class App extends Component {
    constructor() {
        super();
        this.state = {
            dividerContent: [
                {
                    text: 'Projects',
                },
                {
                    text: 'Skills and Education',
                },
                {
                    text: 'Youtube Tutorials and Blog',
                },
                {
                    text: 'Get in touch',
                },

            ],
            projectInformation: allProjects,
        };
    }

    render() {
        return (
            <div className="portfolioContainer">
                <Header/>
                <Introduction/>
                <Divider content={this.state.dividerContent[0]}/>
                <Projects projects={this.state.projectInformation}/>
                <Divider content={this.state.dividerContent[2]}/>
                <Tutorials_Blog projects={this.state.projectInformation}/>
                <Divider content={this.state.dividerContent[1]}/>
                <SkillsAndExperience skillsContent={Skills}/>
                <Divider content={this.state.dividerContent[3]}/>
                <Contact/>
                <div className="scrollDownNotification scrollDownAnimation">
                </div>
            </div>
        );
    }
}

export default App;

import React, {Component} from 'react';
import './App.css';
import {projects} from './ProjectDescriptions';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Divider from './components/Divider';

class App extends Component {
    constructor() {
        super();
        this.supplyMovieInformation = this.supplyMovieInformation.bind(this);
        this.state = {
            projectInformation:[],
        };
        this.supplyMovieInformation();
    }
    supplyMovieInformation() {

        let projectInfo = this.state.projectInformation;
        projects.forEach(function(item, index){
            projectInfo[index] = item;
        });
        console.log(projectInfo);
        this.state.projectInformation = projectInfo;
    }
    render() {
        return (
            <div className="portfolioContainer">
                <Header/>
                <Introduction/>
                <Divider/>
                <Projects projects={this.state.projectInformation}/>
            </div>
        );
    }
}

export default App;

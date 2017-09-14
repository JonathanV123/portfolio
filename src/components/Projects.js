import React, {Component} from 'react';
import ProjectCards from './ProjectCards';
import ajax from '../assets/images/ajaxMonitor.png'
import calc from '../assets/images/monitorCalc.png'
import memMatch from '../assets/images/memMatchMonitor.png'
import toDoApp from '../assets/images/reactMonitor.png'
import movieApp from '../assets/images/movieAppMonitor.png'


export default class Projects extends React.Component {
    constructor() {
        super();
        this.generateCards = this.generateCards.bind(this);
    }
    generateCards(projects) {
        let individualProjectCards= [];
        console.log('for each');
        //Gross if statement to deal with strings in img src
        projects.forEach(function (item, i) {
            if(item.name === 'ajax'){
                item.imgPath = ajax
            }
            if(item.name === 'calc'){
                item.imgPath = calc
            }
            if(item.name === 'memMatch'){
                item.imgPath = memMatch
            }
            if(item.name === 'toDoApp'){
                item.imgPath = toDoApp
            }
            if(item.name === 'movieApp'){
                item.imgPath = movieApp
            }
            if(i % 2){
                individualProjectCards.push(
                    <div className="leftSide">
                        <div className="projectPicture">
                            <img src={item.imgPath} alt={"Project Picture"} className='projectBG'/>
                        </div>
                        <div className="projectCardContainer">
                            <ProjectCards key={item.imgPath} projectInfo={item}/>
                        </div>
                    </div>
                );
            }else{
                individualProjectCards.push(
                    <div className="rightSide">
                        <div className="projectCardContainer">
                            <ProjectCards key={item.name} projectInfo={item}/>
                        </div>
                        <div className="projectPicture">
                            <img src={item.imgPath} alt={"Project Picture"} className='projectBG'/>
                        </div>
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

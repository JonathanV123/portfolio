import React, {Component} from 'react';
import Splash from '../assets/images/silairewood-splash.png'


export default class Contact extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="skillsAndExperience">
                <div className = "horizontalCardRow">
                <div className="card">
                    <a className="linkButtonContact" href="https://www.linkedin.com/in/jonathan-voxland-037ba3b8" target="_blank">
                        LinkedIn
                    </a>
                    <img src={Splash} className= "bgSplash" alt="Background Splash Image"/>
                </div>
                <div className="card">
                    <a className="linkButtonContact" href="mailto:jonathanvoxland@gmail.com" target="_blank">
                        jonathanvoxland@gmail.com
                    </a>
                    <img src={Splash} className= "bgSplash" alt="Background Splash Image"/>
                </div>
                <div className="card">
                    <a className="linkButtonContact" href="https://github.com/JonathanV123" target="_blank">
                        Github
                    </a>
                    <img src={Splash} className= "bgSplash" alt="Background Splash Image"/>
                </div>
                </div>
            </div>
        )
    }
}
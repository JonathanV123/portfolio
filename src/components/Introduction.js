import React, {Component} from 'react';
import myImage from '../assets/images/profilePic.jpg';


export default class Introduction extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="row">
                <div className="leftSideOfRow">
                    <div className="aboutMe">
                        <h1> About Me </h1>
                        I'm a self-taught developer and coding bootcamp grad that is extremely passionate and
                        enthusiastic
                        about
                        coding, and am eager to tap into all aspects of web development. When I'm not building websites,
                        you can find me watching documentaries and films, cookin' up new recipes in the kitchen, or
                        freediving at
                        the beach. My goal is to work in a collaborative, positive environment with people who are
                        passionate about
                        what they do and together we make things that help others be successful.
                    </div>
                </div>
                <div className="rightSideOfRow">
                    <div className="card">
                        <img className="myPic" src={myImage} alt="Profile Pic"/>

                    </div>
                </div>
            </div>
        )
    }
}

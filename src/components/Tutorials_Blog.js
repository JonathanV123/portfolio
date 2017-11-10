import React, {Component} from 'react';
import YouTube from 'react-youtube';
import medium_icon from '../assets/images/medium_icon.png';
import twitter_icon from '../assets/images/twitter_icon.png';


export default class Tutorials_Blog extends React.Component {
    render() {
        const opts = {
            playerVars: { // https://developers.google.com/youtube/player_parameters
                height: '400',
                width: '575',
                autoplay: 0
            }
        };
        return (
            <div className="tutorial_blog">
                <h2>
                    Youtube Tutorials
                </h2>

                <YouTube
                    videoId="2g811Eo7K8U"
                    opts={opts}
                    onReady={this._onReady}
                />
                <p>
                    My personal Web Development Youtube Channel and Blog focusing on teaching others about HTML, CSS,
                    Javascript, and other aspects of web development.
                </p>
                <hr/>
                <h2>
                    Web development blog on Medium
                </h2>
                    <img className="icon" src={medium_icon} alt="Medium Icon"/>
                <p className="centerText">
                    My coding blog aimed at teaching people different aspects of Javascript with relevant and easy to
                    understand examples.
                </p>
                <hr/>
                <h2>
                    All things code on my Twitter
                </h2>
                    <img className="icon" src={twitter_icon} alt="Twitter Icon"/>
                <p className="centerText">
                    Check out my twitter for snippets of interesting code, and announcements upcoming topics for my
                    Youtube channel and blog.
                </p>
                <hr/>
            </div>
        )
    }
}

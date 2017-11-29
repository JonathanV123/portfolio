import React, {Component} from 'react';
import YouTube from 'react-youtube';
import medium_icon from '../assets/images/medium_icon.png';
import twitter_icon from '../assets/images/twitter_icon.png';


export default class Tutorials_Blog extends React.Component {
    render() {
        const opts = {
            playerVars: {
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
                    videoId="SLa4U3w5DV8"
                    opts={opts}
                    onReady={this._onReady}
                />
                <a id="youtubeLink" href="https://www.youtube.com/channel/UC8ekmpR_7oSwbXVfvMQvVfg/featured" target="_blank">
                    <h3>Visit my channel</h3>
                </a>
                <p className="centerText blog_text">
                    My personal Web Development Youtube Channel and Blog focusing on teaching others about HTML, CSS,
                    Javascript, and other aspects of web development.
                </p>
                <hr/>
                <h2 className="centerText">
                    Web development blog on Medium
                </h2>
                <a href="https://medium.com/@jonathanvox01" target="_blank">
                    <img className="icon" src={medium_icon} alt="Medium Icon"/>
                </a>
                <p className="centerText blog_text">
                    My coding blog aimed at teaching people different aspects of Javascript with relevant and easy to
                    understand examples.
                </p>
                <hr/>
                <h2 className="centerText">
                    All things code on my Twitter
                </h2>
                <a href="https://twitter.com/Mecha_Jiv" target="_blank">
                    <img className="icon" src={twitter_icon} alt="Twitter Icon"/>
                </a>
                <p className="centerText blog_text">
                    Check out my twitter for snippets of interesting code, and announcements of upcoming topics for my
                    Youtube channel and blog.
                </p>
                <hr/>
            </div>
        )
    }
}

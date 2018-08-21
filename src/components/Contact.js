import React, { Component } from 'react';


export default class Contact extends React.Component {
    render() {
        return (
            <div className="contactContainer">
                <div className="horizontalCardRow">
                    <div className="card contactCard">
                        <a className="linkedInPic icon" rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/jvoxl"
                            target="_blank">

                        </a>
                        <a href="https://www.linkedin.com/in/jvoxl"
                            target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </div>
                    <div className="card contactCard">
                        <a className="emailPic icon" href="mailto:jonathanvoxland@gmail.com" rel="noopener noreferrer">

                        </a>
                        <a href="mailto:jonathanvoxland@gmail.com" target="_blank" rel="noopener noreferrer">
                            jonathanvoxland@gmail.com
                        </a>
                    </div>
                    <div className="card contactCard">
                        <a className="gitPic icon" href="https://github.com/JonathanV123" target="_blank"
                            rel="noopener noreferrer">

                        </a>
                        <a href="https://github.com/JonathanV123" target="_blank" rel="noopener noreferrer">
                            Github
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
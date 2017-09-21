import React, {Component} from 'react';


export default class Contact extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="contactContainer">
                <div className="horizontalCardRow">
                    <div className="card contactCard">
                        <a className="linkedInPic icon" href="https://www.linkedin.com/in/jonathan-voxland-037ba3b8"
                           target="_blank">

                        </a>
                        <a href="https://www.linkedin.com/in/jonathan-voxland-037ba3b8"
                           target="_blank">
                            LinkedIn
                        </a>
                    </div>
                    <div className="card contactCard">
                        <a className="emailPic icon" href="mailto:jonathanvoxland@gmail.com">

                        </a>
                        <a href="mailto:jonathanvoxland@gmail.com" target="_blank">
                            jonathanvoxland@gmail.com
                        </a>
                    </div>
                    <div className="card contactCard">
                        <a className="gitPic icon" href="https://github.com/JonathanV123" target="_blank">

                        </a>
                        <a href="https://github.com/JonathanV123" target="_blank">
                            Github
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react';
import MemoryMatch from './projects/MemoryMatch';
import Ajax from './projects/Ajax';
import Calculator from './projects/Calculator';
import ReactMovieApp from './projects/ReactMovieApp';
import ReactToDoApp from './projects/ReactToDoApp';




export default class Projects extends React.Component {
    render() {
        return (
            <div className="projectsContainer">
                <div className ="leftSide">
                    <MemoryMatch/>

                </div>
                <div className ="rightSide">
                    <Calculator/>

                </div>
                <div className ="leftSide">
                    <ReactToDoApp/>

                </div>
                <div className ="rightSide">
                    <ReactMovieApp/>

                </div>
                <div className ="leftSide">
                    <Ajax/>

                </div>
            </div>
        )
    }
}

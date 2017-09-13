import React, {Component} from 'react';


export default class Projects extends React.Component {
    render() {
        return (
            <div className="projectsContainer">
                <div className="leftSide">
                    <div className="projectLeft">
                        {this.props.projects[0].movieApp.text.props.children}
                    </div>
                </div>
                <div className="rightSide">
                    <div className="projectRight">
                        {this.props.projects[0].memoryMatch.text.props.children}
                    </div>
                </div>
                <div className="leftSide">
                    <div className="projectLeft">
                        {this.props.projects[0].ajax.text.props.children}
                    </div>

                </div>
                <div className="rightSide">
                    <div className="projectRight">
                        {this.props.projects[0].calculator.text.props.children}
                    </div>
                </div>
                <div className="leftSide">
                    <div className="projectLeft">
                        {this.props.projects[0].toDoApp.text.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

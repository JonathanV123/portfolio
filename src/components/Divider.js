import React, {Component} from 'react';


export default class Divider extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="divider">
                <span>{this.props.dividerContent}</span>
            </div>
        )
    }
}


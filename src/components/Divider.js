import React, {Component} from 'react';


export default class Divider extends React.Component {
    render() {
        return (
            <div className='divider'>
                <span>
                    {this.props.content.text}
                </span>
            </div>
        )
    }
}


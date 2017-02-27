import React, { Component } from 'react';
import './Box.css';

// eslint-disable-next-line
const colors = {
  0: 'grey',
  1: 'yellow',
  2: 'red'
};


class Box extends Component {
    constructor(props) {
        super(props);
        if(props.loc === 2) {
            console.log(props);
        }
        this.state = {
            loc: props.loc,
            height: props.height,
            width: props.width,
            value: props.value,
        };
    }
    
    isCurrent() {
        return this.state.loc === this.props.cur.option.location;
    }



    style() {
        console.log("this.state.value: ", this.props.value);
        var background = colors[this.props.value];
        return {
            "border": "1px solid black",
            "width": 900/this.props.width + "px",
            "height": 900/this.props.width + "px",
            "background": background,
            "float": "left"
        }
    }

    render() {
        if(this.isCurrent()) {
            return (
                <div className="currentContainer" style={this.style()}>
                    <div className="current" id="current"></div>
                </div>
            );
        } else {
            return (
                <div style={this.style()}>
                </div>
            );
        }
    }
}


export default Box;

            
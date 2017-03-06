import React, { Component } from 'react';
import Player from '../player/Player';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
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
            previousLoc: props.cur.option.previousLoc,
        };
    }
    
    isCurrent() {
        return this.state.loc === this.props.cur.option.location;
    }



    style() {
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
                <div style={this.style()}>
                    <Player cur={this.props.cur} />
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

Box.propTypes = {
  cur: React.PropTypes.object,
  level: React.PropTypes.object
};

export default Box;

            
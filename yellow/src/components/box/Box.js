import React, { Component } from 'react';
import Player from '../player/Player';
import './Box.css';

// eslint-disable-next-line
const colors = {
  0: 'grey',
  1: 'yellow',
  2: 'red',
  5: 'black',
  6: 'grey'
};

const animName = {
  0: 'fade-in-grey',
  1: 'fade-in-yellow',
  2: 'fade-in-red'
};


class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loc: props.loc,
        };
    }
    
    isCurrent() {
        return this.state.loc.x === this.props.cur.option.location.x && this.state.loc.y === this.props.cur.option.location.y;
    }


    style() {
        /* eslint-disable no-mixed-operators */
        var background = colors[this.props.value];
        return {
            "borderLeft": "1px solid black",
            "borderRight": "1px solid black",
            "borderTop": this.props.value === 6 && "1px solid red" || "1px solid black",
            "borderBottom": this.props.value === 6 && "1px solid red" || "1px solid black",
            "width": "60px",
            "height": "60px",
            "background": background,
            "float": "left",
            "animationName": animName[this.props.value],
            "animationDuration": "0.5s",
            "animationIterationCount": 1,
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

            
import React, { Component } from 'react';
import Player from '../player/Player';
import './Box.css';

// eslint-disable-next-line
const colors = {
  0: 'grey',
  1: 'yellow',
  2: 'red',
  5: 'black',
  6: 'grey',
  7: 'grey',
};

const animName = {
  0: 'fade-in-grey',
  1: 'fade-in-yellow',
  2: 'fade-in-red'
};

/**
 * Class component for individual boxes in the game board
 */

class Box extends Component {
    style() {
        /* eslint-disable no-mixed-operators */
        var background = colors[this.props.value];
        return {
            "boxSizing": "border-box",
            "borderLeft": this.props.value === 7 && "3px dotted red" || "1px outset black",
            "borderRight": this.props.value === 7 && "3px dotted red" || "1px outset black",
            "borderTop": this.props.value === 6 && "3px dotted red" || "1px outset black",
            "borderBottom": this.props.value === 6 && "3px dotted red" || "1px outset black",
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
        return (
            <div style={this.style()}>
                {
                    this.props.hasPlayer && <Player cur={this.props.cur} />
                }
            </div>
        );
    } 
}

Box.propTypes = {
  cur: React.PropTypes.object,
  level: React.PropTypes.object,
  hasPlayer: React.PropTypes.bool.isRequired
};

export default Box;

            
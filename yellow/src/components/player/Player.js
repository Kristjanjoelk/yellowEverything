import React, { Component } from 'react';
import './Player.css';

const directions = {
    0: "right",
    1: "down",
    2: "left",
    3: "up",
    4: "long"
}

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loc: props.cur.option.location,
            previousLoc: props.cur.option.previousLoc,
        };
    }

    style() {
        // right = 0, down = 1, left = 2, up = 3, long = 4
        var dir = 4;
        if(this.props.cur.option.location.x - 1 === this.props.cur.option.previousLoc.x) {
            dir = 0;
        }
        if(this.props.cur.option.location.x + 1 === this.props.cur.option.previousLoc.x) {
            dir = 2;
        }
        if(this.props.cur.option.location.y - 1 === this.props.cur.option.previousLoc.y) {
            dir = 1;
        }
        if(this.props.cur.option.location.y + 1 === this.props.cur.option.previousLoc.y) {
            dir = 3;
        }

        return {
            "animationName": directions[dir],
            "animationDuration": "0.5s",
            "animationIterationCount": 1,
        }
        
    }

    render() {
        return (
            <div className="player-container">
                <div className="player" id="player" key={this.state.loc} style={this.style()}>
                </div>
            </div>
        );
    }
}

Player.propTypes = {
  cur: React.PropTypes.object,
  level: React.PropTypes.object
};


export default Player;


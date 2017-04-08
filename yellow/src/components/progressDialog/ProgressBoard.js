/* eslint-disable */
import React, { Component } from 'react';
import Box from '../box/Box';
import immutable, { List } from 'immutable';
import store from '../../store';
import actions from '../../actions';
import todo from '../../control/todo';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Star from 'react-icons/lib/fa/star';
import Ostar from 'react-icons/lib/fa/star-o';
// react material stuff
// fix for console warning

class ProgressBoard extends Component {

    style() {
        // console.log("style() board, this.props.level", this.props.level);
        return {
            "width": (this.props.level.option.gameWidth * 1.2) + "em",
            "height": (this.props.level.option.gameHeight * 1.2) + "em",
            "padding": "1.0em",
            "display": "inline-block",
            "margin": "0 auto",
            "float": "left",
        }
    }

    render() {
        console.log("inside progressboard: ", this.props.board);
        let counter = 0;
        return (
            <div style={this.style()} >
                <div className="level-counter">Level: {this.props.level.option.currentLevel + 1}</div>
            {
                this.props.level.option.board.map(function(row, i) {
                    let boxes = row.map(function(val, j) {
                        let location = {x: j, y: i};
                        counter++;
                        return(<Box 
                            key = {counter} 
                            loc = {location} 
                            value = {val} 
                            level = {this.props.level} 
                            cur = {this.props.cur}
                            hasPlayer = {false}
                            boxSize = {(Math.max(this.props.level.option.gameWidth,this.props.level.option.gameHeight) * 10)/Math.max(this.props.level.option.gameWidth,this.props.level.option.gameHeight)}
                        />)
                    }.bind(this))
                    return boxes;
                }.bind(this))
            }
            {this.props.level.option.moveCounter <= this.props.level.option.solution.firstPlace &&  this.props.level.option.winState &&
                <div>
                    <Star size={10} /><Star size={10}/><Star size={10}/>
                </div>
            }
            {this.props.level.option.solution.thirdPlace[this.props.level.option.moveCounter] && this.props.level.option.winState && 
                <div>
                   <Star size={10}/><Star size={10}/><Ostar size={10}/>
                </div>
            }
            {this.props.level.option.solution.secondPlace[this.props.level.option.moveCounter] && this.props.level.option.winState &&
                <div>
                 <Star size={10}/><Ostar size={10}/><Ostar size={10}/>
                </div>
            }
            </div>
        );
    }
}

ProgressBoard.propTypes = {
  level: React.PropTypes.object.isRequired
};

export default ProgressBoard;




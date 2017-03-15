/* eslint-disable */
import React, { Component } from 'react';
import Box from '../box/Box';
import immutable, { List } from 'immutable';
import store from '../../store';
import actions from '../../actions';
import todo from '../../control/todo';
import './Board.css';


class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    style() {
        // console.log("style() board, this.props.level", this.props.level);
        return {
            "width": (this.props.level.option.gameWidth * 70) + "px",
            "height": (this.props.level.option.gameHeight * 70) + "px",
            "display": "inline-block",
            "textalign": "center",
        }
    }

    render() {
        // console.log("board: ", board);
        let counter = 0;
        return (
            <div className="gameboard" >
                <div style={this.style()} >
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
                                />)
                            }.bind(this))
                            return boxes;
                            console.log(boxes);
                        }.bind(this))
                    }
                </div>
                <div>Level: {this.props.level.option.currentLevel + 1}</div>
                <div>Moves: {this.props.level.option.moveCounter}</div>
            </div>
        );
    }
}

Board.propTypes = {
  cur: React.PropTypes.object.isRequired,
  level: React.PropTypes.object.isRequired
};

export default Board;




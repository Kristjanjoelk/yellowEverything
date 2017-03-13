/* eslint-disable */
import React, { Component } from 'react';
import Box from '../box/Box';
import './Board.css';


class SolutionBoard extends Component {

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
        return (
            <div className="gameboard" >
                <div style={this.style()} >
                    {
                        this.props.level.option.board.map(function(key, i) {
                            return(<Box 
                                key = {i} 
                                loc = {i + 1} 
                                value = {this.props.level.option.board[i]} 
                                level = {this.props.level} 
                                cur = {this.props.cur}

                            />)
                        }.bind(this))
                    }
                </div>
                <div>Level: {this.props.level.option.currentLevel + 1}</div>
                <div>Moves: {this.props.level.option.moveCounter}</div>
            </div>
        );
    }
}

SolutionBoard.propTypes = {
  cur: React.PropTypes.object.isRequired,
  level: React.PropTypes.object.isRequired
};

export default SolutionBoard;




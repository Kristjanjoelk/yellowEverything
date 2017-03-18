/* eslint-disable */
import React, { Component } from 'react';
import Box from '../box/Box';
import LeftArrow from 'react-icons/lib/fa/arrow-left';
import RightArrow from 'react-icons/lib/fa/arrow-right';
import './Board.css';


class SolutionBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sequenceCounter: 0,
            sequence: props.level.option.solution.solutionSequence.slice(),
            solution: props.level.option.solution,
            board: props.level.option.solution.board.map(function(arr) {
                return arr.slice();
            }),
        };
    }


    getSequence = (seq, forward) => {
        if(seq < 0) { return ;}
        let pos = this.state.sequence[seq];
        var tempBoard = this.state.board;

        // reset the board if we component is re-opened
        if(tempBoard[parseInt(pos.y)][parseInt(pos.x)] === 1 && seq === 0) {
            tempBoard = this.props.level.option.solution.board.map(function(arr) {
                return arr.slice();
            });
        }

        // Assign box values
        if(!forward) {
            let prevPos = this.state.sequence[seq + 1];
            tempBoard[parseInt(prevPos.y)][parseInt(prevPos.x)] -= 1;

        } else {
            tempBoard[parseInt(pos.y)][parseInt(pos.x)] += 1;
            if(tempBoard[parseInt(pos.y)][parseInt(pos.x)] > 2) {
                tempBoard[parseInt(pos.y)][parseInt(pos.x)] = 0;
            }
        }


        // Update state
        this.setState({
            sequenceCounter: seq,
            board: tempBoard
        });
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
        console.log("board: ", this.state.solution);
        let counter = 0;
        let prevCounter = this.state.sequenceCounter > 0 ? this.state.sequenceCounter - 1 : this.state.sequenceCounter;
        let currentLocation = {
            option: {
                location: {
                    x: parseInt(this.props.level.option.solution.solutionSequence[this.state.sequenceCounter].x),
                    y: parseInt(this.props.level.option.solution.solutionSequence[this.state.sequenceCounter].y)
                },
                previousLoc: {
                    x: parseInt(this.props.level.option.solution.solutionSequence[prevCounter].x),
                    y: parseInt(this.props.level.option.solution.solutionSequence[prevCounter].y)
                }
            }
        }
        return (
            <div className="gameboard" >
                <div style={this.style()} >
                    {
                        this.state.board.map(function(row, i) {
                            let boxes = row.map(function(val, j) {
                                let location = {x: j, y: i};
                                counter++;
                                return(<Box 
                                    key = {counter} 
                                    loc = {location} 
                                    value = {val} 
                                    level = {this.props.level} 
                                    cur = {currentLocation}
                                    hasPlayer = {location.x === currentLocation.option.location.x && location.y === currentLocation.option.location.y}
                                />)
                            }.bind(this))
                            
                            console.log(boxes);
                            return boxes;
                        }.bind(this))
                    }
                </div>
                <div>Level: {this.props.level.option.currentLevel + 1}</div>
                <div>Moves: {this.state.sequenceCounter}</div>
                <LeftArrow className="keyboard-arrow" onClick={( ) => this.getSequence(this.state.sequenceCounter > 0 ? this.state.sequenceCounter - 1 : -1, false)}/>
                <RightArrow className="keyboard-arrow" onClick={( ) => this.getSequence(this.props.level.option.solution.solutionSequence.length - 2 !== this.state.sequenceCounter ? this.state.sequenceCounter + 1 : -1, true)}/>
            </div>
        );
    }
}

SolutionBoard.propTypes = {
  level: React.PropTypes.object.isRequired
};

export default SolutionBoard;




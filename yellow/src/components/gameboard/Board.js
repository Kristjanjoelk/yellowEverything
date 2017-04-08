/* eslint-disable */
import React, { Component } from 'react';
import Box from '../box/Box';
import immutable, { List } from 'immutable';
import store from '../../store';
import actions from '../../actions';
import todo from '../../control/todo';
import NextMap from 'react-icons/lib/fa/angle-right';
import './Board.css';
import PreviousMap from 'react-icons/lib/fa/angle-left'
import { Grid, Row, Col } from 'react-flexbox-grid';
// react material stuff
// fix for console warning
import '../../control';
import { saveProgress } from '../../firebase/data';
import ReactTooltip from 'react-tooltip';
import Swipeable from 'react-swipeable';

const thing = {
  0: 'left',
  1: 'up',
  2: 'right',
  3: 'down',
};


class Board extends Component {

    style() {
        // console.log("style() board, this.props.level", this.props.level);
        return {
            "width": (this.props.level.option.gameWidth * 7) + "em",
            "height": (this.props.level.option.gameHeight * 7) + "em",
            "display": "inline-block",
            "margin" : "0 auto",
        }
    }

    getPreviousMap() {
        const state = store.getState();
        const curLevel = state.get('level');

        // Save to progress
        // TODO: It would be really cool if we could move this logic to somewhere else
        const prog = state.get('progress');
        const auth = state.get('auth');
        const newBoard = prog.addBoard(curLevel, false);
        if(newBoard !== -1) {
            store.dispatch(actions.addBoard(newBoard));

            // saveProgress(auth.option.user, newBoard)
            //     .then((prog) => {
            //        console.log("Successfully saved progress");
            //     }).catch((error) => {
            //         console.log(error);
            //     })
        }

        todo['previousMap'].down(store);
    }

    getNextMap() {
        todo['nextMap'].down(store);
    }

    handleLeft() {
        todo[thing[0]].down(store);
    }
    handleRight() {
        todo[thing[2]].down(store);
    }
    handleUp() {
        todo[thing[1]].down(store);
    }
    handleDown() {
        todo[thing[3]].down(store);
    }

    render() {
        // console.log("board: ", board);
        let counter = 0;
        return (
            <Grid fluid>
                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <Swipeable
                                    onSwipedUp={this.handleUp}
                                    onSwipedRight={this.handleRight}
                                    onSwipedDown={this.handleDown}
                                    onSwipedLeft={this.handleLeft}>
                                        <div className={this.props.cur.option.invalidMove ? "gameboard-shake" : "gameboard"} >
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
                                                            hasPlayer = {location.x === this.props.cur.option.location.x && location.y === this.props.cur.option.location.y}
                                                            boxSize = {(Math.max(this.props.level.option.gameWidth,this.props.level.option.gameHeight) * 70)/Math.max(this.props.level.option.gameWidth,this.props.level.option.gameHeight)}
                                                        />)
                                                    }.bind(this))
                                                    return boxes;
                                                }.bind(this))
                                            }
                                        </div>
                                        <div>Moves: {this.props.level.option.moveCounter}</div>
                                         <Row around="xs">
                                             <Col xs={2}>
                                                <button className="get-map" disabled={this.props.level.option.currentLevel === 0} onClick={() => this.getPreviousMap()}>
                                                    <PreviousMap/>
                                                </button>
                                            </Col>
                                            <Col xs={5}>
                                                <h2 className="level-buttons-level">Level: {this.props.level.option.currentLevel + 1}</h2> 
                                            </Col>
                                            <Col xs={2}>
                                            <button className="get-map" disabled={!this.props.progress.option.boards[this.props.level.option.currentLevel + 1] || !this.props.progress.option.boards[this.props.level.option.currentLevel].winState === 2} onClick={() => this.getNextMap()}>
                                                <NextMap/>
                                            </button>
                                            </Col>
                                        </Row>
                                    </div>
                                </Swipeable>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

Board.propTypes = {
  cur: React.PropTypes.object.isRequired,
  level: React.PropTypes.object.isRequired,
  progress: React.PropTypes.object.isRequired
};

export default Board;




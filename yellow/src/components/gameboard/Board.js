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
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FloatingActionButton from 'material-ui/FloatingActionButton';
// fix for console warning
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


class Board extends Component {

    style() {
        // console.log("style() board, this.props.level", this.props.level);
        return {
            "width": (this.props.level.option.gameWidth * 70) + "px",
            "height": (this.props.level.option.gameHeight * 70) + "px",
            "display": "inline-block",
            "margin" : "0 auto",
        }
    }

    getPreviousMap() {
        const state = store.getState();
        const curLevel = state.get('level');

        // Save to progress
        const prog = state.get('progress');
        const newBoard = prog.addBoard(curLevel);
        if(newBoard !== -1) {
            store.dispatch(actions.addBoard(newBoard));
        }
        todo['previousMap'].down(store);
    }

    getNextMap() {
        todo['nextMap'].down(store);
    }

    render() {
        // console.log("board: ", board);
        let counter = 0;
        return (
            <Grid fluid>
                <Row between="xs">
                    <Col>
                        <div className="previous-map">
                            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)} >
                                <FloatingActionButton mini={true} backgroundColor="grey" disabled={this.props.level.option.currentLevel === 0} onClick={() => this.getPreviousMap()}>
                                    <PreviousMap/>
                                </FloatingActionButton>
                            </MuiThemeProvider>
                        </div>
                    </Col>
                    <Col>
                        <Row >
                            <Col xs={5}>
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
                                    <div>Level: {this.props.level.option.currentLevel + 1}</div>
                                    <div>Moves: {this.props.level.option.moveCounter}</div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <div className="next-map">
                            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)} >
                                <FloatingActionButton mini={true} backgroundColor="grey" disabled={!this.props.progress.option.boards[this.props.level.option.currentLevel + 1] || !this.props.progress.option.boards[this.props.level.option.currentLevel].winState === 2} onClick={() => this.getNextMap()}>
                                    <NextMap/>
                                </FloatingActionButton>
                            </MuiThemeProvider>
                        </div>
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




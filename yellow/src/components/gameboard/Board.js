/* eslint-disable */
import React, { Component } from 'react';
import Box from '../box/Box';
import immutable, { List } from 'immutable';
import './Board.css';


class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    // componentWillReceiveProps(nextProps = {}) {
    //     console.log("Board componentWillReceiveProps", nextProps);

    // }

    // shouldComponentUpdate(nextProps = {}) { 
    //     const props = this.props;
    //     return !(
    //         immutable.is(nextProps.board, props.board) &&
    //         immutable.is((nextProps.level.option.gameWidth && nextProps.level.option.gameHeight))
    //         )
    // }

    // shouldComponentUpdate({ level }) {
    //     return !immutable.is(level, this.props.level);
    // }

    // getResult(props = this.props) {
    //     console.log("getResult", this.props);
    //     return props.level.board;
    // }

    style() {
        console.log("style() board, this.props.level", this.props.level);
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
                                loc = {key.loc} 
                                value = {this.props.level.option.board[i].value} 
                                level = {this.props.level} 
                                cur = {this.props.cur}

                            />)
                        }.bind(this))
                    }
                </div>
            </div>
        );
    }
}

Board.propTypes = {
  cur: React.PropTypes.object.isRequired,
  level: React.PropTypes.object.isRequired
};

export default Board;




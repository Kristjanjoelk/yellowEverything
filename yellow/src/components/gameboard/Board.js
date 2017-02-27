/* eslint-disable */
import React, { Component } from 'react';
import Box from '../box/Box';
import store from '../../store';
import { connect } from "react-redux";
import './Board.css';


function move(code, location, width, height) {
    var action = keyboard[code];
    var curr = location;
    var width = width;
    var height = height;
    if(action === 'LEFT') {
        if (curr === 0 || curr % width === 0) {
            curr = curr + width;
        } else {
            curr--;
        }
    } else if(action === 'RIGHT') {
        if (curr % width === 0) {
            curr = curr - width;
        } else {
            curr++;
        }
    } else if(action === 'UP') {
        if (curr < width === 0) {
            curr = ((height - 1) * width) + curr;
        } else {
            curr = curr - width;;
        }
    } else if(action === 'DOWN') {
        if (curr > ((height - 1) * width)) {
            curr = curr - (height - 1) * width;
        } else {
            curr = curr - width;;
        }
    }
    console.log("Curr is : " + curr);
    return curr;
}


connect((store) => {
    return {
        cur: store.cur,
    }
});

class Board extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            width: props.level.option.gameWidth,
            height: props.level.option.gameHeight,
            board: props.level.option.board,
            location: 0,
            cur: props.cur,
        };
        
    }

    style() {
        return {
            "width": (this.state.width * 100) + "px",
            "height": (this.state.height * 100) + "px",
            "display": "inline-block",
            "textalign": "center",
        }
    }

    render() {
        return (
            <div className="gameboard" >
                <div style={this.style()} >
                    {
                        this.state.board.map(function(key, i) {
                            return(<Box 
                                key = {i} 
                                loc = {key.loc} 
                                value = {this.props.level.option.board[i].value} 
                                width = {this.props.width} 
                                height = {this.props.height} 
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
  cur: React.PropTypes.object,
  level: React.PropTypes.object
};

export default Board;




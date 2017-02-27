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
        this.state = {
            width: props.width,
            height: props.height,
            gameCounter: props.width*props.height,
            board: this.initBoard(props),
            location: 0,
            cur: props.cur,
        };
        
    }

    // Initialized the game board with the width and height
    initBoard(props) {       
        var w = props.width;
        var h = props.height;
        var counter = 0;
        var result = [];
        for(var i = 1; i <= h; i++) {
            for(var k = 1; k <= w; k++) {
                counter++;
                result.push({
                    loc: counter,
                    // value: counter === this.state.cur.options.location ? 0,
                });
            }
        }
        return result;
    }
    style() {
        return {
            "width": (this.state.width * 100) + "px",
            "height": (this.state.height * 100) + "px",
            "display": "inline-block",
            "textalign": "center",
        }
    }

    addValue(loc) {
        console.log("hehe: " , loc);
        var temp = this.state.board;
        if(typeof temp[loc] !== 'undefined') {
            temp[loc].value =  temp[loc].value < 3 ?  temp[loc].value++ : 0
            this.setState({
                board: temp
            });
        }
    }

    increment() {
        this.state.gameCounter++;
    }

    decrement() {
        this.state.gameCounter++;
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
                                value = {key.value} 
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
};

export default Board;




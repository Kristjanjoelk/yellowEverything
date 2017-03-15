import React, { Component } from 'react';
import LeftArrow from 'react-icons/lib/fa/arrow-left';
import RightArrow from 'react-icons/lib/fa/arrow-right';
import DownArrow from 'react-icons/lib/fa/arrow-down';
import UpArrow from 'react-icons/lib/fa/arrow-up';
import todo from '../../control/todo';
import store from '../../store';
import './Keys.css';


const thing = {
  0: 'left',
  1: 'up',
  2: 'right',
  3: 'down',
};

class Keys extends Component {
    constructor() {
        super();
        this.state = {
            value: 0,
            board: ["", "", "", "", "", "", "", "", ""],
        }
    }

    shouldComponentUpdate (nextProps, nextState) {
        return this.props.value !== nextProps.value;
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
    reset = () => {
        // TODO : Send action to start a new game
        todo.reset(store);
    } 


    render() {
        // const up = 
        // const left = <LeftArrow className="keyboard-arrow" id="left" onClick={() => this.handleLeft()}/>;
        // const down = <DownArrow className="keyboard-arrow" id="down" onClick={() => this.handleDown()}/>;
        // const right = <RightArrow className="keyboard-arrow" id="right" onClick={() => this.handleRight()}/>;
        return (
            <div className="arrow-container">
                {
                    this.state.board.map(function(key, i) {
                        if(i === 1) {
                            return <UpArrow key={i} className="keyboard-arrow" id="up" onClick={() => this.handleUp()}/>;
                        } if(i === 3) {
                            return <LeftArrow key={i} className="keyboard-arrow" id="left" onClick={() => this.handleLeft()}/>;
                        } if(i === 5) {
                            return <RightArrow key={i} className="keyboard-arrow" id="right" onClick={() => this.handleRight()}/>;
                        } if(i === 7) {
                            return <DownArrow key={i} className="keyboard-arrow" id="down" onClick={() => this.handleDown()}/>;
                        } else {
                            return <div key={i} className="keyboard-arrow"></div>
                        }
                    }.bind(this)
                    )}
                <button className="reset-button" onClick={this.reset}>reset</button>
            </div>
        );
    }
}

Keys.propTypes = {
  cur: React.PropTypes.object,
  level: React.PropTypes.object
};


export default Keys;


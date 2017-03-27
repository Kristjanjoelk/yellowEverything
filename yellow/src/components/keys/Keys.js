import React, { Component } from 'react';
import LeftArrow from 'react-icons/lib/fa/arrow-left';
import RightArrow from 'react-icons/lib/fa/arrow-right';
import DownArrow from 'react-icons/lib/fa/arrow-down';
import UpArrow from 'react-icons/lib/fa/arrow-up';
import Reset from 'react-icons/lib/fa/repeat';
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
    // Obviously these four functions are redundant, im just too lazy to fix it
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
    reset() {
        console.log("Hello from reset");
        todo['reset'].down(store);
    } 


    render() {
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
                <Reset className="reset-button" onClick={() => this.reset()} />
            </div>
        );
    }
}

Keys.propTypes = {
  cur: React.PropTypes.object,
  level: React.PropTypes.object
};


export default Keys;


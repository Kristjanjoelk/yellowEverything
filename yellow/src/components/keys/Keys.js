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
    // Prevent updates, this component does not need to update, ... ever
    shouldComponentUpdate (keyboard, nextProps) {
        return keyboard !== nextProps;
    }
    // Obviously these four functions are redundant, im just too lazy to fix it
    handleLeft() {
        todo[thing[0]].down(store);
        setTimeout(function(){ 
            todo[thing[0]].up(store);
        }, 200);
        
    }
    handleRight() {
        todo[thing[2]].down(store);
        setTimeout(function(){ 
            todo[thing[2]].up(store);
        }, 200);
    }
    handleUp() {
        todo[thing[1]].down(store);
        setTimeout(function(){ 
            todo[thing[1]].up(store);
        }, 200);
    }
    handleDown() {
        todo[thing[3]].down(store);
        setTimeout(function(){ 
            todo[thing[3]].up(store);
        }, 200);
    }
    reset() {
        todo['reset'].down(store);
    } 


    render() {
        const keyboard = this.props.keyboard;
        return (
            <div className="arrow-container">
                {
                    this.state.board.map(function(key, i) {
                        if(i === 1) {
                            return <UpArrow key={i} className={keyboard.get('up') ? 'keyboard-arrow-active': 'keyboard-arrow'} id="up" onClick={() => this.handleUp()}/>;
                        } if(i === 3) {
                            return <LeftArrow key={i} className={keyboard.get('left') ? 'keyboard-arrow-active': 'keyboard-arrow'}  id="left" onClick={() => this.handleLeft()}/>;
                        } if(i === 5) {
                            return <RightArrow key={i} className={keyboard.get('right') ? 'keyboard-arrow-active': 'keyboard-arrow'}  id="right" onClick={() => this.handleRight()}/>;
                        } if(i === 7) {
                            return <DownArrow key={i} className={keyboard.get('down') ? 'keyboard-arrow-active': 'keyboard-arrow'}  id="down" onClick={() => this.handleDown()}/>;
                        } else {
                            return <div key={i} className="non-keyboard-arrow"></div>
                        }
                    }.bind(this)
                    )}
                <button>
                    <Reset onClick={() => this.reset()} />
                </button>
            </div>
        );
    }
}

Keys.propTypes = {
  cur: React.PropTypes.object,
  level: React.PropTypes.object,
  keyboard: React.PropTypes.object,
};


export default Keys;


import React from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import store from '../../store';
import actions from '../../actions';
import todo from '../../control/todo';
import Star from 'react-icons/lib/fa/star';
import Ostar from 'react-icons/lib/fa/star-o';
class WinDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.level.option.winState,
        }
    }
    shouldComponentUpdate () {
        return this.props.value !== this.props.level.option.winState;
    }
    gotoNext = () => {
        // TODO : Send action to start a new gam
        const state = store.getState();
        const curLevel = state.get('level');
        const cur = state.get('cur');
        const nextLevel = curLevel.getNextLevel();
        const nextCur = cur.resetPlayer(nextLevel);
        store.dispatch(actions.getNextLevel(nextLevel));
        store.dispatch(actions.resetPlayer(nextCur));
    } 

    reset = () => {
        // TODO : Send action to start a new game
        todo.reset(store);
    } 
    render() {
        let message = this.props.level.option.winState === 1 ? "You won!" : "You lost!";
        return <div>
            {
            (this.props.level.option.winState === 1 || this.props.level.option.winState === 3) &&
            <ModalContainer>
                <ModalDialog>
                <h1>{message}</h1>      
                {this.props.level.option.moveCounter <= this.props.level.option.solution.firstPlace &&  this.props.level.option.winState &&
                    <div>
                         Excellent! <Star/><Star/><Star/>
                    </div>
                }
                {this.props.level.option.solution.thirdPlace[this.props.level.option.moveCounter] && this.props.level.option.winState && 
                    <div>
                         Nice! <Star/><Star/><Ostar/>
                    </div>
                }
                {this.props.level.option.solution.secondPlace[this.props.level.option.moveCounter] && this.props.level.option.winState &&
                    <div>
                         Ok! <Star/><Ostar/><Ostar/>
                    </div>
                }
                <p>With {this.props.level.option.moveCounter} moves</p>
                <button onClick={this.reset} >Try again</button>
                <button onClick={this.gotoNext} disabled={!(this.props.level.option.winState === 1)}>Next level</button>
                </ModalDialog>
            </ModalContainer>
            }
        </div>;
    }
}

WinDialog.propTypes = {
  cur: React.PropTypes.object.isRequired,
  level: React.PropTypes.object.isRequired
};


export default WinDialog;
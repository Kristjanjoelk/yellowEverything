import React, {PropTypes} from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import store from '../../store';
import actions from '../../actions';

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
        // TODO : Send action to start a new game
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
        const state = store.getState();
        const curLevel = state.get('level');
        const cur = state.get('cur');
        const nextLevel = curLevel.reset();
        const nextCur = cur.resetPlayer(nextLevel);
        store.dispatch(actions.resetLevel(nextLevel));
        store.dispatch(actions.resetPlayer(nextCur));
    } 
    render() {
        return <div>
            {
            this.props.level.option.winState &&
            <ModalContainer>
                <ModalDialog>
                <h1>You won!</h1>
                <p>With {this.props.level.option.moveCounter} moves</p>
                <button onClick={this.reset} >Try again</button>
                <button onClick={this.gotoNext} >Next level</button>
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
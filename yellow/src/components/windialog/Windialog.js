import React, {PropTypes} from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import store from '../../store';
import actions from '../../actions';

class WinDialog extends React.Component {

    handleClick = () => {
        // TODO : Send action to start a new game
        const state = store.getState();
        const curLevel = state.get('level');
        const cur = state.get('cur');
        const nextLevel = curLevel.getNextLevel();
        const nextCur = cur.resetPlayer(nextLevel);
        store.dispatch(actions.getNextLevel(nextLevel));
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
                <button>Try again</button>
                <button onClick={this.handleClick} >Next level</button>
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
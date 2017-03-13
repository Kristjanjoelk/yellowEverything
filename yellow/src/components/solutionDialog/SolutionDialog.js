import React from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import Solutionboard from '../gameBoard/SolutionBoard';

// TODO This component should show the solution to a level

class SolutionDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.level.option.winState,
        }
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

SolutionDialog.propTypes = {
  cur: React.PropTypes.object.isRequired,
  level: React.PropTypes.object.isRequired
};


export default SolutionDialog;
import React from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import Solutionboard from '../gameboard/SolutionBoard';

// TODO This component should show the solution to a level

class SolutionDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        }
    }
    shouldComponentUpdate () {
        return this.props.showDialog !== this.props.showDialog;
    }

    openModal = () => {
        this.setState({showModal: true});
    }

    closeModal = () => {
        this.setState({showModal: false});
    }

    render() {
        return <div>
            {
            <ModalContainer>
                <ModalDialog onClose={this.props.onClose} >
                <Solutionboard level={this.props.level} onClose={this.props.onClose} />
                </ModalDialog>
            </ModalContainer>
            }
        </div>;
    }
}

SolutionDialog.propTypes = {
  level: React.PropTypes.object.isRequired,
  onClose: React.PropTypes.func.isRequired,
};


export default SolutionDialog;
import React from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import ProgressBoard from './ProgressBoard';
import './ProgressDialog.css';

class ProgressDialog extends React.Component {

    shouldComponentUpdate() {
        console.log("inside progressDialog component update");
        return false;
    }

    render() {
        return <div>
            {
            <ModalContainer>
                <ModalDialog onClose={this.props.onClose}>
                <h1>Progress</h1>    
                        <div className="progress-dialog">
                        {
                            this.props.progress.option.boards.map(function(row, i) {
                                let temp = {
                                    option: row
                                };
                                return (
                                    <ProgressBoard
                                        key={i}
                                        level={temp}
                                    />
                                )
                            })
                        }
                    </div>
                    <div className="total-moves-container">
                        <hr/>
                        Total moves: {this.props.progress.option.totalMoves}
                    </div>  
                </ModalDialog>
            </ModalContainer>
            }
        </div>;
    }
}

ProgressDialog.propTypes = {
  progress: React.PropTypes.object.isRequired,
};


export default ProgressDialog;
import React from 'react';
import ProgressDialog from './ProgressDialog'; 

export default class ProgressButton extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        }
  }
  openModal = () => {
    this.setState({showModal: true});
  }
  closeModal = () => {
    this.setState({showModal: false});
  }
  render() {
    return <button onClick={this.openModal}>
      Show progress
      {this.state.showModal ?
        <ProgressDialog onClose={this.closeModal} progress={this.props.progress} />
      : null}
    </button>;
  }
}

ProgressButton.propTypes = {
  progress: React.PropTypes.object.isRequired
};

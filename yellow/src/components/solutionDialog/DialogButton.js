import React from 'react';
import SolutionDialog from './SolutionDialog'; 

export default class DialogButton extends React.Component {
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
      Show solution
      {this.state.showModal ?
        <SolutionDialog onClose={this.closeModal} level={this.props.level} />
      : null}
    </button>;
  }
}

DialogButton.propTypes = {
  level: React.PropTypes.object.isRequired
};

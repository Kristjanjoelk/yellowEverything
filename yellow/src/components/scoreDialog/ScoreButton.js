import React from 'react';
import ScoreDialog from './ScoreDialog'; 

export default class ScoreButton extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            value: 1,
        }
  }
  openModal = () => {
    this.setState({showModal: true, value: this.state.value + 1});
  }
  closeModal = () => {
    this.setState({showModal: false});
  }
  render() {
    return <button onClick={this.openModal}>
      High score
      {this.state.showModal ?
        <ScoreDialog onClose={this.closeModal} progress={this.props.progress} state={this.state.value}/>
      : null}
    </button>;
  }
}

ScoreButton.propTypes = {
  progress: React.PropTypes.object.isRequired
};

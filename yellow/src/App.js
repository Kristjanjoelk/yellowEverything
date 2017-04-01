import React, { Component } from 'react';
import Board from './components/gameboard/Board';
import Keys from './components/keys/Keys';
import WinDialog from './components/windialog/Windialog';
// import Options from './components/options/Options';
import { connect } from 'react-redux';
import store from './store';
import DialogButton from './components/solutionDialog/DialogButton';
import './App.css';
import { subscribeRecord } from './unit';

subscribeRecord(store); 

class App extends Component {
  render() {
    return (
        <div className="main-container">
          <p> Yellow Everything! </p>
          <Board cur={this.props.cur} level={this.props.level} progress={this.props.progress}/>
          <Keys/>
          <WinDialog cur={this.props.cur} level={this.props.level}/>
          <DialogButton level={this.props.level} />
        </div>
    );
  }
}

App.propTypes = {
  cur: React.PropTypes.object,
  level: React.PropTypes.object,
  progress: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  cur: state.get('cur'),
  level: state.get('level'),
  progress: state.get('progress')
});

export default connect(mapStateToProps)(App);

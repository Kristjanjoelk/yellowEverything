import React, { Component } from 'react';
import Board from '../../components/gameboard/Board';
import Keys from '../../components/keys/Keys';
import WinDialog from '../../components/windialog/Windialog';
import User from '../../components/user/User';
// import Options from './components/options/Options';
import { connect } from 'react-redux';
import store from '../../store';
import DialogButton from '../../components/solutionDialog/DialogButton';
import ProgressButton from '../../components/progressDialog/ProgressButton';
import './App.css';
import { subscribeRecord } from '../../unit';

subscribeRecord(store); 

class App extends Component {
  
  render() {
    return (
        <div className="main-container">
          <p> Yellow Everything! </p>
          <User auth={this.props.auth} />
          <Board cur={this.props.cur} level={this.props.level} progress={this.props.progress}/>
          <Keys/>
          <WinDialog cur={this.props.cur} level={this.props.level}/>
          <DialogButton level={this.props.level} />
          <ProgressButton progress={this.props.progress} />
        </div>
    );
  }
}

App.propTypes = {
  cur: React.PropTypes.object,
  level: React.PropTypes.object,
  progress: React.PropTypes.object.isRequired,
  auth: React.PropTypes.object,
};

const mapStateToProps = (state) => ({
  cur: state.get('cur'),
  level: state.get('level'),
  progress: state.get('progress'),
  auth: state.get('auth')
});

export default connect(mapStateToProps)(App);

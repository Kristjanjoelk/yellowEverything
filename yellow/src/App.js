import React, { Component } from 'react';
import Board from './components/gameboard/Board';
import Keys from './components/keys/Keys';
import Options from './components/options/Options';
import { connect } from 'react-redux';
import store from './store';
import './App.css';
import { subscribeRecord } from './unit';

subscribeRecord(store); 

class App extends Component {
  render() {
    return (
        <div className="main-container">
          <Options/>
          <p> Yellow Everything! </p>
          <Board cur={this.props.cur} level={this.props.level}/>
          <Keys/>
        </div>
    );
  }
}

App.propTypes = {
  cur: React.PropTypes.object,
  level: React.PropTypes.object
};

const mapStateToProps = (state) => ({
  cur: state.get('cur'),
  level: state.get('level'),
});

export default connect(mapStateToProps)(App);

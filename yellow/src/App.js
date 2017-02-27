import React, { Component } from 'react';
import Board from './components/gameboard/Board';
import { connect } from 'react-redux';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
         <p> Hello world </p>
         <Board width="10" height="10" cur={this.props.cur} level={this.props.level}/>
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

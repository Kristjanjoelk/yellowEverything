import React, { Component } from 'react';
import store from '../../store';
import todo from '../../control/todo';
import './Options.css';

// eslint-disable-next-line


class Options extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: 0,
            columns: 0,
        };
    }

    rowChange(e) {
        this.setState({
            rows: e.target.value,
        })
        todo['rowChange'].rowChange(store, parseInt(e.target.value));
    }
    
    colChange(e) {
        this.setState({
            columns: e.target.value,
        })
        todo['colChange'].colChange(store, parseInt(e.target.value));
    }

    render() {
        return (
            <div>
                <label> Number of rows: <input value={this.state.rows} onChange={this.rowChange.bind(this)} /> </label> <br/>
                <label> Number of columns: <input value={this.state.columns} onChange={this.colChange.bind(this)} /> </label>
             </div>
        )
    };
}


export default Options;

            
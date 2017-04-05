import React, { Component } from 'react';
import store from '../../store';
import actions from '../../actions';
import { logout } from '../../firebase/auth';
import Userlogo from 'react-icons/lib/fa/user';
import {  browserHistory } from 'react-router';
import './User.css';
// eslint-disable-next-line

class User extends Component {

    handleLogOut() {
        logout()
        .then(() => {
            store.dispatch(actions.authentication.logout());
            browserHistory.replace('/login');
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <div className="user-container">
                <button onClick={() => this.handleLogOut()}>
                    <Userlogo/>
                </button>
             </div>
        )
    };
}


export default User;

            
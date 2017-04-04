import React, {
    Component
} from 'react';
import {
    Provider
} from 'react-redux';
import {
    Router,
    Route,
    browserHistory,
    Redirect
} from 'react-router';
import store from '../store';
import App from './app/App';
import Login from './login/login';
import Register from './register/register';
import {
    firebaseAuth
} from '../firebase/config';
import {
    connect
} from 'react-redux';

class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: props.auth.option.isLoggedIn
        }
    }
    componentDidMount() {
        this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
            if (user) {
                console.log(user);
                browserHistory.replace("/");
            } else {
                console.log(user);
                browserHistory.replace("/login");
            }
        })
    }
    componentWillUnmount() {
        this.removeListener()
    }

    render() {
        return this.props.children;
    }

};

Root.propTypes = {
    auth: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.get('auth'),
});

export default connect(mapStateToProps)(Root);
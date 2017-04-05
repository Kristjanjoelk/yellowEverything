import React, {
    Component
} from 'react';
import {
    browserHistory,
} from 'react-router';
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
    // shouldComponentUpdate () {
    //     return this.state.isLoggedIn !== this.props.auth.option.isLoggedIn;
    // }
    componentWillMount() {
        console.log("inside root");
        if (this.state.isLoggedIn) {
            console.log(this.state);
            browserHistory.replace("/");
        } else {
            console.log(this.state)
            browserHistory.replace("/login");
        }
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
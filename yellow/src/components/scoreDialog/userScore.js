import React, { Component } from 'react';


class UserScore extends Component {
    // style() {
    //     return {
    //     }
    // }

    render() {
        return (
            <div className="score-table-row">
                <div className="score-table-element">{this.props.pos}</div>
                <div className="score-table-element">{this.props.user.name}</div>
                <div className="score-table-element">{this.props.user.moves}</div>
                <div className="score-table-element">{this.props.user.numLevels}</div>
            </div>
        );
    } 
}

UserScore.propTypes = {
  user: React.PropTypes.object.isRequired,
  pos: React.PropTypes.number.isRequired,
};

export default UserScore;

            
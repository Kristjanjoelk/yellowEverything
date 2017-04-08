import React from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
// import store from '../../store';
import { getScore } from '../../firebase/data';
import Infinite from 'react-infinite';
import UserScore from './userScore';
import { ref } from '../../firebase/config';
import './ScoreDialog.css';

class ScoreDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            scores: null
        }
    }

    componentDidMount() {
        let tempScore = [];
        let query = ref.child('users').orderByKey();
        query.once('value', function(snapshot) {
                console.log("inner:", snapshot.val());
                snapshot.forEach(function(key, value) {
                    if(key.val().progress && key.val().progress.totalMoves > 0) {
                        let tempUser = {
                            name: key.val().info.name,
                            moves: key.val().progress.totalMoves,
                            numLevels: key.val().progress.boards.length
                        }
                        console.log(key.val());
                        tempScore.push(tempUser);
                    }
                });
                return true;
        }).then(() => {
            this.setState({
                loading: false,
                scores: tempScore
            })
        });
    }


    render() {
        console.log("hello form render() scoreDialog");
        let counter = 0;
        let temp = [];
        
        // let temp = [
        //     {
        //         name: "joel1",
        //         moves: 11,
        //         numLevels: 1

        //     },
        //     {
        //         name: "joel2",
        //         moves: 9,
        //         numLevels: 4

        //     },
        //     {
        //         name: "joel3",
        //         moves: 13,
        //         numLevels: 7

        //     },
        //     {
        //         name: "joel4",
        //         moves: 6,
        //         numLevels: 1

        //     },
        //     {
        //         name: "joel5",
        //         moves: 5,
        //         numLevels: 4

        //     },
        //     {
        //         name: "joel6",
        //         moves: 12,
        //         numLevels: 4

        //     },
        // ]
        if(!this.state.loading) {
            temp = this.state.scores.slice();
            temp.sort(function(a, b) {
                return (a.moves - (a.numLevels * 10)) > (b.moves - (b.numLevels * 10));
            });
        }
            
        return <div>
            {
            <ModalContainer className="score-table-container">
                <ModalDialog onClose={this.props.onClose}>
                <h1>High score</h1> 
                    {
                        this.state.loading ? <h4>...Loading</h4> 
                        : 
                        (
                        <Infinite containerHeight={200} elementHeight={[111]} useWindowAsScrollContainer> 
                        <div className="score-table">
                            <div className="score-table-row">
                                <div className="score-table-element-start">Place</div>
                                <div className="score-table-element-start">Name</div>
                                <div className="score-table-element-start">moves</div>
                                <div className="score-table-element-start">levels</div>
                            </div>
                            {
                                temp.map((user) => {
                                    counter++;
                                    return(<UserScore 
                                                key={counter}
                                                pos={counter}
                                                user={user}
                                            />)
                                    })
                            }
                        </div>
                        </Infinite>
                        )
                    } 
                </ModalDialog>
            </ModalContainer>
            }
        </div>;
    }
}

ScoreDialog.propTypes = {
  progress: React.PropTypes.object.isRequired,
};


export default ScoreDialog;
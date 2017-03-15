import actions from '../../actions';

// Resets current level 

const reset = (store) => {
    const state = store.getState();
    const curLevel = state.get('level');
    const cur = state.get('cur');
    const nextLevel = curLevel.reset();
    const nextCur = cur.resetPlayer(nextLevel);
    store.dispatch(actions.resetLevel(nextLevel));
    store.dispatch(actions.resetPlayer(nextCur));
};



export default reset;
import actions from '../../actions';

const down = (store) => {
    if (store.getState().get('cur') !== null) {
        const state = store.getState();
        const curLevel = state.get('level');
        const prog = state.get('progress')
        const cur = state.get('cur');
        if (curLevel !== null) {
            const previousMap = prog.setPreviousMap();
            if(previousMap !== -1) {
                // const nextLevel = curLevel.setLevel(previousMap.boards[previousMap.currentBoardIndex]);
                const nextLevel = curLevel.reset(previousMap.currentBoardIndex);
                const nextCur = cur.resetPlayer(nextLevel);
                store.dispatch(actions.setPreviousMap(previousMap));
                store.dispatch(actions.resetLevel(nextLevel));
                store.dispatch(actions.resetPlayer(nextCur));
            }
        }
    }
};


export default {
    down
};
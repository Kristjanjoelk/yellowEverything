import actions from '../../actions';

const down = (store) => {
    if (store.getState().get('cur') !== null) {
        const state = store.getState();
        const curLevel = state.get('level');
        const prog = state.get('progress')
        if (curLevel !== null) {
            const previousMap = prog.setPreviousMap();
            if(previousMap !== -1) {
                const nextLevel = curLevel.setLevel(previousMap.boards[previousMap.currentBoardIndex]);
                store.dispatch(actions.setPreviousMap(previousMap));
                // console.log("recived from previousMap", previousMap);
                // console.log("Setting new level as:", previousMap.boards[previousMap.currentBoardIndex]);
                store.dispatch(actions.setLevel(nextLevel));
            }
        }
    }
};


export default {
    down
};
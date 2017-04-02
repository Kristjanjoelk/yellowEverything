// eslint-disable-next-line
import actions from '../../actions';

const down = (store) => {
    if (store.getState().get('cur') !== null) {
        const state = store.getState();
        const curLevel = state.get('level');
        const prog = state.get('progress')
        const cur = state.get('cur');
        if (curLevel !== null) {
            const nextMap = prog.setNextMap();
            if(nextMap !== -1) {
                const nextLevel = curLevel.reset(nextMap.currentBoardIndex);
                console.log("nextLevel:", nextLevel);
                const nextCur = cur.resetPlayer(nextLevel);
                store.dispatch(actions.setNextMap(nextMap));
                store.dispatch(actions.resetLevel(nextLevel));
                store.dispatch(actions.resetPlayer(nextCur));
            }
        }
    }
};


export default {
    down
};
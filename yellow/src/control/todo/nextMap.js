// eslint-disable-next-line
import actions from '../../actions';

const down = (store) => {
    if (store.getState().get('cur') !== null) {
        const state = store.getState();
        const curLevel = state.get('level');
        const prog = state.get('progress')
        if (curLevel !== null) {
            const nextMap = prog.setNextMap();
                console.log("recived from nextmap", nextMap);
                console.log("Setting new level as:", nextMap.boards[nextMap.currentBoardIndex]);
            if(nextMap !== -1) {
                const nextLevel = curLevel.setLevel(nextMap.boards[nextMap.currentBoardIndex]);
                store.dispatch(actions.setNextMap(nextMap));
                store.dispatch(actions.setLevel(nextLevel));
            }
        }
    }
};


export default {
    down
};
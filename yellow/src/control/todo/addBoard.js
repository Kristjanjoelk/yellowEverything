import actions from '../../actions';

const down = (store) => {
    if (store.getState().get('cur') !== null) {
        const state = store.getState();
        const curLevel = state.get('level');
        if (curLevel !== null) {
            const previousMap = curLevel.left(curLevel);
            const nextLevel = curLevel.addLocationValue(next);
            if (nextLevel === -1) {
                store.dispatch(actions.invalidMove(cur.invalidMove()));
                return;
            }
            store.dispatch(actions.movePlayer(next));
            store.dispatch(actions.addValue(nextLevel));
        }
    }
};


export default down;
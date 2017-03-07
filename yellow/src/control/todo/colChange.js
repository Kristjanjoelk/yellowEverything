import actions from '../../actions';

const colChange = (store, value) => {
    if (store.getState().get('level') !== null) {
        const state = store.getState();
        const curLevel = state.get('level');
        if (curLevel !== null) {
            const nextLevel = curLevel.colChange(value);
            store.dispatch(actions.colChange(nextLevel));
        }
    } else {
        console.log("level === null");
    }
    
};

export default {
  colChange,
};
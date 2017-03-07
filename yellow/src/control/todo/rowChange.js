import actions from '../../actions';

const rowChange = (store, value) => {
      if (store.getState().get('level') !== null) {
        const state = store.getState();
        const curLevel = state.get('level');
        if (curLevel !== null) {
            const nextLevel = curLevel.rowChange(value);
            store.dispatch(actions.rowChange(nextLevel));
        }
    } else {
        console.log("level === null");
    }
};

export default {
  rowChange,
};
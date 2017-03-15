import actions from '../../actions';

const down = (store) => {
  store.dispatch(actions.keyboard.right(true));
  if (store.getState().get('cur') !== null) {
    const state = store.getState();
    const cur = state.get('cur');
    const curLevel = state.get('level');
    if (cur !== null) {
      const next = cur.right(curLevel);
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

const up = (store) => {
  store.dispatch(actions.keyboard.right(false));
};


export default {
  down,
  up,
};


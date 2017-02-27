import actions from '../../actions';

const down = (store) => {
  store.dispatch(actions.keyboard.right(true));
  if (store.getState().get('cur') !== null) {
      const state = store.getState();
      const cur = state.get('cur');
      const curLevel = state.get('level');
      if (cur !== null) {
         const next = cur.right();
         const nextLevel = curLevel.addLocationValue(next.location);
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


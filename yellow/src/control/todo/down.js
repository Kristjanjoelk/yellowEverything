import actions from '../../actions';

const down = (store) => {
  store.dispatch(actions.keyboard.down(true));
  if (store.getState().get('cur') !== null) {
      const state = store.getState();
      const cur = state.get('cur');
      if (cur !== null) {
         const next = cur.down();
         store.dispatch(actions.movePlayer(next));
      }
  }
};

const up = (store) => {
  store.dispatch(actions.keyboard.down(false));
};


export default {
  down,
  up,
};
import actions from '../../actions';

const down = (store) => {
  store.dispatch(actions.keyboard.up(true));
  if (store.getState().get('cur') !== null) {
      const state = store.getState();
      const cur = state.get('cur');
      const curLevel = state.get('level');
      if (cur !== null) {
         const next = cur.up(curLevel);
         const nextLevel = curLevel.addLocationValue(next);
         if(nextLevel === -1) {return;}
         store.dispatch(actions.movePlayer(next));
         store.dispatch(actions.addValue(nextLevel));
      }
  }
};

const up = (store) => {
  store.dispatch(actions.keyboard.up(false));
};


export default {
  down,
  up,
};


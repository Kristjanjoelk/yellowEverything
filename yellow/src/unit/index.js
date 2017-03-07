import StorageKey from './const';


const unit = {
  subscribeRecord(store) {
    store.subscribe(() => {
      let data = store.getState().toJS();
      if (data.lock) {
        return;
      }
      data = JSON.stringify(data);
      data = encodeURIComponent(data);
      if (window.btoa) {
        data = btoa(data);
      }
      localStorage.setItem(StorageKey, data);
    });
  },
};

module.exports = unit;
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const composedCreateStore = compose(
  applyMiddleware(thunk),
  // todo error !!! 只支持 chrome 插件, 如果没有打开chrome react 插件,compose会apply失败!!!
    window.devToolsExtension ? window.devToolsExtension && window.devToolsExtension():null
)(createStore);

function configureStore(initialState = {}) {
  // store => reducers && initialState
  const store = composedCreateStore(reducers, initialState);

  return store;
}

export default configureStore;
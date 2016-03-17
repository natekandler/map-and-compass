import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index';

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore)

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState)
}
//twentyspokes
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../modules';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import DevTools from '../../components/DevTools/DevTools';

const finalCreateStore = compose(
    applyMiddleware(promiseMiddleware()),
    DevTools.instrument()
)(createStore);


export default function configureStore(initialState = {}){
  const store = finalCreateStore(rootReducer, initialState);

  //Webpack support for hot reloading of reducers
  if (module.hot) {
    module.hot.accept('../modules', () =>
      store.replaceReudcer(require('../modules'))
    );
  }

  return store;
}

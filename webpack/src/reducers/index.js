import { combineReducers } from 'redux';
import pagesReducer from './pages_reducer';

const rootReducer = combineReducers({
  pages: pagesReducer
})

export default rootReducer;

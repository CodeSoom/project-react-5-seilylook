import { combineReducers } from 'redux';
import auth from '../library/api/auth';
import loading from './loading';

const rootReducer = combineReducers({
  auth,
  loading,
});

export default rootReducer;

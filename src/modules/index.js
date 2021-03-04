import { combineReducers } from "redux";
import login from './login';
import loading from './loadings';

const rootReducer = combineReducers({
  login,
  loading,
});



export default rootReducer;
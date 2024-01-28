import { combineReducers } from "redux";
import headerReducer from '../common/header/store/reducer.js';

export default combineReducers({
    header: headerReducer
});
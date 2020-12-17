import { combineReducers } from "redux";
import board from './boards'
import lists from './lists';
import card from './card';
import myinfo from './myinfo';
import login from './login';
import signup from './signup';
import validate from './validate';

//리듀서가 여러 개일 때 리듀서를 하나로 합치는 작업
const rootReducer = combineReducers({
    board,
    lists,
    card,
    myinfo,
    login,
    signup,
    validate,
});
export default rootReducer;
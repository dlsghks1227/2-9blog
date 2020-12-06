import { combineReducers } from "redux";
import board from './boards';
import myinfo from './myinfo';

//리듀서가 여러 개일 때 리듀서를 하나로 합치는 작업
const rootReducer = combineReducers({
    board,
    myinfo

});
//board == createReducer

export default rootReducer;
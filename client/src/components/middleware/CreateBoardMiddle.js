import React from 'react';
import ReduxThunk from 'redux-thunk';
import store from 'store';
import {createBoard} from '../../store/reducer/boards';

export const passActionAsync = (title) => async dispatch =>{
    const action = await createBoard(title);
    
    console.log("액션",action);
    console.log("load", action.payload);
    setTimeout(()=> dispatch(action),1000);
}
//createBoard는 action을 받는다.
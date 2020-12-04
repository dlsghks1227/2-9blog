import React from 'react';
import ReduxThunk from 'redux-thunk'

//next ==> sotre dispatch랑 비슷한 역할 함
const loggerMiddleware = store => next => actions =>{
 
    console.log("현재 상태", store.getState());
    console.log("액션", actions);
    
}

export default loggerMiddleware;
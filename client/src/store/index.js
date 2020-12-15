import {applyMiddleware, createStore,Store,compose} from 'redux'
import rootReducer from './reducer/ReducerIndex'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import ReduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const persistConfig ={
    key:'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

//persisted, reducer 설정
export default()=>{
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(persistedReducer, composeEnhancer(applyMiddleware(ReduxThunk)));
    const persistor = persistStore(store);
    return {store,persistor}
}
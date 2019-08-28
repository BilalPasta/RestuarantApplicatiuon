
import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Getdata}from './Reducer/index';
const store = createStore(
    combineReducers ({
        Appdata:Getdata
    }),
    {},
    applyMiddleware(thunk)
);
export default  store;
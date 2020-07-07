import { combineReducers } from 'redux';
import items from './items';
import main from './main';


const rootReducer = combineReducers({items, main});


export default rootReducer;
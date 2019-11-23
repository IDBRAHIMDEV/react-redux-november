import { combineReducers } from 'redux';
import postReducer from './postReducer';
import albumReducer from './albumReducer';


export default combineReducers({
        post: postReducer,
        album: albumReducer
})

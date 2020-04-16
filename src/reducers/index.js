import {ADD_ARTICLE} from "../constants/Actiontypes";

/* import {combineReducers} from 'redux';
import UserReducer from './Reducersuser';

const allReducers = combineReducers({
    users: UserReducer
});

export default allReducers; */


const initialState = {
    articles: []
};
function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });

    }
    return state;
};

export default rootReducer;  
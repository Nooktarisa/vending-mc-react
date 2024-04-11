import { combineReducers } from 'redux';
import { ADD_CREDIT, ENTER_CODE, RESET_COIN } from './actions';

const initialCoin = 0;

const coinReducer = (state = initialCoin, action) => {
    switch (action.type) {
        case ADD_CREDIT:
            return state + action.payload;
        case RESET_COIN:
            return initialCoin;
        default:
            return state;
    }
};

const codeReducer = (state = '', action) => {
    switch (action.type) {
        case ENTER_CODE:
            return action.payload;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    coin: coinReducer,
    code: codeReducer,
});
export default rootReducer;
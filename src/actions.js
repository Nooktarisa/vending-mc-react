export const ADD_CREDIT = 'ADD_CREDIT';
export const ENTER_CODE = 'ENTER_CODE';
export const RESET_COIN = 'RESET_COIN';

export const addCredit = (amount) => ({
    type: ADD_CREDIT,
    payload: amount,
});

export const enterCode = (code) => ({
    type: ENTER_CODE,
    payload: code,
});

export const resetCoin = () => ({
    type: RESET_COIN,
});
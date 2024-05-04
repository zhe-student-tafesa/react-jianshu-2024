import * as constants from './constants.js';
import axios from 'axios';

export const searchFocus = () => {
    return {
        type: constants.SEARCH_FOCUS
    }
};

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});

export const getList = () => {
    return (dispatch) => axios.get('./api/headerList.json').then((res) => {
        console.log(res.data.data);
    }).catch()
};

export const updateList = () => ({
    type: constants.SEARCH_BLUR
});




import * as constants from './constants.js';
import axios from 'axios';
import { fromJS } from 'immutable';

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
        // console.log(res.data.data);
        const action = changeList(fromJS(res.data.data));
        dispatch(action);
    }).catch(() => {
        console.log('error');
    })
};

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: data
});




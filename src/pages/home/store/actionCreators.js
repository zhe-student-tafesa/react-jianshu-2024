import * as constants from './constants.js';
import axios from 'axios';
import { fromJS } from 'immutable';

export const searchFocus = () => {
    return {
        type: constants.SEARCH_FOCUS
    }
};

export const getList = () => {
    return (dispatch) => axios.get('./api/headerList.json').then((res) => {
        // console.log(res.data.data);
        const totalPage = Math.ceil(res.data.data.length / 10);
        // const action = changeList(fromJS(res.data.data), totalPage);
        // dispatch(action);
    }).catch(() => {
        console.log('error');
    })
};






import * as constants from './constants.js';
import axios from 'axios';

const changeDetail = (data) => {
    return {
        type: constants.CHANGE_DETAIL,
        title: data.title,
        content: data.content,
    }
};



export const getDetail = () => {
    return (dispatch) => axios.get('http://localhost:3000/api/detail.json').then((res) => {
        const result = res.data.data;
        const action = changeDetail(result);
        dispatch(action);
    }).catch((err) => {
        console.log(err);
        console.log("res.data.data err");
    });
};






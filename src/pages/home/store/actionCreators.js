import * as constants from './constants.js';
import axios from 'axios';

const changeHomeData = (data) => {
    return {
        type: constants.CHANGE_HOME_DATA,
        topicList: data.topicList,
        articleList: data.articleList,
        recommendList: data.recommendList
    }
};

export const getHomeData = () => {
    return (dispatch) => axios.get('./api/home.json').then((res) => {
        const data = res.data.data;
        const action = changeHomeData(data);
        dispatch(action);
    }).catch((err) => {
        console.log(err);
        console.log("res.data.data err");
    });
};






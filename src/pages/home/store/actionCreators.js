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

const addArticleData = (result, newArticlePage) => {
    return {
        type: constants.ADD_ARTICLE_DATA,
        articleList: result.articleList,
        newArticlePage: newArticlePage
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

export const getMoreArticleData = (articlePage) => {
    return (dispatch) => axios.get('./api/homeMoreArticle.json?page=' + articlePage).then((res) => {
        const result = res.data.data;
        const action = addArticleData(result, articlePage + 1);
        dispatch(action);
    }).catch((err) => {
        console.log(err);
        console.log("res.data.data err");
    });
};






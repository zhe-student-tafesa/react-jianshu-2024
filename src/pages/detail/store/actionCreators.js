import * as constants from './constants.js';
import axios from 'axios';

// const changeHomeData = (data) => {
//     return {
//         type: constants.CHANGE_HOME_DATA,
//         topicList: data.topicList,
//         articleList: data.articleList,
//         recommendList: data.recommendList
//     }
// };



// export const getMoreArticleData = (articlePage) => {
//     return (dispatch) => axios.get('./api/homeMoreArticle.json?page=' + articlePage).then((res) => {
//         const result = res.data.data;
//         const action = addArticleData(result, articlePage + 1);
//         dispatch(action);
//     }).catch((err) => {
//         console.log(err);
//         console.log("res.data.data err");
//     });
// };






import { constants } from "./index.js";
import { fromJS } from "immutable";

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: true
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {

        case constants.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList)
            });
        case constants.ADD_ARTICLE_DATA:
            return state.merge({
                articleList: state.get("articleList").concat(fromJS(action.articleList)),
                articlePage: action.newArticlePage
            });
        case constants.TOGGLE_SCROLL_SHOW:
            return state.merge({
                showScroll: action.showScroll
            });
        default:
            return state;
    }
}

export default reducer;
import { constants } from "./index.js";
import { fromJS } from "immutable";

const defaultState = fromJS({
    title: "Vikings enjoyed cinnamon buns",
    content: '<img src="https://live-production.wcms.abc-cdn.net.au/51290378bd8f3540cf9f11c7190eadd5?impolicy=wcms_crop_resize&cropH=2813&cropW=5000&xPos=0&yPos=260&width=862&height=485" /><p>Why is vanilla a byword for <b>boring</b>? How did peppercorns end up next to salt on every western table? Did you know the Vikings were rather partial to cinnamon buns? Food writer Eleanor Ford explores the rich history of spices.</p><p>Why is vanilla a byword for <b>boring</b>? How did peppercorns end up next to salt on every western table? Did you know the Vikings were rather partial to cinnamon buns? Food writer Eleanor Ford explores the rich history of spices.</p><p>Why is vanilla a byword for <b>boring</b>? How did peppercorns end up next to salt on every western table? Did you know the Vikings were rather partial to cinnamon buns? Food writer Eleanor Ford explores the rich history of spices.</p>'
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {

        case constants.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList)
            });

        default:
            return state;
    }
}

export default reducer;
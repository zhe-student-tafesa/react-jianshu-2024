import { constants } from "./index.js";
import { fromJS } from "immutable";

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: 'Politics',
        topicURL: 'https://www.abc.net.au/news/politics',
        imgURL: 'https://live-production.wcms.abc-cdn.net.au/8aaf0bdc368edcd31c9d6ed064c83c27?impolicy=wcms_crop_resize&cropH=3333&cropW=5000&xPos=0&yPos=0&width=862&height=575'
    }, {
        id: 2,
        title: 'World News',
        topicURL: 'https://www.abc.net.au/news/world',
        imgURL: 'https://live-production.wcms.abc-cdn.net.au/8149fe5dfd76d16d5f5eedb30461a35c?impolicy=wcms_crop_resize&cropH=1080&cropW=1920&xPos=0&yPos=0&width=862&height=485'
    }, {
        id: 3,
        title: 'Business',
        topicURL: 'https://www.abc.net.au/news/business',
        imgURL: 'https://live-production.wcms.abc-cdn.net.au/0ff9b8564b8bb7d136fbc56b3c02c72e?impolicy=wcms_crop_resize&cropH=1920&cropW=3413&xPos=0&yPos=259&width=862&height=485'
    }, {
        id: 4,
        title: 'Sport',
        topicURL: 'https://www.abc.net.au/news/sport',
        imgURL: 'https://live-production.wcms.abc-cdn.net.au/40e4274d9ceb580ed474b641d2c9d1f2?impolicy=wcms_crop_resize&cropH=2411&cropW=4286&xPos=0&yPos=144&width=862&height=485'
    }, {
        id: 5,
        title: 'Science',
        topicURL: 'https://www.abc.net.au/news/science',
        imgURL: 'https://live-production.wcms.abc-cdn.net.au/86864e174f824d0593470007f9aa5e15?impolicy=wcms_crop_resize&cropH=1193&cropW=2121&xPos=0&yPos=110&width=862&height=485'
    }, {
        id: 6,
        title: 'Entertainment',
        topicURL: 'https://www.abc.net.au/news/entertainment',
        imgURL: 'https://live-production.wcms.abc-cdn.net.au/9ccab8595f1a17d675225209dc746d67?impolicy=wcms_crop_resize&cropH=1277&cropW=2270&xPos=96&yPos=1018&width=862&height=485'
    }, {
        id: 7,
        title: 'Health',
        topicURL: 'https://www.abc.net.au/news/health',
        imgURL: 'https://live-production.wcms.abc-cdn.net.au/d679ebcc632ac3500a8c43ab4cb32579?impolicy=wcms_crop_resize&cropH=2813&cropW=5000&xPos=0&yPos=511&width=862&height=485'
    }
    ],
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {

        case constants.CHANGE_PAGE:
            return state.set('page', action.page);
        default:
            return state;
    }
}

export default reducer;
import { constants } from "./index.js";
import { fromJS } from "immutable";

const defaultState = fromJS({
    list: [{
        id: 1,
        title: 'Politics',
        imgURL: 'https://live-production.wcms.abc-cdn.net.au/8aaf0bdc368edcd31c9d6ed064c83c27?impolicy=wcms_crop_resize&cropH=3333&cropW=5000&xPos=0&yPos=0&width=862&height=575'
    }, {
        id: 2,
        title: 'World News',
        imgURL: 'https://live-production.wcms.abc-cdn.net.au/8149fe5dfd76d16d5f5eedb30461a35c?impolicy=wcms_crop_resize&cropH=1080&cropW=1920&xPos=0&yPos=0&width=862&height=485'
    }],
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
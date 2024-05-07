import { constants } from "./index.js";
import { fromJS } from "immutable";

const defaultState = fromJS({
    title: "",
    content: ""
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {

        case constants.CHANGE_DETAIL:
            return state.merge({
                title: action.title,
                content: action.content,
            });

        default:
            return state;
    }
}

export default reducer;
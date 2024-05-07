import { constants } from "./index.js";
import { fromJS } from "immutable";

const defaultState = fromJS({
    login: false,
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {

        case constants.CHANGE_LOGIN:
            return state.merge({
                login: action.login,
            });
        case constants.CHANGE_LOGOUT:
            return state.merge({
                login: action.login,
            });

        default:
            return state;
    }
}

export default reducer;
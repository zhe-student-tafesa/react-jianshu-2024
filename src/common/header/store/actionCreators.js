import * as constants from './constants.js'

export const searchFocus = () => {
    return {
        type: constants.SEARCH_FOCUS
    }
};

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});




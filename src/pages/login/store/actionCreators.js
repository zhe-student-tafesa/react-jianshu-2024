import * as constants from './constants.js';
import axios from 'axios';

const changeLogin = () => {
    return {
        type: constants.CHANGE_LOGIN,
        login: true
    }
};



export const login = (account, password) => {
    // todo : use post
    return (dispatch) => axios.get('http://localhost:3000/api/login.json?account=' + account + '&password=' + password).then((res) => {
        const result = res.data.data;
        if (result) {
            console.log(res);
            const action = changeLogin();
            dispatch(action);
        }

    }).catch((err) => {
        console.log(err);
        console.log("res.data.data err");
    });
};

export const logout = () => {
    return {
        type: constants.CHANGE_LOGOUT,
        login: false
    }
};





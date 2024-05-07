import React, { PureComponent } from "react";
import { Button, Input, LoginBox, LoginWrapper } from "./style";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { Navigate } from "react-router-dom";

class Login extends PureComponent {
    render() {
        const { loginStatus } = this.props;
        if (!loginStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="Account" ref={(input) => { this.account = input }}></Input>
                        <Input placeholder="Password" ref={(input) => { this.password = input }} type='password'></Input>
                        <Button onClick={() => this.props.login(this.account, this.password)}>Log in</Button>
                    </LoginBox>
                </LoginWrapper>
            );
        } else {
            return <Navigate to='/' />
        }

    }

}
const mapStateToProps = (state) => {
    return {
        loginStatus: state.getIn(['login', 'login']),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login(accountEle, passwordEle) {
            const action = actionCreators.login(accountEle.value, passwordEle.value);
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login); 
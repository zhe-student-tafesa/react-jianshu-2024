import React, { PureComponent } from "react";
import { Button, Input, LoginBox, LoginWrapper } from "./style";
import { connect } from "react-redux";
import { actionCreators } from "./store";

class Login extends PureComponent {
    render() {
        const { title, content } = this.props;
        return (
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder="Account"></Input>
                    <Input placeholder="Password"></Input>
                    <Button>Log in</Button>
                </LoginBox>
            </LoginWrapper>
        );
    }
    componentDidMount() {
        this.props.getDetail();
    }
}
const mapStateToProps = (state) => {
    return {
        title: state.getIn(['detail', 'title']),
        content: state.getIn(['detail', 'content']),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getDetail() {
            const action = actionCreators.getDetail();
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login); 
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

class PostArticle extends PureComponent {
    render() {
        const { loginStatus } = this.props;
        if (loginStatus) {
            return (
                <div>
                    Start making money by writing articles! !
                </div>
            );
        } else {
            return <Navigate to='/login' />
        }

    }

}
const mapStateToProps = (state) => {
    return {
        loginStatus: state.getIn(['login', 'login']),
    }
}

export default connect(mapStateToProps, null)(PostArticle); 
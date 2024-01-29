import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { actionCreators } from './store/index.js'
import {
    Addition,
    Button,
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    Search,
    SearchWraper
} from "./style";

class Header extends Component {

    render() {
        return (
            <HeaderWrapper>
                <Logo></Logo>
                <Nav>
                    <NavItem className="left active">Home page</NavItem>
                    <NavItem className="left">Download App</NavItem>
                    <NavItem className="right">Login</NavItem>
                    <NavItem className="right">
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWraper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <Search
                                className={this.props.focused ? "focused" : ""}
                                onFocus={this.props.handleSearchFocus}
                                onBlur={this.props.handleSearchBlur}
                            >
                            </Search>
                        </CSSTransition>
                        <span className={this.props.focused ? "focused iconfont" : "iconfont"}    >
                            &#xe637;
                        </span>
                    </SearchWraper>

                    <Addition>
                        <Button className="writing">
                            <span className="iconfont">&#xe708;</span>
                            Write an article
                        </Button>
                        <Button className="reg">Register</Button>
                    </Addition>
                </Nav>

            </HeaderWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.header.focused
    };
}

const mapStateToDispatch = (dispatch) => {
    return {
        handleSearchFocus() {
            //console.log('15999');
            const action = actionCreators.searchFocus();
            dispatch(action);
        },
        handleSearchBlur() {
            const action = actionCreators.searchBlur();
            dispatch(action);
        }

    };
}

export default connect(mapStateToProps, mapStateToDispatch)(Header);
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
    SearchItemWrapper,
    SearchListShow,
    SearchSwitch,
    SearchTitle,
    SearchWraper,
    SearchItem
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
                        {this.showListArea(this.props.focused)}
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
    // put the function outside of Header
    showListArea(show) {
        if (show) {
            return (
                <SearchListShow>
                    <SearchTitle>
                        Hot searches
                        <SearchSwitch>Change another batch</SearchSwitch>
                    </SearchTitle>

                    <SearchItemWrapper>
                        <SearchItem>
                            EDU
                        </SearchItem>
                        <SearchItem>
                            EDU
                        </SearchItem>
                        <SearchItem>
                            EDU
                        </SearchItem>
                        <SearchItem>
                            EDU
                        </SearchItem>
                        <SearchItem>
                            EDU
                        </SearchItem>
                        <SearchItem>
                            EDU
                        </SearchItem>
                    </SearchItemWrapper>
                </SearchListShow>
            );
        } else {
            return null;
        }

    }

}

const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused')
    };
}

const mapStateToDispatch = (dispatch) => {
    return {
        handleSearchFocus() {
            //console.log('15999');
            const actionGetList = actionCreators.getList();
            dispatch(actionGetList);
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
import React, { PureComponent } from "react";
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

class Header extends PureComponent {

    render() {
        const { focused, list, handleSearchFocus, handleSearchBlur } = this.props; // new

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
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <Search
                                className={focused ? "focused" : ""}
                                onFocus={() => handleSearchFocus(list)}
                                onBlur={handleSearchBlur}
                            >
                            </Search>
                        </CSSTransition>
                        <span className={focused ? "focused iconfont zoom" : "iconfont zoom"}    >
                            &#xe637;
                        </span>
                        {this.showListArea()}
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

    showListArea() {
        const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, changePage } = this.props; // new
        const pageList = [];
        const newList = list.toJS();
        if (newList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(<SearchItem key={newList[i]}>
                    {newList[i]}
                </SearchItem>);
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchListShow onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <SearchTitle>
                        Hot searches
                        <SearchSwitch onClick={() => changePage(page, totalPage, this.spinIcon)}>
                            <span ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe851;</span>Change another batch
                        </SearchSwitch>
                    </SearchTitle>

                    <SearchItemWrapper>
                        {pageList}
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
        focused: state.get('header').get('focused'),
        list: state.get('header').get('list'),
        page: state.get('header').get('page'),
        totalPage: state.get('header').get('totalPage'),
        mouseIn: state.get('header').get('mouseIn'),
    };
}

const mapStateToDispatch = (dispatch) => {
    return {
        handleSearchFocus(list) {
            console.log(list.size);
            if (list.size === 0) {
                const actionGetList = actionCreators.getList();
                dispatch(actionGetList);
            }

            const action = actionCreators.searchFocus();
            dispatch(action);
        },
        handleSearchBlur() {
            const action = actionCreators.searchBlur();
            dispatch(action);
        },
        handleMouseEnter() {
            const action = actionCreators.mouseEnter();
            dispatch(action);
        },
        handleMouseLeave() {
            const action = actionCreators.mouseLeave();
            dispatch(action);
        },
        changePage(page, totalPage, icon) {
            // console.log(icon);
            // add animation : use DOM
            // get number from STRING
            let originalDeg = icon.style.transform.replace(/[^0-9]/ig, '');
            if (originalDeg) {
                originalDeg = parseInt(originalDeg, 10);
            } else {// first time: 0
                originalDeg = 0;
            }
            originalDeg = originalDeg + 360;
            icon.style.transform = 'rotate(' + originalDeg + 'deg)';

            if (page < totalPage) {
                const action = actionCreators.changePage(page + 1);
                dispatch(action);
            } else {
                const action = actionCreators.changePage(1);
                dispatch(action);
            }

        }

    };
}

export default connect(mapStateToProps, mapStateToDispatch)(Header);
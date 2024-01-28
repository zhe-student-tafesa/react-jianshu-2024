import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
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
    constructor(props) {
        super(props);
        this.state = {
            focused: false
        };
        this.handleSearchFocus = this.handleSearchFocus.bind(this);
        this.handleSearchBlur = this.handleSearchBlur.bind(this);
    }
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
                            in={this.state.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <Search
                                className={this.state.focused ? "focused" : ""}
                                onFocus={this.handleSearchFocus}
                                onBlur={this.handleSearchBlur}
                            >
                            </Search>
                        </CSSTransition>
                        <span className={this.state.focused ? "focused iconfont" : "iconfont"}    >
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
    handleSearchFocus() {
        this.setState({
            focused: true
        });
    }
    handleSearchBlur() {
        this.setState({
            focused: false
        });
    }
}

export default Header;
import React, { Component } from "react";
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
        }
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
                        <Search className={this.state.focused ? "aaa" : "bbb"}></Search>
                        <span className="iconfont">&#xe637;</span>
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

export default Header;
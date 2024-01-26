import styled from 'styled-components';
import logoImg from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: solid #f0f0f0 1px 
`;

export const Logo = styled.a.attrs({ href: '/' })`
    position: absolute;
    display: block;
    height: 56px;
    width: 100px;
    background: url(${logoImg});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 945px;
    height: 100%;
    margin: 0 auto;
    padding-right: 80px;
    box-sizing: border-box;
`;

export const NavItem = styled.div`
    height: 38px;
    line-height:38px;
    margin-top: 9px;
    padding: 0 20px;
    font-size: 17px;
    color: #333;
    &.left{
        float: left
    }
    &.right{
        float: right
    }
    &.active{
        color: #ea6f5a;
    }
`;

export const Search = styled.input.attrs({ placeholder: "Search" })`
    width: 160px;
    height: 38px;
    margin: 9px;
    padding: 0 15px;
    box-sizing: border-box;
    border: none;
    border-line: none;
    border-radius: 19px;
    background: #eee;
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;

export const Button = styled.div`
    float: right;
    height: 38px;
    line-height: 38px;
    border-radius: 19px;
    margin-top: 9px;
    margin-right: 15px;
    padding: 0 15px;
    border: 1px solid rgba(236,97,73,.7);
    color: rgba(236,97,73,.7);
    font-size: 15px;
    &.reg{
        color: #ec6149;
    }
    &.writing{
        color: #fff;
        background: rgba(236,97,73,.7);
    }
`;
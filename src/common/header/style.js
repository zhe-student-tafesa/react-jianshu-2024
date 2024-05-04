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
    padding: 0 40px 0 15px;
    box-sizing: border-box;
    border: none;
    border-line: none;
    border-radius: 19px;
    background: #eee;
    color: #777;
    &::placeholder{
        color: #999
    }
    &.focused{
        width: 240px;
    }
`;

export const SearchWraper = styled.div`
    float: left;
    position: relative;
    .slide-enter {
        transition: all 200 ease-out;
    }
    .slide-enter-active {
        width: 240px;
    }
    .slide-exit {
        transition: all 200 ease-out;
    }
    .slide-exit-active {
        width: 160px;
    }
    .iconfont{
        position: absolute;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        right: 15px;
        bottom: 13px;
        
        text-align: center;
        &.focused{
            background: #777;
            color: white;
        }
    }

`;

export const SearchListShow = styled.div`
    position: absolute;
    top: 56px;
    left: 0;
    width: 240px;
    padding-right: 15px;
    padding-top: 7px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`;
// background: green;   No:  float: left;
export const SearchTitle = styled.div`

    margin-left: 15px;
    margin-bottom: 10px;
    line-height: 20px;
    font-size: 14px;
    color: #969696
`;

export const SearchSwitch = styled.span`
    float: right;
    font-size: 13px;
    color: #aaa;
`;

export const SearchItemWrapper = styled.div`
    overflow: hidden;
    padding: 0 15px;
`;

export const SearchItem = styled.a`
    float: left;
    display: block;
    padding: 0 5px;
    margin-right: 10px;
    margin-bottom: 10px;
    font-size: 12px;
    line-height: 20px;
    color: #787878;
    border-radius: 3px;
    border: 1px solid #ddd

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
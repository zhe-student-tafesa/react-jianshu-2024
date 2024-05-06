import React, { Component } from "react";
import { BackTop, HomeLeft, HomeRight, HomeWrapper } from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend.js";
import Writer from "./components/Writer.js";
import { connect } from "react-redux";
import { actionCreators } from "./store/index.js";
class Home extends Component {
    render() {
        const { showScroll } = this.props;
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="https://learn.tafesa.edu.au/pluginfile.php/1/theme_snap/coverimage/1674017255/site-image.jpg" alt="" />
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
                {showScroll ? <BackTop onClick={this.handleScrollTop}>Back to top</BackTop> : null}

            </HomeWrapper>
        );
    }
    handleScrollTop() {
        window.scrollTo(0, 0);
    }
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }
    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollShow);
    }
}
const mapStateToProps = (state) => {
    return {
        showScroll: state.getIn(['home', 'showScroll']),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeHomeData() {
            const action = actionCreators.getHomeData();
            dispatch(action);
        },
        changeScrollShow() {
            //console.log(document.documentElement.scrollTop);
            if (document.documentElement.scrollTop > 150) {
                const action = actionCreators.toggleScrollShow(true);
                dispatch(action);
            } else {
                const action = actionCreators.toggleScrollShow(false);
                dispatch(action);
            }
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
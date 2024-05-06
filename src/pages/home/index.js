import React, { Component } from "react";
import { HomeLeft, HomeRight, HomeWrapper } from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend.js";
import Writer from "./components/Writer.js";
import { connect } from "react-redux";
import { actionCreators } from "./store/index.js";
class Home extends Component {
    render() {
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
            </HomeWrapper>

        );
    }
    componentDidMount() {
        this.props.changeHomeData();

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeHomeData() {
            const action = actionCreators.getHomeData();
            dispatch(action);
        }
    }

}
export default connect(null, mapDispatchToProps)(Home);
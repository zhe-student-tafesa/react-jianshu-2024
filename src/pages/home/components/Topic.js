import React, { Component } from "react";
import { TopicItem, TopicWrapper } from "../style";
import { connect } from "react-redux";

class Topic extends Component {
    render() {
        const { topicList } = this.props;
        return (
            <TopicWrapper>
                {topicList.map((item) => {
                    return (<TopicItem key={item.get('id')}>
                        <img className="topic-pic" src={item.get('imgURL')} alt="" />
                        {item.get('title')}
                    </TopicItem>);
                })}


            </TopicWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        topicList: state.get('home').get('topicList')
    };
};

export default connect(mapStateToProps, null)(Topic);
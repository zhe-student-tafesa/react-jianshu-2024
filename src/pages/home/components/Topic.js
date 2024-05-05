import React, { Component } from "react";
import { TopicItem, TopicWrapper } from "../style";
import { connect } from "react-redux";

class Topic extends Component {
    render() {
        const { list } = this.props;
        return (
            <TopicWrapper>
                {list.map((item) => {
                    return (<TopicItem key={item.get('id')}>
                        <img className="topic-pic" src={item.get('imgURL')} />
                        {item.get('title')}
                    </TopicItem>);
                })}


            </TopicWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.get('home').get('list')
    };
};

export default connect(mapStateToProps, null)(Topic);
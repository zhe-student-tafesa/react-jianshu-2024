import React, { Component } from "react";
import { ListInfo, ListItem } from "../style";
import { connect } from "react-redux";

class List extends Component {
    render() {
        const { articleList } = this.props;
        return (
            <div>
                {articleList.map((item) => {
                    return (<ListItem key={item.get('id')}>
                        <img className="list-pic" src={item.get('imgURL')} alt="" />
                        <ListInfo>
                            <h3 className="title">{item.get('title')}</h3>
                            <p className="desc">{item.get('desc')}</p>
                        </ListInfo>
                    </ListItem>);
                })}


            </div>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        articleList: state.getIn(['home', 'articleList'])
    };
}
export default connect(mapStateToProps, null)(List); 
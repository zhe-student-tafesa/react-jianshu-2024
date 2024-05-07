import React, { PureComponent } from "react";
import { ListInfo, ListItem, LoadMoreButton } from "../style";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

class List extends PureComponent {
    render() {
        const { articleList, loadMoreArticle, articlePage } = this.props;
        return (
            <div>
                {articleList.map((item, index) => {
                    return (
                        <Link key={index} to={'./detail'}>
                            < ListItem >
                                <img className="list-pic" src={item.get('imgURL')} alt="" />
                                <ListInfo>
                                    <h3 className="title">{item.get('title')}</h3>
                                    <p className="desc">{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        </Link >
                    );
                })
                }
                <LoadMoreButton onClick={() => loadMoreArticle(articlePage)}>Load more</LoadMoreButton>

            </div >

        );
    }
}
const mapStateToProps = (state) => {
    return {
        articleList: state.getIn(['home', 'articleList']),
        articlePage: state.getIn(['home', 'articlePage']),
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadMoreArticle(articlePage) {
            dispatch(actionCreators.getMoreArticleData(articlePage));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List); 
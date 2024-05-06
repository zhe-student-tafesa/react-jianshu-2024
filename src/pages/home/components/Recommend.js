import React, { PureComponent } from "react";
import { RecommendItem, RecommendWrapper } from "../style";
import { connect } from "react-redux";

class Recommend extends PureComponent {
    render() {
        const { recommendList } = this.props;
        return (
            <div>
                <RecommendWrapper>
                    {recommendList.map((item) => {
                        return (<RecommendItem href={item.get('linkURL')} key={item.get('id')} >
                            <span className="title">{item.get('title')}</span>
                            <div className="cities">
                                <span >{item.get('cities')}</span>
                            </div>
                        </RecommendItem>);
                    })}

                </RecommendWrapper>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        recommendList: state.getIn(['home', 'recommendList'])
    };
}
export default connect(mapStateToProps, null)(Recommend); 
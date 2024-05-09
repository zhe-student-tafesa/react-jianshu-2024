import React, { PureComponent } from "react";
import { Content, DetailWrapper, Header } from "./style";
import { connect } from "react-redux";
import { actionCreators } from "./store";

class Detail extends PureComponent {
    render() {
        console.log(this.props)
        const { title, content } = this.props;
        return (
            <DetailWrapper>
                <Header>
                    {title}
                </Header>
                <Content dangerouslySetInnerHTML={{ __html: content }}>

                </Content>
            </DetailWrapper>
        );
    }
    componentDidMount() {
        this.props.getDetail();
    }
}
const mapStateToProps = (state) => {
    return {
        title: state.getIn(['detail', 'title']),
        content: state.getIn(['detail', 'content']),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getDetail() {
            const action = actionCreators.getDetail();
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail); 
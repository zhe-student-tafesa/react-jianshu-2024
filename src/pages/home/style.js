import styled from "styled-components";

export const HomeWrapper = styled.div`
    margin: 0 auto;
    width: 960px;
    overflow: hidden;
`;
export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    .banner-img{
        width: 625px;
    }
`;
export const HomeRight = styled.div`
    float: right;
    width: 240px;
    background: green;
`;


export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
`;

export const TopicItem = styled.div`
    float: left; 
    height: 32px;
    margin-left: 18px;
    margin-bottom: 18px;
    padding-right: 15px;
    line-height: 32px;
    background: #f7f7f7;
    boder: 1px solid #dcdcdc;
    border-radius: 4px;
    font-size: 14px;
    color: #000;
    .topic-pic{
        display: block;
        float: left;
        margin-right: 15px;
        height: 32px;
        width: 32px;
    }

  
    
`;
import React, { Component } from "react";
import { ListInfo, ListItem } from "../style";

class List extends Component {
    render() {
        return (
            <div>
                <ListItem>
                    <img className="list-pic" src='https://live-production.wcms.abc-cdn.net.au/afe37024abc8701f94d52f2ba76c2a7e?impolicy=wcms_crop_resize&cropH=2000&cropW=3555&xPos=0&yPos=847&width=862&height=485' alt="" />
                    <ListInfo>
                        <h3 className="title">A behind-the-scenes look at the making of Ziggy Ramo's Human?</h3>
                        <p className="desc">Ziggy Ramo has taken a three-dimensional approach to his new project delivering a book, an album and incorporating visual art by his sister Brydi Fatnowna. He.....".</p>
                    </ListInfo>
                </ListItem>
                <ListItem>
                    <img className="list-pic" src='https://live-production.wcms.abc-cdn.net.au/afe37024abc8701f94d52f2ba76c2a7e?impolicy=wcms_crop_resize&cropH=2000&cropW=3555&xPos=0&yPos=847&width=862&height=485' alt="" />
                    <ListInfo>
                        <h3 className="title">A behind-the-scenes look at the making of Ziggy Ramo's Human?</h3>
                        <p className="desc">Ziggy Ramo has taken a three-dimensional approach to his new project delivering a book, an album and incorporating visual art by his sister Brydi Fatnowna. He.....".</p>
                    </ListInfo>
                </ListItem>
            </div>

        );
    }
}

export default List; 
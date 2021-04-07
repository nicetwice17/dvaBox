import {connect} from "dva";
import {Button, Divider, List, Typography} from "antd";
import React from "react";
import {PENDING} from "./index";


const App = (props) => {
    const {statusPosts, posts} = props.state
    const {dispatch} = props
    return (
        <div>
            <Button
                type="primary"
                onClick={() => dispatch({type: "model/getAsync"})}
                disabled={statusPosts === PENDING}>
                {
                    statusPosts === PENDING ?
                        <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"/>
                        :
                        "PRESS ME"
                }
            </Button>
            <Divider orientation="left">Posts: </Divider>
            <List
                bordered
                dataSource={posts}
                renderItem={item => (
                    <List.Item>
                        <Typography.Text mark>[Post title]</Typography.Text> {item.title}
                    </List.Item>
                )}
            />
            {/*<Divider orientation="left">Users: </Divider>*/}
            {/*<List*/}
            {/*    bordered*/}
            {/*    dataSource={users}*/}
            {/*    renderItem={item => (*/}
            {/*        <List.Item>*/}
            {/*            <Typography.Text mark>[Username]</Typography.Text> {item.name}*/}
            {/*        </List.Item>*/}
            {/*    )}*/}
            {/*/>*/}
        </div>
    );
}


export const AppConnect = connect((state) => ({state}))(App);

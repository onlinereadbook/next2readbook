import Layout from '../components/Layout'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import React, { PureComponent } from 'react';

const styles = {
    avatar: {
        background: '#fff'
    },
    Card: {
        marginTop: 10
    }
}



export default class indexpage extends React.Component {
    static getInitialProps({ req }) {
        // Ensures material-ui renders the correct css prefixes server-side
        let userAgent
        if (process.browser) {
            userAgent = navigator.userAgent
        } else {
            userAgent = req.headers['user-agent']
        }
        return { userAgent }
    }
    render() {

        return <Layout userAgent={this.props.userAgent}>
            <Card>
                <CardHeader
                    title="線上讀書會 在學習的路上一路相陪"
                    subtitle="一起揪團攻略吧"
                    avatar={<Avatar src="/static/logo.png" style={styles.avatar}></Avatar>}

                />
                <CardMedia
                    overlay={<CardTitle title="不論何時,大小,主題" subtitle="想找人討論就一起來揪團吧" />}
                >
                    <img src="/static/onlinedigtal.gif" />
                </CardMedia>
                <CardTitle title="跨越領域 不分大小 線上運作 共享交流" subtitle="目前已經舉辦了大大小小的讀書會約有800場以上,透過線上zoom軟體交流的方式舉辦,歡迎大家一起來同樂揪團" />
                <CardText>
                </CardText>
                <CardActions>
                    <FlatButton label="想要知道還有哪些線上讀書會" />
                    <FlatButton label="觀看過往的精彩" />
                </CardActions>
            </Card >
        </Layout >
    }
}
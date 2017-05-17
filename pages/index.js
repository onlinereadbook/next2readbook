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
        console.log('index');
        console.log(this.props);
        return <Layout userAgent={this.props.userAgent}>
            <Card>
                <CardHeader
                    title="在學習的路上一路相陪"
                    subtitle="一起揪團攻略吧"
                    avatar={<Avatar src="/static/logo.png" style={styles.avatar}></Avatar>}

                />
                <CardMedia
                    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                >
                    <img src="/static/tree.jpg" />
                </CardMedia>
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
                <CardActions>
                    <FlatButton label="Action1" />
                    <FlatButton label="Action2" />
                </CardActions>
            </Card >
        </Layout >
    }
}
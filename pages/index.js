import Layout from '../components/Layout'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';

const styles = {
    avatar: {
        background: '#fff'
    },
    Card: {
        marginTop: 10
    }
}
export default (props) => {
    return <Layout>


        <Card style={styles.Card}>
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
        </Card>



    </Layout>
}
import Layout from '../components/layout';
import React, { PureComponent } from 'react';


import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardText from 'react-md/lib/Cards/CardText';
import Media, { MediaOverlay } from 'react-md/lib/Media';
import Avatar from 'react-md/lib/Avatars';
import Button from 'react-md/lib/Buttons';

const Cardstyle = {};
Cardstyle.Card = { width: '100%' }

export class index extends PureComponent {
    static getInitialProps({ req }) {
        let userAgent
        if (process.browser) {
            userAgent = navigator.userAgent
        } else {
            userAgent = req.headers['user-agent']
        }
        return { userAgent }
    }
    render() {
        return (
            <Layout>
                <Card className="md-block-centered" style={Cardstyle.Card}>
                    <Media>
                        <img src="static/tree.jpg" />
                        <MediaOverlay>
                            <CardTitle title="線上讀書會" subtitle="快來找志同道合的朋友嚕!">
                                <Button className="md-cell--right" icon>star_outline</Button>
                            </CardTitle>
                        </MediaOverlay>
                    </Media>
                    <CardActions expander>
                        看看目前有哪些讀書會
                </CardActions>
                    <CardText expandable>
                        123
                    </CardText>
                </Card>
            </Layout >
        )
    }
}
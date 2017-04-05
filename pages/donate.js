import Layout from '../components/layout'



import React from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardText from 'react-md/lib/Cards/CardText';
import Media, { MediaOverlay } from 'react-md/lib/Media';
import Avatar from 'react-md/lib/Avatars';
import Button from 'react-md/lib/Buttons';







export default () => (
    <Layout>
        <div>

            <Card className="md-block-centered">
                <Media>

                    <MediaOverlay>
                        <CardTitle title="Such nature" subtitle="Wow!">
                            <Button className="md-cell--right" icon>star_outline</Button>
                        </CardTitle>
                    </MediaOverlay>
                </Media>
                <CardTitle
                    avatar={<Avatar src="" role="presentation" />}
                    title="Card Title"
                    subtitle="Card Subtitle"
                />
                <CardActions expander>
                    <Button flat label="Action 1" />
                    <Button flat label="Action 2" />
                </CardActions>
                <CardText expandable>
                </CardText>
            </Card>

        </div>
    </Layout>
)
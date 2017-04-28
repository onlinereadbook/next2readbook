import React, { PureComponent } from 'react';

import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardText from 'react-md/lib/Cards/CardText';
import Media, { MediaOverlay } from 'react-md/lib/Media';
import Avatar from 'react-md/lib/Avatars';
import Button from 'react-md/lib/Buttons';
const cn = 'md-table-column--adjusted';
const Cardstyle = { marginRight: 20 }

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card style={Cardstyle} >
                <Media>
                    <MediaOverlay>
                        <CardTitle title="線上讀書會" subtitle="快來找志同道合的朋友嚕!">
                            <Button className="md-cell--right" icon>star_outline</Button>
                        </CardTitle>
                    </MediaOverlay>
                </Media>
                <CardTitle title="San Francisico" subtitle="Mon, 12:30 PM, Mostly Sunny" />

                <CardActions expander>
                    看看目前有哪些讀書會
                </CardActions>
                <CardText expandable>
                    123 </CardText>
            </Card>)
    }
}
export default AboutMe;
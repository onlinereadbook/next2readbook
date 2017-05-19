import Layout from '../components/layout'
import React from 'react';
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/';

import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardText from 'react-md/lib/Cards/CardText';
import Media, { MediaOverlay } from 'react-md/lib/Media';
import Avatar from 'react-md/lib/Avatars';

export default () => (
  <Layout title='關於線上讀書會'>
    <div className="md-grid">
      <Card className="md-block-centered">
        <Media>
          <img src="/static/interior-of-library.jpg" role="presentation" />

          <MediaOverlay>
            <CardTitle title="快來一起熱血嚕" subtitle="找不到人討論嗎~">
              <Button className="md-cell--right" icon>star_outline</Button>
            </CardTitle>
          </MediaOverlay>
        </Media>
        <CardTitle
          avatar={<Avatar src="static/logo.png" role="presentation" suffix="#ffffff" />}
          title="聯絡 線上讀書會 找人一起攻略"
          subtitle="線上讀書會 讓在學習知識的路上不孤單,可以快速攻略並藉由線上會議交談與主題探索發現,原來學習只要找對同好 一切是如此的順暢"
        />
        <CardActions expander>
          <Button raised label="email : polo13999@gmail.com" iconClassName="fa fa-hand-spock-o" />
        </CardActions>
        <CardText expandable>
          發起人Polo 位處於國境之南，有感於多數資訊活動都辦在交通便利的大都市，其他區域參與不易，於是發起線上讀書會，邀請各領域有所研究的主講人分享，或訂立主題讓有興趣鑽研的成員們分頭研究，再於線上平台交流攻略心得，期望利用現代發達的資訊科技促進各區域的知識流通，達到教學相長的目的

    </CardText>
      </Card>

    </div>
  </Layout>
)
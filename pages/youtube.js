import Layout from '../components/layout'
import React, { PureComponent } from 'react';
import DataTable from 'react-md/lib/DataTables/DataTable';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableBody from 'react-md/lib/DataTables/TableBody';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import loremIpsum from 'lorem-ipsum';
import injectInk from 'react-md/lib/Inks';
import Button from 'react-md/lib/Buttons';
import youtubeData from '../data/youtubeDatatest.json'
import moment from 'moment'

import sortBy from 'sort-by'
//let lessonData = [{ title: "1" }, { title: "2" }, { title: "3" }];
//console.log(youtubeData);
const cn = 'md-table-column--adjusted';

class PlainTableExample extends PureComponent {
    constructor(props) {
        super(props);
        youtubeData.sort(sortBy('-snippet.publishedAt'));

        // this.state = {
        //   inline: false,
        //   large: false,
        //   sortedyoutubeData:  youtubeData.sort(sort_by('snippet.publishedAt')),      
        //   okOnOutsideClick: true,
        // };
    }
    sort = () => {
        console.log('test');
    };
    render() {

        const rows = youtubeData.map((_, i) => {
            let hrefdata = `https://www.youtube.com/watch?v=${_.snippet.videoId}`;
            return (
                <TableRow key={i} >
                    <TableColumn >   {moment(_.snippet.publishedAt).format("YYYY-MM-DD HH:mm")}             </TableColumn>
                    <TableColumn  >    {_.snippet.title}             </TableColumn>
                    <TableColumn >  <Button raised href={hrefdata} label={_.snippet.description} />     </TableColumn>

                </TableRow>
            )
        }
        );

        return (


            <DataTable plain>
                <TableHeader>
                    <TableRow autoAdjust={true} >
                        <TableColumn sorted onClick={this.sort}> 上架時間</TableColumn>
                        <TableColumn>影片名稱</TableColumn>
                        <TableColumn>內容</TableColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rows}
                </TableBody>
            </DataTable>

        );
    }
}

export default () => (
    <Layout title='讀書會的精彩影片'>
        <PlainTableExample></PlainTableExample>
    </Layout>
)
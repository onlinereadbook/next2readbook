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
import moment from 'moment'
import sortBy from 'sort-by'

import youtubeData from '../data/youtubeDatatest.json'

//let lessonData = [{ title: "1" }, { title: "2" }, { title: "3" }];
//console.log(youtubeData);
const cn = 'md-table-column--adjusted';
//let youtubeData = [];
export default class YoutubeTable extends PureComponent {
    constructor(props) {
        super(props);
        console.log('---1');
        console.log(this.props);
        console.log('---2');
        console.log(youtubeData);
        //let youtubeData = JSON.prase(this.props.youtubedata);
        //youtubeData = Object.values(this.props.youtubedata);
        //console.log(youtubeData);
        youtubeData.sort(sortBy('-snippet.publishedAt'));

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


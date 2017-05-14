import Layout from '../components/layout'
import React, { PureComponent } from 'react';
import DataTable from 'react-md/lib/DataTables/DataTable';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableBody from 'react-md/lib/DataTables/TableBody';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import injectInk from 'react-md/lib/Inks';
import Button from 'react-md/lib/Buttons';
import moment from 'moment'
import TablePagination from 'react-md/lib/DataTables/TablePagination'
import Router from 'next/router'
import evndata from '../evndata'
import 'isomorphic-fetch'


//import youtubeData from '../data/youtubeDatatest.json'

//let lessonData = [{ title: "1" }, { title: "2" }, { title: "3" }];
//console.log(youtubeData);
const cn = 'md-table-column--adjusted';
export default class YoutubeTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            youtubeData: this.props.youtubedata,
            inspections: [],
            totalrows: (this.props.totalrows * 1),
            start: this.props.start,
            rowsPerPage: 10
        }

    }


    sort = () => {
        console.log('test');
    };
    _handlePagination = async (start, rowsPerPage) => {
        //this.setState({ inspections: this.props.foodInspections.inspections.slice(start, start + rowsPerPage) });
        //const { url } = this.props
        //console.log(evndata.url);
        console.log(rowsPerPage);
        const res = await fetch(`${evndata.url}/youtubedata/${start}/${rowsPerPage}`);
        const json = await res.json();
        const href = `${evndata.url}/youtube?start=${start}&rowsPerPage=${rowsPerPage}`;
        // console.log('json');
        // console.log(json);
        Router.push(href)
        //this.props.youtubeData = json;
        this.setState({ youtubeData: json, rowsPerPage: rowsPerPage });

    }

    render() {
        const rows = this.state.youtubeData.map((_, i) => {
            //console.log(_);
            let hrefdata = `https://www.youtube.com/watch?v=${_.videoId}`;
            return (
                <TableRow key={i} >
                    <TableColumn >    <Button raised href={hrefdata} label="觀看" /> </TableColumn>
                    <TableColumn >   {moment(_.publishedAt).format("YYYY-MM-DD HH:mm")}</TableColumn>
                    <TableColumn  >    {_.title}             </TableColumn>
                    <TableColumn >  {_.description} </TableColumn>
                </TableRow>
            )
        }
        );
        // const { fetching, meta } = this.props.foodInspections;

        // const { rows } = this.state;

        return (


            <DataTable plain baseId="pagination">
                <TableHeader>
                    <TableRow autoAdjust={true} >
                        <TableColumn> 觀看</TableColumn>
                        <TableColumn  > 上架時間</TableColumn>
                        <TableColumn>影片名稱</TableColumn>
                        <TableColumn>內容</TableColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rows}
                </TableBody>
                <TablePagination onPagination={this._handlePagination} rows={this.state.totalrows} page={1} />


            </DataTable>

        );
    }
}


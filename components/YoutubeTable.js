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
import TablePagination from 'react-md/lib/DataTables/TablePagination'
//import youtubeData from '../data/youtubeDatatest.json'

//let lessonData = [{ title: "1" }, { title: "2" }, { title: "3" }];
//console.log(youtubeData);
const cn = 'md-table-column--adjusted';
export default class YoutubeTable extends PureComponent {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            youtubeData: this.props.youtubedata,
            inspections: [],
            rows: 0
        }
        //let youtubeData = JSON.prase(this.props.youtubedata);
        //youtubeData = Object.values(this.props.youtubedata);
        //console.log(youtubeData);
        // youtubeData.sort(sortBy('-snippet.publishedAt'));

    }

    componentWillMount() {
        // const { inspections } = this.props.foodInspections;
        // const rows = inspections.length;
        // if (rows) {
        //   this.setState({ inspections: inspections.slice(0, 10), rows });
        // }
    }

    componentWillReceiveProps(nextProps) {
        // const { inspections } = nextProps.foodInspections;
        // if (this.props.foodInspections.inspections !== inspections && inspections.length) {
        //   this.setState({
        //     inspections: inspections.slice(0, 10),
        //     rows: inspections.length,
        //   });
        // }
    }

    sort = () => {
        console.log('test');
    };
    render() {
        const rows = this.state.youtubeData.map((_, i) => {
            console.log(_);
            let hrefdata = `https://www.youtube.com/watch?v=${_.videoId}`;
            return (
                <TableRow key={i} >
                    <TableColumn >  <Button raised href={hrefdata} label="觀看" /> </TableColumn>
                    <TableColumn >   {moment(_.publishedAt).format("YYYY-MM-DD HH:mm")}</TableColumn>
                    <TableColumn  >    {_.title}             </TableColumn>
                    <TableColumn >  {_.description} </TableColumn>
                </TableRow>
            )
        }
        );

        return (


            <DataTable plain>
                <TableHeader>
                    <TableRow autoAdjust={true} >
                        <TableColumn> 觀看</TableColumn>
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


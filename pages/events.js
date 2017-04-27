import Layout from '../components/layout'
import React, { PureComponent } from 'react';
import ReTable from '../components/ReTable'
import 'isomorphic-fetch'
import evndata from '../evndata'  //環境變數
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import TableRow from 'react-md/lib/DataTables/TableRow';
import Button from 'react-md/lib/Buttons';
import moment from 'moment';
import { limit, substring, length } from 'stringz';

export default class Events extends PureComponent {
    static async getInitialProps(res) {
        //如果要開放初始的網址可以LOAD資料這邊就要下Query
        //不然這邊只要給初始值就可以了
        console.log('res.data');
        console.log(res.req.data);
        const TableHeader = ["進入社群", "開始時間", "活動標題"];
        const res1 = await fetch(`${evndata.url}/eventdata/0/10`);
        const TableData = await res1.json();
        const res2 = await fetch(`${evndata.url}/eventtotal`);
        const TableCount = await res2.json();
        const DataEndPoint = "eventdata";
        const WorkUrl = evndata.url;
        //console.log(DataEndPoint);



        // TableData = JSON.stringify(TableData);

        return { TableHeader: TableHeader, TableData: TableData, TableCount: TableCount, WorkUrl: WorkUrl, DataEndPoint: DataEndPoint }
    }


    render() {

        let changeFormat = (TableData) => {
            return TableData.map((_, i) => {
                //console.log(_);
                let hrefdata = `https://www.facebook.com/groups/${_.parentGroupId}`;
                let showmain = `${_.title} - ${_.description}`;
                return (
                    <TableRow key={i} >
                        <TableColumn >    <Button raised href={hrefdata} label="進入社群" /> </TableColumn>
                        <TableColumn >   {moment(_.startTime).format("YYYY-MM-DD HH:mm")}</TableColumn>
                        <TableColumn  >  {limit(showmain, 60, '')}...             </TableColumn>
                    </TableRow>
                )
            }
            );

        }

        let calldata = async (start, rowsPerPage) => {

            const res = await fetch(`${evndata.url}/eventdata/${start}/${rowsPerPage}`);
            const TableData = await res.json();
            const TableData2 = changeFormat(TableData);
            return TableData2
        }

        return (
            <Layout title="線上讀書會活動一覽表">
                <ReTable {...this.props} changeFormat={changeFormat} calldata={calldata}></ReTable>
            </Layout>
        )
    }
}
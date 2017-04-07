import Layout from '../components/layout'
import React, { PureComponent } from 'react';
import DataTable from 'react-md/lib/DataTables/DataTable';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableBody from 'react-md/lib/DataTables/TableBody';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import loremIpsum from 'lorem-ipsum';
import lessonData from '../data/lessonData.json'
import injectInk from 'react-md/lib/Inks';
import Button from 'react-md/lib/Buttons/Button';
import moment from 'moment';

//let lessonData = [{ title: "1" }, { title: "2" }, { title: "3" }];
//console.log(lessonData);
const cn = 'md-table-column--adjusted';

class PlainTableExample extends PureComponent {
    render() {
        let groupdata = [];
        // lessonData.forEach(function (v) {

        //     if (v.parentGroupName !== undefined) {
        //         console.log(v.parentGroupName);
        //         groupdata[v.parentGroupId] = v.parentGroupName;
        //     }
        // });
        // console.log(groupdata);
        const rows = lessonData.map((_, i) => {
            let urldata = `https://www.facebook.com/groups/${_.parentGroupId}`;
            //           console.log(_.parentGroupName);

            if (_.parentGroupName == undefined) {
                return
            }
            return (
                <TableRow key={i} >
                    <TableColumn >    {moment(_.startTime).format("YYYY-MM-DD HH:mm")}       </TableColumn>
                    <TableColumn >
                        <Button raised label={_.parentGroupName} href={urldata} />
                    </TableColumn>
                    <TableColumn >    {_.description}       </TableColumn>
                </TableRow>
            )
        });

        return (
            <DataTable plain>
                <TableHeader>
                    <TableRow autoAdjust={true} >
                        <TableColumn>時間</TableColumn>
                        <TableColumn>群組名稱</TableColumn>
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
    <Layout>
        <PlainTableExample></PlainTableExample>
    </Layout>
)
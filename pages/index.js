import Layout from '../components/layout'
import React, { PureComponent } from 'react';
import DataTable from 'react-md/lib/DataTables/DataTable';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableBody from 'react-md/lib/DataTables/TableBody';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import loremIpsum from 'lorem-ipsum';
import { lessonData } from '../data/lessonData'
//let lessonData = [{ title: "1" }, { title: "2" }, { title: "3" }];

const cn = 'md-table-column--adjusted';

class PlainTableExample extends PureComponent {
    render() {
        const rows = lessonData.map((_, i) => (
            <TableRow key={i} >
                <TableColumn >    {_.title}       </TableColumn>
                <TableColumn >      {_.date}       </TableColumn>
                <TableColumn >        {_.title}     </TableColumn>
                <TableColumn >        {_.title}     </TableColumn>

            </TableRow>
        ));

        return (
            <DataTable plain>
                <TableHeader>
                    <TableRow autoAdjust={true}>
                        <TableColumn>類型</TableColumn>
                        <TableColumn>時間</TableColumn>
                        <TableColumn>主講者</TableColumn>
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
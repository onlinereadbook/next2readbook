import Layout from '../components/layout'
import React, { PureComponent } from 'react';
import DataTable from 'react-md/lib/DataTables/DataTable';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableBody from 'react-md/lib/DataTables/TableBody';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import loremIpsum from 'lorem-ipsum';
import lessonData from '../data/lessonData.json'
import Button from 'react-md/lib/Buttons';
import moment from 'moment';
import SelectField from 'react-md/lib/SelectFields';
import groupdata from '../data/groupsimpleData.json'

//let lessonData = [{ title: "1" }, { title: "2" }, { title: "3" }];
//console.log(lessonData);
const cn = 'md-table-column--adjusted';
//const stateItems = [''].concat(states);

const stateItems = [''].concat(groupdata);

//console.log(stateItems);
class PlainTableExample extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            stateLessonData: lessonData,
        }
    }

    _handleChange = (value, index, event) => {
        // console.log(value);
        // console.log(this.state.stateLessonData);
        let temp = [];
        if (value != "") {
            this.setState({
                stateLessonData: lessonData.filter(function (v, i) {
                    // console.log(v.parentGroupId + "-");
                    //console.log(v.parentGroupId == value);
                    return v.parentGroupId == value

                })
            });
        } else {
            this.setState({
                stateLessonData: lessonData
            });
        }
        // this.state.stateLessonData =temp;

    }
    render() {

        const rows = this.state.stateLessonData.map((_, i) => {
            let urldata = `https://www.facebook.com/groups/${_.parentGroupId}`;

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
            <div className="md-grid">

                <SelectField
                    id="statesControlled"
                    label="請選擇要搜尋的社團"
                    placeholder="Some State"
                    menuItems={stateItems}
                    onChange={this._handleChange}
                    className="md-cell"
                    itemLabel="name"
                    itemValue="id"
                />

                <DataTable plain >

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
            </div>
        );
    }
}

export default () => (
    <Layout>
        <PlainTableExample></PlainTableExample>
    </Layout>
)
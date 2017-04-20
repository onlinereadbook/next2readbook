import Layout from '../components/layout';
import React, { PureComponent } from 'react';
import DataTable from 'react-md/lib/DataTables/DataTable';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableBody from 'react-md/lib/DataTables/TableBody';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import loremIpsum from 'lorem-ipsum';
import Button from 'react-md/lib/Buttons';
import moment from 'moment';
import SelectField from 'react-md/lib/SelectFields';
import Router from 'next/router';
//import lessonData from '../data/lessonData.json';
import TablePagination from 'react-md/lib/DataTables/TablePagination'
import evndata from '../evndata'
import 'isomorphic-fetch'
//console.log(stateItems);
export default class EventTable extends React.Component {
    constructor(props) {
        super(props);
        let stateItems = JSON.parse(props.listgroup);
        stateItems = [''].concat(stateItems);
        console.log(this.props.eventdata);
        this.state = {
            LessonData: this.props.eventdata,
            kind: props.kind,
            stateItems: stateItems,
            totalrows: (this.props.totalrows * 1),
            start: this.props.start,
            rowsPerPage: 10

        }
        //console.log('----');
        console.log(this.state.stateItems);


        const initkind = props.kind;

        //console.log(typeof (this.state.kind));
        if (typeof (this.state.kind) != "undefined") {
            //  console.log('test');
            this.state.LessonData = lessonData.filter(function (v, i) {
                return v.parentGroupId == initkind
            })
        }
    }
    _handleChange = async (kinddata, index, event) => {

        console.log(this.kinddata);

        //this.setState({ LessonData: json, rowsPerPage: rowsPerPage, start: start, rowsPerPage: rowsPerPage });

    }
    _handlePagination = async (start, rowsPerPage) => {
        //this.setState({ inspections: this.props.foodInspections.inspections.slice(start, start + rowsPerPage) });
        //const { url } = this.props
        //console.log(evndata.url);
        console.log(rowsPerPage);
        const res = await fetch(`${evndata.url}/eventdata/${start}/${rowsPerPage}`);
        const json = await res.json();
        const href = `${evndata.url}/events?start=${start}&rowsPerPage=${rowsPerPage}`;
        // console.log('json');
        // console.log(json);
        Router.push(href)
        //this.props.eventData = json;
        this.setState({ LessonData: json, rowsPerPage: rowsPerPage, start: start, rowsPerPage: rowsPerPage });

    }

    render() {
        const rows = this.state.LessonData.map((_, i) => {
            let urldata = `https://www.facebook.com/groups/${_.parentGroupId}`;

            if (_.parentGroupName == undefined) {
                return
            }
            return (
                <TableRow key={i} baseId="pagination">
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
                    menuItems={this.state.stateItems}
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
                    <TablePagination onPagination={this._handlePagination} rows={this.state.totalrows} page={1} />

                </DataTable>

            </div>
        );
    }
}

import Layout from '../components/layout'
import React, { PureComponent } from 'react';
import EventTable from '../components/EventTable'
import 'isomorphic-fetch'
import evndata from '../evndata'

export default class Events extends React.Component {
    static async getInitialProps({ query: { start, rowsPerPage } }) {
        const resgrouplist = await fetch('http://localhost:3000/grouplist');
        const jsongrouplist = await resgrouplist.json();
        //console.log(json);
        let listgroup = [];
        jsongrouplist.forEach(function (v, i) {
            let temp = {}
            temp.name = v.name;
            temp.id = v.id;
            listgroup.push(temp);
        })

        const data = JSON.stringify(listgroup);
        start = (start == "undefined") ? 0 : start;
        rowsPerPage = (typeof (rowsPerPage) == "undefined" ? 10 : rowsPerPage)
        const restotalrows = await fetch(`${evndata.url}/eventtotal`);
        const totalrows = await restotalrows.json();
        const res = await fetch(`${evndata.url}/eventdata/${start}/${rowsPerPage}`);
        const json = await res.json();
        // console.log('totalrows');
        // console.log(totalrows);

        return { 'listgroup': data, 'eventdata': json, 'start': start, 'totalrows': totalrows, 'rowsPerPage': rowsPerPage }
        //return { 'listgroup': data, 'eventdata': eventdata }
    }

    render() {
        console.log(this.props.eventdata);
        return (
            <Layout title="精彩活動列表">
                <EventTable kind={this.props.url.query.kind}
                    listgroup={this.props.listgroup}
                    eventdata={this.props.eventdata}
                    start={this.props.start}
                    totalrows={this.props.totalrows}
                    rowsPerPage={this.props.rowsPerPage}
                />
            </Layout>
        )
    }
}
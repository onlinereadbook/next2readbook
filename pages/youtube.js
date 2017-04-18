import Layout from '../components/layout'
import React, { PureComponent } from 'react';
import YoutubeTable from '../components/YoutubeTable'
import 'isomorphic-fetch'
import evndata from '../evndata'

export default class Youtube extends PureComponent {
    static async getInitialProps({ query: { start, rowsPerPage } }) {
        start = (start == "undefined") ? 0 : start;
        rowsPerPage = (typeof (rowsPerPage) == "undefined" ? 10 : rowsPerPage)
        //console.log(start);
        const restotalrows = await fetch(`${evndata.url}/youtubetotal`);
        const totalrows = await restotalrows.json();
        const res = await fetch(`${evndata.url}/youtubedata/${start}/${rowsPerPage}`);
        const json = await res.json();
        // console.log('totalrows');
        // console.log(totalrows);

        return { 'youtubedata': json, 'start': start, 'totalrows': totalrows, 'rowsPerPage': rowsPerPage }
    }

    render() {
        // console.log('render');
        // console.log(this.props.totalrows);

        return (
            <Layout title='讀書會的精彩影片'>
                <YoutubeTable youtubedata={this.props.youtubedata} start={this.props.start} totalrows={this.props.totalrows} rowsPerPage={this.props.rowsPerPage} ></YoutubeTable>
            </Layout>
        )
    }
}
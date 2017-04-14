import Layout from '../components/layout'
import React, { PureComponent } from 'react';
import YoutubeTable from '../components/YoutubeTable'
import 'isomorphic-fetch'


export default class Youtube extends PureComponent {
    static async getInitialProps() {
        const res = await fetch('http://localhost:3000/youtubedata');
        const json = await res.json();
        console.log('getting data');
        console.log(json);
        return { 'youtubedata': json }
    }

    render() {

        return (
            <Layout title='讀書會的精彩影片'>
                <YoutubeTable youtubedata={this.props.youtubedata}></YoutubeTable>
            </Layout>
        )
    }
}
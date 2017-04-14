import Layout from '../components/layout'
import React, { PureComponent } from 'react';
import EventTable from '../components/EventTable'
import 'isomorphic-fetch'


export default class Events extends React.Component {

    static async getInitialProps() {
        const res = await fetch('http://localhost:3000/database');
        const json = await res.json();
        //console.log(json);
        let listgroup = [];
        json.forEach(function (v, i) {
            let temp = {}
            temp.name = v.name;
            temp.id = v.id;
            listgroup.push(temp);
        })

        const data = JSON.stringify(listgroup);

        const res2 = await fetch('http://localhost:3000/eventdata');
        const eventdata = await res2.json();
        //console.log(json);
        //   console.log(listgroup);
        // const json2 = JSON.stringify(eventdata);
        return { 'listgroup': data, 'eventdata': eventdata }
    }

    render() {
        return (
            <Layout title="精彩活動列表">

                <EventTable kind={this.props.url.query.kind}
                    listgroup={this.props.listgroup}
                    eventdata={this.props.eventdata}
                />

            </Layout>
        )
    }
}
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

import lessonData from '../data/lessonData.json';
import groupdata from '../data/groupsimpleData.json';



//console.log(admin)




// var allgroup = admin.database().ref("allgroup/");

// allgroup.once('value').then(function (snapshot) {
//     console.log(snapshot.val());
// }).catch(err => { console.log(err) });

//let lessonData = [{ title: "1" }, { title: "2" }, { title: "3" }];
//console.log(lessonData);
const cn = 'md-table-column--adjusted';
//const stateItems = [''].concat(states);

const stateItems = [''].concat(groupdata);

//console.log(stateItems);

export default (props) => {
    //console.log(props);
    return (
        <Layout>
            <PlainTableExample kind={props.url.query.kind}></PlainTableExample>
        </Layout>
    )
}
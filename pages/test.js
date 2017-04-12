import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'

export default class MyPage extends React.Component {
    static async getInitialProps(req) {
        //console.log('getInitialProps')
        const res = await fetch('http://localhost:3000/firebase');
        const json = await res.json();
        // console.log('json');
        console.log(json);
        return {}
    }

    componentDidMount() {

        console.log('didmonut')
    }

    render() {
        return <h1>{this.props.xx}</h1>
    }
}
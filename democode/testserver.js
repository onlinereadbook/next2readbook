import React, { PureComponent } from 'react';

export default class Events extends PureComponent {
    static async getInitialProps({ res, query: { start, rowsPerPage } }) {
        console.log(res.data);

        return { test: data }
    }
    render() {
        return (<div>{this.props.data}</div>)
    }
}


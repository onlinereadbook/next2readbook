import React, { PureComponent } from 'react';
import DataTable from 'react-md/lib/DataTables/DataTable';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableBody from 'react-md/lib/DataTables/TableBody';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import Button from 'react-md/lib/Buttons';
import PropTypes from 'prop-types';
import moment from 'moment';
import TablePagination from 'react-md/lib/DataTables/TablePagination'
import 'isomorphic-fetch'
import Router from 'next/router'

class ReTable extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            TableHeader: (typeof (this.props.TableHeader) == "undefined") ? ["尚未載入資料"] : this.props.TableHeader,
            // TableData: (typeof (this.props.TableData) == "undefined") ? ["尚未載入資料"] : this.props.TableData,
            // TableCount: (typeof (this.props.TableCount) == "undefined") ? ["尚未載入資料"] : this.props.TableCount,
            TableData: ["尚未載入資料"],
            TableCount: 0,
            Rows: []

        }
        console.log('constructor')
        //console.log(this.state.Rows)

    }
    async componentDidMount() {
        console.log('componentDidMount');
        const res1 = await fetch(this.props.TableData);
        const TableData = await res1.json();
        const res2 = await fetch(this.props.TableCount);
        const TableCount = await res2.json();
        const Rows = await this.props.changeFormat(TableData)
        this.setState({ TableData: TableData, TableCount: TableCount, Rows: Rows });

    }


    _handlePagination = async (start, rowsPerPage) => {
        //console.log('_handlePagination');
        //更新state資料
        const href = `${this.props.WorkUrl}${this.props.url.pathname}?start=${start}&rowsPerPage=${rowsPerPage}`;
        //console.log(href);
        Router.push(href)
        // const res = await fetch(`${this.props.WorkUrl}/${this.props.DataEndPoint}/${start}/${rowsPerPage}`);
        // const TableData = await res.json();

        const Rows = await this.props.calldata(start, rowsPerPage);

        this.setState({ Rows: Rows, rowsPerPage: rowsPerPage, start: start });
        //改變網址狀態

    }


    render() {
        //Header
        const TableRowColumn =
            this.state.TableHeader.map(function (v, i) {
                return (<TableColumn key={i}>{v}</TableColumn>)
            })
        //Rows
        //const rows = this.state.TableData;


        return (
            <DataTable plain baseId="pagination">

                <TableHeader>
                    <TableRow autoAdjust={true} >
                        {TableRowColumn}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {this.state.Rows}
                </TableBody>
                <TablePagination onPagination={this._handlePagination} rows={this.state.TableCount} page={1} />

            </DataTable>

        )
    }
}
export default ReTable;

ReTable.propTypes = {
    TableHeader: PropTypes.array
};
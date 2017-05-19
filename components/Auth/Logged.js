import FlatButton from 'material-ui/FlatButton';
import React, { Component } from 'react'


export default class Logged extends Component {
    static muiName = 'FlatButton';
    swLoginDialog = () => {
        this.props.swLoginDialog();
    }
    render() {
        return (
            <FlatButton label="Logged" onTouchTap={() => this.swLoginDialog()} />
        );
    }
}
import FlatButton from 'material-ui/FlatButton';
import React, { Component } from 'react'
import { white, blue500, red500, greenA200 } from 'material-ui/styles/colors';


export default class Login extends Component {
    static muiName = 'FlatButton';
    swLoginDialog = () => {
        this.props.swLoginDialog();
    }
    render() {
        return (
            <FlatButton label="登入系統" style={{ paddingTop: 5, color: '#ffffff' }} onTouchTap={() => this.swLoginDialog()} />
        );
    }
}
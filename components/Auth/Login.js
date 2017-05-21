import FlatButton from 'material-ui/FlatButton';
import React, { Component } from 'react'


export default class Login extends Component {
    static muiName = 'FlatButton';
    swLoginDialog = () => {
        this.props.swLoginDialog();
    }
    render() {
        return (
            <FlatButton label="Login" onTouchTap={() => this.swLoginDialog()} />
        );
    }
}
import Link from 'next/link'
import Head from 'next/head'
import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import { deepOrange500 } from 'material-ui/styles/colors'
import FlatButton from 'material-ui/FlatButton'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
if (!process.tapEventInjected) {
    injectTapEventPlugin()
    process.tapEventInjected = true
}
const styles = {
    container: {
        textAlign: 'left',
        background: '#f8f8f8'
    },
    container2: {
        background: '#f8f8f8',
        width: '95%',
        margin: '0 auto'
    }
}
const muiTheme = {
    palette: {
        accent1Color: deepOrange500
    }
}

class Layout extends Component {
    constructor(props, context) {
        super(props, context)

    }
    render() {
        const { userAgent, children } = this.props
        const AppBarExampleIcon = () => (
            <AppBar
                title="歡迎來線上讀書會"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        );
        return (
            <MuiThemeProvider muiTheme={getMuiTheme({ userAgent, ...muiTheme })}>
                <div>
                    <AppBarExampleIcon />
                </div>
            </MuiThemeProvider >
        )
    }
}

export default ({ children, title = 'This is the default title', userAgent }) => (
    <div id="body"  >
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <Layout userAgent={userAgent}>
            {children}
        </Layout>
    </div>
)
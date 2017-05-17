import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import { deepOrange500 } from 'material-ui/styles/colors'
import FlatButton from 'material-ui/FlatButton'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

// Make sure react-tap-event-plugin only gets injected once
// Needed for material-ui
if (!process.tapEventInjected) {
    injectTapEventPlugin()
    process.tapEventInjected = true
}

const styles = {
    container: {
        textAlign: 'center',
        paddingTop: 200
    }
}

const muiTheme = {
    palette: {
        accent1Color: deepOrange500
    }
}

class Layout extends Component {
    static getInitialProps({ req }) {
        // Ensures material-ui renders the correct css prefixes server-side
        let userAgent
        if (process.browser) {
            userAgent = navigator.userAgent
        } else {
            userAgent = req.headers['user-agent']
        }

        return { userAgent }
    }

    constructor(props, context) {
        super(props, context)

    }

    render() {
        const { userAgent, children } = this.props
        console.log(children)
        return (
            <MuiThemeProvider muiTheme={getMuiTheme({ userAgent, ...muiTheme })}>
                <div style={styles.container}>

                </div>
            </MuiThemeProvider>
        )
    }
}

export default ({ children }) => {
    console.log(children)
    return (<Layout>{children}</Layout>)

}
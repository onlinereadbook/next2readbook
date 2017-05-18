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

import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import Login from './Auth/Login'
import Logged from './Auth/Logged'

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;


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

export default class MainLayout extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            selectedIndex: 0
        };
    }
    select = (index) => this.setState({ selectedIndex: index });
    render() {
        const { userAgent, children } = this.props
        const AppBarExampleIcon = () => (
            <AppBar
                title="歡迎來線上讀書會"
                iconElementRight={this.props.isOpenLoginDialog ? <Logged  {...this.props} /> : <Login {...this.props} />}
            />
        );
        return (
            <MuiThemeProvider muiTheme={getMuiTheme({ userAgent, ...muiTheme })}>
                <div>
                    <AppBarExampleIcon />
                    {children}
                    <Paper zDepth={1}>
                        <BottomNavigation selectedIndex={this.state.selectedIndex}>
                            <BottomNavigationItem
                                label="Recents"
                                icon={recentsIcon}
                                onTouchTap={() => this.select(0)}
                            />
                            <BottomNavigationItem
                                label="Favorites"
                                icon={favoritesIcon}
                                onTouchTap={() => this.select(1)}
                            />
                            <BottomNavigationItem
                                label="Nearby"
                                icon={nearbyIcon}
                                onTouchTap={() => this.select(2)}
                            />
                        </BottomNavigation>
                    </Paper>

                    <Drawer open={this.props.isOpenMenu}>
                        <MenuItem>Menu Item</MenuItem>
                        <MenuItem>Menu Item 2</MenuItem>
                    </Drawer>
                </div>
            </MuiThemeProvider >
        )
    }
}
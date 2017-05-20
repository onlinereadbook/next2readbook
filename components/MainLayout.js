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
import MenuBar from './Menu/MenuBar'

import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';

// import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import s from './css/Login.css';



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


class MainLayout extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            selectedIndex: 0,
            isOpenLoginDialog: false
        };
    }
    select = (index) => this.setState({ selectedIndex: index });
    swLoginDialog = () => {  //Login的跳出開關
        //this.props.toggleLoginMenu();
        this.setState({ isOpenLoginDialog: !this.state.isOpenLoginDialog });
        console.log(this.state);
    }
    render() {
        const { userAgent, children } = this.props
        const AppBarExampleIcon = () => (
            <AppBar
                title="歡迎來線上讀書會"
                iconElementLeft={<MenuBar />}
                iconElementRight={this.props.isOpenLoginDialog ?
                    <Logged swLoginDialog={this.swLoginDialog} {...this.props} /> : <Login swLoginDialog={this.swLoginDialog} {...this.props} />}

            />
        );
        const actions = [
            <FlatButton
                label="取消"
                primary={true}
                onTouchTap={this.swLoginDialog}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.swLoginDialog}
            />,
        ];

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
                    <Dialog
                        title="會員登入"
                        actions={actions}
                        modal={false}
                        open={this.state.isOpenLoginDialog}
                        onRequestClose={this.swLoginDialog}
                    >
                        <Paper zDepth={2}>
                            <a href="/login/facebook">
                                <svg

                                    width="30"
                                    height="30"
                                    viewBox="0 0 30 30"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M22 16l1-5h-5V7c0-1.544.784-2 3-2h2V0h-4c-4.072 0-7 2.435-7 7v4H7v5h5v14h6V16h4z"
                                    />
                                </svg>
                                <span>使用 Facebook帳號 登入</span>
                            </a>
                        </Paper>
                    </Dialog>
                </div>
            </MuiThemeProvider >
        )
    }
}


export default MainLayout
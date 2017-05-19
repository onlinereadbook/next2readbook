import Layout from '../components/Layout'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux'
import { initStore, toggleMenu, toggleLoginMenu } from '../store'
import withRedux from 'next-redux-wrapper'

const styles = {
    avatar: {
        background: '#fff'
    },
    Card: {
        marginTop: 10
    }
}



class aboutpage extends React.Component {
    static getInitialProps({ req, store, isServer }) {
        // Ensures material-ui renders the correct css prefixes server-side
        let userAgent
        if (process.browser) {
            userAgent = navigator.userAgent
        } else {
            userAgent = req.headers['user-agent']
        }

        //store.dispatch(toggleMenu())
        //console.log(toggleMenu());
        // store.dispatch(serverRenderClock(isServer))
        //store.dispatch(addCount())
        //const toggleMenu = false;
        return { userAgent, isServer }
    }
    gogo = () => {
        //   console.log('gogo');
        this.props.toggleMenu();
        //    console.log(this.props);
    }
    render() {
        return (
            <div>about</div>)

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleMenu: bindActionCreators(toggleMenu, dispatch),
        toggleLoginMenu: bindActionCreators(toggleLoginMenu, dispatch)
        // startClock: bindActionCreators(startClock, dispatch)
    }
}
const mapDispatchToState = (state) => {
    //console.log(state)
    return ({
        isOpenMenu: state.isOpenMenu,
        isOpenLoginDialog: state.isOpenLoginDialog
    })
};

export default withRedux(initStore, mapDispatchToState, mapDispatchToProps)(aboutpage)


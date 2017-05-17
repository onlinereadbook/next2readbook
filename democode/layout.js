
import Link from 'next/link'
import Head from 'next/head'
import { PureComponent } from 'react'

import Avatar from 'react-md/lib/Avatars'
import Button from 'react-md/lib/Buttons'
import FontIcon from 'react-md/lib/FontIcons'
import ListItem from 'react-md/lib/Lists/ListItem'
import NavigationDrawer from 'react-md/lib/NavigationDrawers'
import SelectField from 'react-md/lib/SelectFields'
import IconSeparator from 'react-md/lib/Helpers/IconSeparator';

const avatarSrc = '/static/logo.png'

const drawerHeaderChildren = [
    <Avatar
        key={avatarSrc}
        src={avatarSrc}
        role='presentation'
        iconSized
        style={{ alignSelf: 'center', marginLeft: 16, marginRight: 16, flexShrink: 0 }}
        suffix='w'
    />,
    <h3 style={{ marginTop: 18 }}>線上讀書會官網</h3>

]
class NavigationLink extends React.Component {
    // NOTE: Don't try using Stateless (function) component here. `ref` is
    // required by React-MD/AccessibleFakeButton, but Stateless components
    // don't have one by design:
    // https://github.com/facebook/react/issues/4936

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }


    render() {
        const { href, as, children, ..._props } = this.props
        return (

            <div {..._props} style={{ padding: 0 }}>
                <Link href={href} as={as}>
                    <a className='md-list-tile md-list-tile--mini' style={{ width: '100%', overflow: 'hidden' }}>
                        {children}
                    </a>
                </Link>
            </div>
        )
    }
}
export default ({ children, title = '歡迎來一起找夥伴線上來學習吧' }) => {

    const searchButton = (

        <Button
            icon
            tooltipLabel='搜尋功能尚未開放'
            tooltipDelay={150}
            tooltipPosition='left'
        >
            search
    </Button>
    )

    return (<div>
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />

            <link rel="stylesheet" href="/static/my.css" />
            <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
            <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Material+Icons' />
        </Head>
        <header>
            <NavigationDrawer
                navItems={[
                    <ListItem
                        key='0'
                        component={NavigationLink}
                        href='/'
                        leftIcon={<FontIcon>inbox</FontIcon>}
                        tileClassName='md-list-tile--mini'
                        primaryText={'精彩的讀書會'}
                    />,
                    <ListItem
                        key='1'
                        component={NavigationLink}
                        href='/donate'
                        leftIcon={<FontIcon>favorite</FontIcon>}
                        tileClassName='md-list-tile--mini'
                        primaryText={'贊助讀書會'}
                    />
                    ,
                    <ListItem
                        key='3'
                        component={NavigationLink}
                        href='/youtube'
                        leftIcon={<FontIcon>movie</FontIcon>}
                        tileClassName='md-list-tile--mini'
                        primaryText={'精彩影片'}

                    />
                    ,
                    <ListItem
                        key='4'
                        component={NavigationLink}
                        href='/about'
                        leftIcon={<FontIcon>face</FontIcon>}
                        tileClassName='md-list-tile--mini'
                        primaryText={'關於線上讀書會'}

                    />
                    ,
                    <ListItem
                        key='5'
                        component={NavigationLink}
                        href='/events'
                        leftIcon={<FontIcon>today</FontIcon>}
                        tileClassName='md-list-tile--mini'
                        primaryText={'線上讀書會活動'}

                    />

                ]}
                contentClassName='md-grid'
                drawerHeaderChildren={drawerHeaderChildren}
                mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
                tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
                desktopDrawerType={NavigationDrawer.DrawerTypes.CLIPPED}
                toolbarTitle={title}
                toolbarActions={searchButton}
            >

                {children}
            </NavigationDrawer>
        </header>
    </div>
    )
}
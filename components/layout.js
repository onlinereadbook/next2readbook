
import Link from 'next/link'
import Head from 'next/head'
import { PureComponent } from 'react'

import Avatar from 'react-md/lib/Avatars'
import Button from 'react-md/lib/Buttons'
import FontIcon from 'react-md/lib/FontIcons'
import ListItem from 'react-md/lib/Lists/ListItem'
import NavigationDrawer from 'react-md/lib/NavigationDrawers'
import SelectField from 'react-md/lib/SelectFields'



const avatarSrc = 'https://cloud.githubusercontent.com/assets/13041/19686250/971bf7f8-9ac0-11e6-975c-188defd82df1.png'

const drawerHeaderChildren = [
    <Avatar
        key={avatarSrc}
        src={avatarSrc}
        role='presentation'
        iconSized
        style={{ alignSelf: 'center', marginLeft: 16, marginRight: 16, flexShrink: 0 }}
    />,
    <SelectField
        id='account-switcher'
        defaultValue='Jonathan'
        menuItems={['Jonathan', 'Fred']}
        key='account-switcher'
        position={SelectField.Positions.BELOW}
        className='md-select-field--toolbar'
    />
]
class NavigationLink extends PureComponent {
    // NOTE: Don't try using Stateless (function) component here. `ref` is
    // required by React-MD/AccessibleFakeButton, but Stateless components
    // don't have one by design:
    // https://github.com/facebook/react/issues/4936
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
export default ({ children, title = '線上讀書會官方網站' }) => {

    const closeButton = (
        <Button
            icon
            tooltipLabel='Close the interactive demo'
            tooltipDelay={150}
            tooltipPosition='left'
        >
            close
    </Button>
    )

    return (<div>
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />


            <link rel="stylesheet" href="//unpkg.com/react-md/dist/react-md.teal-amber.min.css" />

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
                        primaryText={'精彩課程表'}
                    />,
                    <ListItem
                        key='1'
                        component={NavigationLink}
                        href='/donate'
                        leftIcon={<FontIcon>star</FontIcon>}
                        tileClassName='md-list-tile--mini'
                        primaryText={'贊助讀書會'}
                    />
                    ,
                    <ListItem
                        key='3'
                        component={NavigationLink}
                        href='/youtube'
                        leftIcon={<FontIcon>subtitles</FontIcon>}
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
                        leftIcon={<FontIcon>face</FontIcon>}
                        tileClassName='md-list-tile--mini'
                        primaryText={'線上讀書會活動'}

                    />
                ]}
                contentClassName='md-grid'
                drawerHeaderChildren={drawerHeaderChildren}
                mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
                tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
                desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
                toolbarTitle={title}
                toolbarActions={closeButton}
            >

                {children}
            </NavigationDrawer>
        </header>
    </div>
    )
}
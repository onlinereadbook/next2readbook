import React, { Component } from 'react'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Download from 'material-ui/svg-icons/file/file-download';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Router from 'next/router'


export default class MenuBar extends Component {



    golink = (href) => {
        Router.push(href)
        //console.log(e);
    }
    render() {
        return (<IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
        >

            <MenuItem
                primaryText="程式類"
                rightIcon={<ArrowDropRight />}
                menuItems={[
                    <MenuItem primaryText="線上 react 讀書會" onClick={this.golink.bind(this, '/about')} />,
                    <MenuItem primaryText="線上 vue 讀書會" onClick={this.golink.bind(this, '/youtube')} />,
                    <MenuItem primaryText="線上 angular 讀書會"
                    />,
                    <Divider />,
                    <MenuItem primaryText="線上 node 讀書會" />,
                    <MenuItem primaryText="線上 laravel 讀書會" />,
                ]}
            />

            <MenuItem
                primaryText="語言類"
                rightIcon={<ArrowDropRight />}
                menuItems={[
                    <MenuItem primaryText="線上 日語 讀書會" />,
                    <MenuItem primaryText="線上 西班牙 讀書會" />,
                    <MenuItem primaryText="線上 德文 讀書會" />,
                    <MenuItem primaryText="線上 英文 讀書會" />,
                ]}
            />
            <Divider />
            <MenuItem primaryText="讀書會活動" />
            <Divider />
            <MenuItem value="影片專區" primaryText="影片專區" />

        </IconMenu>
        )
    }
}

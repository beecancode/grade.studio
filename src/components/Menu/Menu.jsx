import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Menu } from 'semantic-ui-react';


export default function SideMenu({ handleLogout }) {

    return (
        <Menu inverted pointing vertical class="vertical-menu">
            <Menu.Header>
                <Link to="/"><Image src="../Grade.Studio1(2).gif" size='huge' /></Link>
            </Menu.Header>
            <Menu.Item>
                <Link to='' onClick={handleLogout}>Logout</Link>
            </Menu.Item>
        </Menu>
    )
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Menu, Button } from 'semantic-ui-react';
import './Menu.css'

export default function SideMenu({ handleLogout }) {

    return (
        <Menu inverted pointing vertical  style={{height: '100vh', width: '50vh', border: 'solid', color:'white'}} className='SideMenu'>
            <Menu.Header>
                <Link to="/"><Image src="../Grade.Studio1(2).gif" size='huge' /></Link>
            </Menu.Header>
            <Menu.Item style={{ border: 'solid'}}>
                <Button inverted color='white' onClick={handleLogout} size='large' style={{width: '20vh'}}> Log Out </Button>
                <Button inverted color='white' size='large' style={{width: '20vh'}} floated='right'>Add a Class</Button>
            </Menu.Item>
        </Menu>
    )
}

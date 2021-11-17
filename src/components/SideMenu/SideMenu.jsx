import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Menu, Button, Grid } from 'semantic-ui-react';
import './Menu.css'

export default function SideMenu({ handleLogout }) {

    return (
        <Menu inverted pointing vertical  style={{height: '100vh', width: '400px'}} className='SideMenu'>
            <Menu.Header>
                <Link to="/"><Image src="../Grade.Studio1(2).gif" size='huge' /></Link>
            </Menu.Header>
            <Menu.Item style={{ border: 'solid'}}>
                <Grid>
                <Grid.Row style={{justifyContent: 'space-evenly'}}>
                <Button inverted color='white' onClick={handleLogout} size='large' style={{minWidth: '175px', height: 'auto'}}> Log Out </Button>
                <Button inverted color='white' size='large' style={{minWidth: '175px', height: 'auto'}}>Add a Class</Button>
                </Grid.Row>
                </Grid>
            </Menu.Item>
        </Menu>
    )
}

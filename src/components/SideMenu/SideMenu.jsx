import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Menu, Button, Grid } from 'semantic-ui-react';
import './Menu.css'
import ClassList from '../ClassList/ClassList'


export default function SideMenu({ handleLogout, classes, getClasses }) {
    console.log(classes);
    return (
        <Menu inverted pointing vertical style={{ height: '100vh', width: '400px', textAlign: 'center' }} className='SideMenu'>
            <Menu.Header>
                <Link to="/"><Image src="../Grade.Studio1(2).gif" size='huge' /></Link>
            </Menu.Header>
            <Menu.Item style={{ border: 'solid' }}>
                <Grid>
                    <Grid.Row style={{ justifyContent: 'space-evenly' }}>
                        <Button inverted color='white' onClick={handleLogout} size='large' style={{ minWidth: '175px', height: 'auto' }}> Log Out </Button>
                        <Button inverted color='white' size='large' style={{ minWidth: '175px', height: 'auto' }}>Add a Class</Button>
                    </Grid.Row>
                </Grid>
            </Menu.Item>
            <Menu.Header as="h2" style={{
                color: 'white',
                border: 'solid',
                paddingTop: '5px',
                paddingBottom: '5px',
                marginTop: 'auto',
                fontFamily: 'Pangolin'
            }}>My Classes   
            </Menu.Header>
            <ClassList classes={classes ? classes : []} />

        </Menu>
    )
}

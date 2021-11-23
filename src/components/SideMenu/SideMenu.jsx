import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Menu, Button, Grid, Step, Header, Icon } from 'semantic-ui-react';
import './Menu.css'
import ClassList from '../ClassList/ClassList'


export default function SideMenu({ handleLogout, classes, showClassForm, setButtonClick }) {
    console.log(classes);

    function handleButtonClick(){
        setButtonClick = true
    }

    return (
        <Menu inverted pointing vertical style={{ minHeight: '100vh', minWidth: '500px', textAlign: 'center' }} className='SideMenu'>
            <Menu.Header>
                <Link to="/"><Image src="../Grade.Studio1(2).gif" size='massive' style={{ minWidth: '500px' }} /></Link>
            </Menu.Header>
            <Menu.Item style={{ border: 'solid' }}>
                <Grid>
                    <Grid.Row style={{ justifyContent: 'space-evenly' }}>
                        <Button inverted color='facebook' onClick={handleLogout} size='large' style={{ minWidth: '175px', height: 'auto' }}> Log Out </Button>
                        {/* <Button inverted color='white' onClick={handleButtonClick} size='large' style={{ minWidth: '175px', height: 'auto' }}>Add a Class</Button> */}
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
            <Step.Group stackable vertical inverted style={{ maxWidth: '75vw', fontFamily: 'Pangolin' }}>
                <Header as='h2' style={{ color: 'white', marginTop: '15px', marginBottom: 'auto', padding: '5px', fontFamily: 'Pangolin' }}>Grade.Studio Steps for Success</Header>
                <Step active>
                    <Icon name='pencil' />
                    <Step.Content>
                        <Step.Title style={{ fontSize:'18px', fontFamily: 'Pangolin' }}>Add a Class</Step.Title>
                        <Step.Content>
                            <ol>
                                <li>Add your class by name</li>
                                <li>Add the names of all of your students.</li>
                            </ol>
                        </Step.Content>
                    </Step.Content>
                </Step>

                <Step>
                    <Icon name='paperclip' />
                    <Step.Content>
                        <Step.Title style={{ fontSize:'18px', fontFamily: 'Pangolin' }}>Add assignments</Step.Title>
                        <Step.Content>
                            <ol>
                                <li>Click on the desired class</li>
                                <li>Add an assignment to be graded</li>
                                The students are automatically populated!
                            </ol>
                        </Step.Content>
                    </Step.Content>
                </Step>

                <Step >
                    <Icon name='percent' />
                    <Step.Content>
                        <Step.Title style={{ fontSize:'18px', fontFamily: 'Pangolin' }}>Grade an Assignment</Step.Title>
                        <ol>
                        <li>Choose an assignment to be graded</li>
                        <li>Input the number of correct answers for each Student</li>
                        <li>See your students' percentage grades automatically calculated</li>
                        <li>Save them for safe keeping!</li>
                        </ol>
                    </Step.Content>
                </Step>
            </Step.Group>

        </Menu>
    )
}

import React from 'react';
import { Container, Header, Image } from 'semantic-ui-react'

export default function WebsiteDescription() {

    return (
        <Container text style={{ marginTop: '40px', textAlign: 'center', fontFamily: 'Pangolin', color: 'white', fontSize:'15px'}}>
            <Image src="../Grade.Studio1(2).gif" size='large' style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '30px' }} />
            <p>Grade.Studio is an easy grading tool to make those long nights grading assignments a little easier!</p>
            <p>Once you have created an account, you can add to your list of classes, and add and edit assignments for each class.</p>
            <p>After clicking on a classes assignment, you can add in how many answers each student made correctly, and automatically calculate each students percentage grade all at once!</p>
            <p>Best of all, once you have generated all the grades for an assignment, you have the option to automatically generate a .txt file with all your student’s grades!</p>
            <Header as='h3' size='mid' style={{ fontFamily: 'Pangolin', color: 'white' }}>Happy Grading!</Header>
        </Container>
    )
}
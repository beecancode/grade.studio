import React from 'react';
import { Container, Header } from 'semantic-ui-react'

export default function WebsiteDescription() {

    return (
        <Container text>
            <Header as='h1' style={{ border: 'solid', color: 'white' }}> Welcome to Grade.Studio</Header>
            <p>Grade.Studio is an easy grading tool to make those long nights grading assignments a little easier!

                Once you have created an account, you can add to your list of classes, and add and edit assignments for each class.

                After clicking on a classes assignment, you can add in how many answers each student made correctly, and automatically calculate each students percentage grade all at once!

                Best of all, once you have generated all the grades for an assignment, you have the option to automatically generate a .txt file with all your student’s grades!
            </p>
            <h3>Happy Grading!</h3>
        </Container>
    )
}
import React from 'react'
import { Table, Header } from 'semantic-ui-react'

export default function ClassView() {
    return (
        <div>
            <Header as="h1" style={{
                color: 'white',
                border: 'solid',
                width: '100vh',
                textAlign: 'center',
                marginBottom: 'auto',
            }}>Class Name Here</Header>
            <Table celled color='black' inverted selectable style={{ border: 'solid', width: '100vh', textAlign: 'center', marginTop: 'auto' }}>
                <Table.Header as='h2' >Class Name Assignments</Table.Header>
                <Table.Body>
                    <Table.Row disabled>
                        <Table.Cell>Mid-Chapter Assessment</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}
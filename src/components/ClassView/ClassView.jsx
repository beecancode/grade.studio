
import React, { useState } from 'react'
import { Table, Header } from 'semantic-ui-react'
import { useParams } from "react-router-dom";

function getClassName(){

}

export default function ClassView({classes}) {

    const [className, setClassName] = useState("")
    const thisClass = useParams();
    console.log(thisClass)
    const aClass = classes.find(element => element._id === thisClass.classId)

    return (
        <div>
            <Header as="h1" style={{
                color: 'white',
                border: 'solid',
                width: '100vh',
                textAlign: 'center',
                marginBottom: 'auto',
            }}>{ aClass.name }</Header>
            <Table celled color='black' inverted selectable style={{ 
                border: 'solid', 
                width: '100vh', 
                textAlign: 'center', 
                marginTop: 'auto' }}>
                <Table.Header as='h2' >{ aClass.name } Assignments</Table.Header>
                <Table.Body>
                    <Table.Row disabled>
                        <Table.Cell>Mid-Chapter Assessment</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}
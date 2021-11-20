import React, { useState } from 'react'
import { Table, Header } from 'semantic-ui-react'
import { useParams } from "react-router-dom";
import AssignmentForm from '../AssignmentForm/AssignmentForm';
import AssignmentList from '../AssignmentList/AssignmentList';
import SelectedAssignment from '../SelectedAssignment/SelectedAssignment'

export default function ClassView({classes, getClasses}) {

    const [className, setClassName] = useState("")
		const [ selectedAssignment, setSelectedAssignment] = useState(null)
    const thisClass = useParams();
    const aClass = classes.find(element => element._id === thisClass.classId)

		console.log(aClass?.assignments)
    return !aClass ? <></>: (
        <div style={{ backgroundColor:'#262626', padding: '10px', minWidth:'70vw' }}>
            <Header as="h1" style={{
                color: 'white',
                border: 'solid',
                textAlign: 'center',
                marginBottom: 'auto',
                fontFamily: 'Pangolin'
            }}>{ aClass.name }</Header>
            
            <Table celled color='black' inverted selectable style={{
                color: 'white',
                border: 'solid',
                textAlign: 'center',
                marginBottom: 'auto'
            }}>
              <Header as="h2" style={{
                color: 'white',
                border: 'solid',
                textAlign: 'center',
                marginBottom: 'auto',
                fontFamily: 'Pangolin'
            }}>{ aClass.name } Assignments</Header>
									<AssignmentList setSelectedAssignment={setSelectedAssignment} assignments={aClass.assignments}/>
            </Table>
            <AssignmentForm aClass={aClass} getClasses={getClasses}/>
					{ selectedAssignment && <SelectedAssignment assignment={selectedAssignment}	students={aClass.students}/>}
        </div>
    )
}

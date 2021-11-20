import { Table } from 'semantic-ui-react'
export default function AssignmentList({assignments, setSelectedAssignment}){

	return(
		<Table.Body>
			{assignments && assignments.map((assignment) => {
				const {name, _id} = assignment
				return(<Table.Row key={_id} onClick={() => setSelectedAssignment(assignment)}>{name}</Table.Row>)
			})}
		</Table.Body>
	)
}

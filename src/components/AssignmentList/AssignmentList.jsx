import { Table } from 'semantic-ui-react'
export default function AssignmentList({assignments, setSelectedAssignment}){

	return(
		<Table.Body celled style={{
			color: 'white',
			paddingTop: '15px',
			paddingBottom: '5px',
			marginTop: 'auto',
			fontFamily: 'Pangolin',
			fontSize: '20px'
		}}>
			{assignments && assignments.map((assignment) => {
				const {name, _id} = assignment
				return(<Table.Row key={_id} onClick={() => setSelectedAssignment(assignment)}>
					<Table.Cell>
						{name}
					</Table.Cell>
					</Table.Row>)
			})}
		</Table.Body>
	)
}

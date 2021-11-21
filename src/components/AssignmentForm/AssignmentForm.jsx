import React, { useState } from 'react';
import  { addAssignment } from '../../utils/assignmentService'
import { Button, Form } from "semantic-ui-react";

export default function AssignmentForm({ aClass, getClasses }) {
	const [state, setState] = useState({
		name: "",
		possAnswers: 0,
		classId: aClass._id
	})

	async function submitAssignment(){
		const newAssignment = await addAssignment(state)
		console.log(newAssignment)
		await getClasses()
		console.log(aClass)
	}

	function changeHandler({target:{name, value}}){
		setState({
			...state,
			[name]: value
		})


	}

	return (
		<div style={{ color:'white', border:'solid', textAlign:'center'}}>
			<Form style={{ color:'white', marginTop:'10px'}}>
				<label style={{ color:'white', fontSize:'20px', marginTop:'15px' }}>Name of Assignment</label>
				<Form.Input
					name="name" 
					placeholder="i.e Mid-Chapter Test"
					value={state.name}
					onChange={changeHandler}
					style={{ color:'white', width:'30vw'}}
				/>
				<label style={{ color:'white', fontSize:'20px' }}>Possible answers</label>
				<Form.Input
					name="possAnswers"
					type="Number"
					value={state.possAnswers}
					onChange={changeHandler}
					style={{ color:'white', width:'6vw'}}
				/>
			</Form>
			<Button inverted color="white" onClick={submitAssignment} size="large" style={{ marginTop:'20px', marginBottom: '20px' }} >Add Assignment</Button>
		</div>
	)
}


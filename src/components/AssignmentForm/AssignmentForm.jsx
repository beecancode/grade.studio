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
		<div>
			<Form>
				<label>Name of Assignment</label>
				<Form.Input
					name="name"
					placeholder="i.e Mid-Chapter Test"
					value={state.name}
					onChange={changeHandler}
				/>
				<label>Number of Possible Answers</label>
				<Form.Input
					name="possAnswers"
					type="Number"
					value={state.possAnswers}
					onChange={changeHandler}
				/>
			</Form>
			<Button onClick={submitAssignment}>Add Assignment</Button>
		</div>
	)
}


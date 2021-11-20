import React, { useState } from 'react'

export default function SelectedAssignment({ assignment, students }){

	const { possAnswers } = assignment
	const initialObject = {}
	for(const { name, _id } of students){
		initialObject[_id] = possAnswers
	}
	const [ grades, setGrades ] = useState(initialObject)
	function submitGrades(){
		console.log(JSON.stringify({grades, assignmentId: assignment._id}))
	}
	function handleChange({target:{name, value}}){
		setGrades({...grades, [name]: Number(value)})
	}

	function percentage(correct, possible){
		return (100 * correct) / possible;
	}

	return(
		<>
			{students.map(({_id, name}) => {
				return(
					<div key={_id}>
						{name}
						<input type="Number" value={grades[_id]} max={possAnswers} min={0} name={_id} onChange={handleChange}/>
						   /{possAnswers} 
					</div>
				)
			})}
			<button onClick={submitGrades}>submit grades</button>
		</>
	)
}
import React, { useState, useEffect } from 'react'
import { Label, Table, Button, Input } from 'semantic-ui-react'
import { addSubmission } from '../../utils/submissionService'
export default function SelectedAssignment({ assignment, students }) {
	const [correctAnswers, setCorrectAnswers] = useState({})
	const [currentAssignmentId, setCurrentAssignmentId] = useState("")
	const { possAnswers, submissions } = assignment



	useEffect(() => {
		if (currentAssignmentId !== assignment._id) {
			const correctAnswersObject = {}
			for (const {  _id } of students) {
				let score = possAnswers
				const alreadySubmitted = submissions.find(({ student }) => student === _id)
				if (alreadySubmitted) {
					score = alreadySubmitted.correctAnswers
				}
				correctAnswersObject[_id] = score
			}
			setCurrentAssignmentId(assignment._id)
			setCorrectAnswers(correctAnswersObject)
		}
	}, [correctAnswers, students, assignment, possAnswers, submissions])

	async function submitGrades() {
		const submittedGrades = await addSubmission({
			correctAnswers,
			assignmentId: assignment._id
		})
	}
	
	async function updateGrades() {
		console.log('-----> now update instead of submit', correctAnswers, assignment._id)
	}

	function handleChange({ target: { name, value } }) {
		setCorrectAnswers({ ...correctAnswers, [name]: Number(value) })
	}

	function percentage(correct, possible) {
		return +((100 * correct) / possible).toFixed(0);
	}



	return (
		<div style={{ textAlign: 'center' }} >
			<Table celled inverted fixed >
				{students.map(({ _id, name }) => {
					return (

						<Table.Row key={_id} style={{ fontSize: '20px', width: '50vw' }}>
							<Table.Cell>
								{name}
							</Table.Cell>
							<Table.Cell >
								<Input
									id="correct"
									labelPosition='right'
									type="number"
									value={correctAnswers[_id]}
									max={possAnswers}
									min={0}
									name={_id}
									onChange={handleChange}
								>
									<input style={{ width: '90px' }} />
									<Label>/{possAnswers}</Label>
								</Input>
							</Table.Cell>
							<Table.Cell>
								{percentage(correctAnswers[_id], possAnswers)}%
							</Table.Cell>


						</Table.Row>

					)
				})}
			</Table>
			{submissions.length > 0
				?
				<Button
					inverted color="white"
					onClick={updateGrades}
					size="large"
				>
					update grades
				</Button>
				:
				<Button inverted color="white" onClick={submitGrades} size="large"  >Submit Grades</Button>
			}


		</div>
	)
}
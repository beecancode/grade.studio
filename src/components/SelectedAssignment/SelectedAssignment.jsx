import { enumNumberBody } from '@babel/types'
import React, { useState, useEffect } from 'react'
import { Label, Table, Button, Input, Header } from 'semantic-ui-react'
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
		// console.log('-----> now update instead of submit', JSON.stringify(correctAnswers, assignment._id))
		const updatedGrades = await addSubmission({
			correctAnswers,
			assignmentId: assignment._id
		})
	}

	function handleChange({ target: { name, value } }) {
		setCorrectAnswers({ ...correctAnswers, [name]: Number(value) })
	}

	function percentage(correct, possible) {
		return +((100 * correct) / possible).toFixed(0);
	}



	return (
		<div style={{ textAlign: 'center' }} >
			<Header as="h1" style={{
                color: 'white',
                border: 'solid',
                textAlign: 'center',
                marginBottom: 'auto',
                fontFamily: 'Pangolin',
				fontSize: '40px',
				background: '#262626'
            }}>{ assignment.name }</Header>
			<Table celled inverted fixed style={{
                color: 'white',
                border: 'solid',
                textAlign: 'center',
                fontFamily: 'Pangolin',
				marginTop: 'auto'
            }}>
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
						{Number.isFinite(correctAnswers[_id]) !== true
						?
						<Table.Cell>
						Add or Choose an Assignment to Grade!
						</Table.Cell>
						:
							<Table.Cell>
								{percentage(correctAnswers[_id], possAnswers)}%
							</Table.Cell>
							}
							


						</Table.Row>

					)
				})}
			</Table>
			{submissions.length > 0
				?
				<Button
					inverted color="white"
					onClick={updateGrades}
					size="massive"
				>
					update grades
				</Button>
				:
				<Button inverted color="white" onClick={submitGrades} size="massive"  >Submit Grades</Button>
			}


		</div>
	)
}
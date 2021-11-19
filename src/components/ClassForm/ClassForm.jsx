import React, { useState } from 'react';
import { addClass } from '../../utils/classService'
import {
    Button,
    Form,
} from "semantic-ui-react";


export default function ClassForm({getClasses}) {

    const [state, setState] = useState({
        name: "",
        students: [""]
    })

    async function submitClass(){
        const response = await addClass(state)
        console.log(response);
        await getClasses()

    }

    function formHandler(eventObject) {
        const { name, value } = eventObject.target
        if (name === "name") {
            setState({
                ...state, name: value
            })
        } else {
            const [, indexString] = name.split(" ")
            const index = Number(indexString)
            const newStudentsArray = [...state.students]
            newStudentsArray[index] = value
            setState({ ...state, students: newStudentsArray })
        }
    }

    function addStudentHandler() {
        setState({...state, students: [...state.students,""]})
    }

    function deleteStudentHandler(index) {
        const newStudentsArray = [...state.students]
        newStudentsArray.splice(index,1)
        setState({ ...state, students: newStudentsArray })
    }

    const disableSubmit = (state.students[state.students.length - 1].trim() === "") || (state.name.trim() === "")

    return (
        <div>
            <Form>
                <Form.Input
                    name="name"
                    placeholder="Class Name"
                    value={state.name}
                    onChange={formHandler}
                />
                {state.students.map((name, index) => {
                    
                    return (<><div style={{ display: 'flex', flexDirection: 'row-reverse' }}><Form.Input
                        name={`students ${index}`}
                        placeholder="Student Name"
                        value={name}
                        onChange={formHandler}
                    />
                    <div style={{ position: 'absolute'  }}><Button  floated='right' onClick={() => deleteStudentHandler(index)}>X</Button></div>
                    </div>{(index === state.students.length - 1 && name.trim() !== "") &&
                     <Button onClick={addStudentHandler}>Add Another Student</Button>}
                     
                     </>)
                })}
            </Form>
            <Button onClick={submitClass} disabled={disableSubmit} className="btn">
                Submit New Class
            </Button>
        </div>
    )
}
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
        await getClasses(state)

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
        <div style={{ color:'white', border:'solid', textAlign:'center', padding: '10px', minWidth:'60vw'}}>
            <Form >
                <label style={{ color:'white', fontSize:'20px', marginTop:'15px' }}>Name of Class</label>
                <Form.Input
                    name="name"
                    placeholder="Class Name"
                    value={state.name}
                    onChange={formHandler}
                />
                <label style={{ color:'white', fontSize:'20px', marginTop:'15px' }}>Student Name</label>
                {state.students.map((name, index) => {
                    
                    return (<><div style={{ display: 'flex', flexDirection: 'row-reverse', minWidth:'60vw' }}><Form.Input
                        name={`students ${index}`}
                        placeholder="Student Name"
                        value={name}
                        onChange={formHandler}
                        style={{ minWidth:'60vw' }}
                    />
                    <div style={{ position: 'absolute'  }}><Button  floated='right' onClick={() => deleteStudentHandler(index)}>X</Button></div>
                    </div>
                     
                     
                     </>)
                })}
            </Form>
            <Button inverted color="white" onClick={addStudentHandler}>Add Another Student</Button>
            <Button inverted color="white" onClick={submitClass} disabled={disableSubmit} className="btn">
                Submit New Class
            </Button>
        </div>
    )
}
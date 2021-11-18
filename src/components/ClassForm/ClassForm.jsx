import React, { useState } from 'react';
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import { useNavigate, Link } from "react-router-dom";
import {
    Button,
    Form,
    Grid,
    Header,
    Image,
    Segment,
} from "semantic-ui-react";


export default function ClassForm() {

    const [state, setState] = useState({
        name: "",
        students: [""]
    })

    function submitClass(){
        console.log(JSON.stringify(state));
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
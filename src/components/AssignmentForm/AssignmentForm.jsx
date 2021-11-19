import React, { useState } from 'react';

import { Button, Form } from "semantic-ui-react";

export default function AssignmentForm() {
    const [state, setState] = useState({
        name: String,
        possAnswers: Number,
        submissions: [""]
    })

    return (
        <div>
            <Form>
                <label for="name">Name of Assignment</label>
                <Form.Input
                name="name"
                placeholder="i.e Mid-Chapter Test"
                value={state.name}
                />
                <label for="possAnswers">Number of Possible Answers</label>
                <Form.Input
                name="possAnswers"
                type="Number"
                value={state.possAnswers}
                />
            </Form>
        </div>
    )
}


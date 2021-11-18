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
    return (
    <div>
    <Form>
        <Form.Input
        name="name"
        placeholder="Class Name"
        value={state.name}
        />
    </Form>
    <Form>
        <h3>Add your Students!</h3>
        <Form.Input
        name="name"
        placeholder="Student Name"
        value={state.name}
        />
    </Form>    
        <Button type ="submit" className="btn">
        Submit New Class
        </Button>
    </div>    
)}
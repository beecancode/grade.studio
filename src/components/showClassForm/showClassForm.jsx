import React from 'core-js/library/fn/reflect/es7/metadata'
import ClassForm from '../ClassForm/ClassForm'
import { setButtonClick } from 'src/pages/Layout/Layout.jsx'


export default function showClassForm({setButtonClick}){
    if(setButtonClick = true) return(
        <ClassForm />
    )

}
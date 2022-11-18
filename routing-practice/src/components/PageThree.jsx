import React from 'react'
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';


const PageThree = (props) => {

    // get variableName
    const {variableOne, colorOne, colorTwo} = useParams();
    return (
        <div>
            <h1 style={{ color: colorOne, backgroundColor: colorTwo }}>The word is: {variableOne}</h1>
            
        </div>

    )
}

export default PageThree
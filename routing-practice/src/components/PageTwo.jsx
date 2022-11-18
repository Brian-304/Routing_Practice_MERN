import React from 'react';
import { useParams } from 'react-router-dom';


const PageTwo = (props) => {

    // get variableName
    const { variableId } = useParams();
    // const { variableName } = useParams();
    console.log(variableId);
    return (
        <div>
            {isNaN (variableId) ?
            //isNaN is a function and pass in an argument
            <h1 style={{ color: "blue" }}>The word is: { variableId }</h1> 
            : <h1 style={{ color: "blue" }}>The number is: { variableId }</h1>}
        </div>
    );
}


export default PageTwo
import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore(props) {

    let average = props.Total / props.goal;

    return (
        <div className="container">

            <h1>Student Score Calculator</h1>

            <p>Name: {props.Name}</p>

            <p>School: {props.School}</p>

            <p>Total Score: {props.Total}</p>

            <p>Subjects: {props.goal}</p>

            <h2>
                Average Score: {average}
            </h2>

        </div>
    );
}

export default CalculateScore;
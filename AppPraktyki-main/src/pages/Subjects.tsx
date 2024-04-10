import { useState } from "react";
import { Link } from "react-router-dom";

const _subjects = ["Matematyka", "Chemia", "Biologia"];
type Props = { text: string }
function Subject(props : Props) {
    return (
        <div>
            <button>{props.text}</button>
        </div>
    )
}

const Subjects = () => {
    return (
        <>
            {_subjects.map((subject, index) => (
                <Subject key={index} text={subject}></Subject>
            ))}
        </>
    )
}

export default Subjects;
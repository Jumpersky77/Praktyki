import Button from '@mui/material/Button';

import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const _subjects = ["Matematyka", "Chemia", "Biologia"];
type Props = { text: string, onSubjectClick: (subject: string) => void }
function Subject(props : Props) {
    return (
        <div>
            <Button variant="outlined" onClick={() => props.onSubjectClick(props.text)}>{props.text}</Button>
        </div>
    )
}

const Subjects = () => {
    const SubjectClick = (text : string) => {
        console.log(text)
        //TO DO redirect
    };
    return (
        <>
            <Header accountName={"example"} subscriptionDaysLeft={"14"}></Header>
            <br/>
            {_subjects.map((subject, index) => (
                <Subject key={index} text={subject} onSubjectClick={SubjectClick}></Subject>
            ))}
        </>
    )
}

export default Subjects;
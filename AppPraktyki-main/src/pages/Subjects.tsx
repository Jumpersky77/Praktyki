import Button from '@mui/material/Button';

import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const _subjects = ["Matematyka", "Chemia", "Biologia"];
type Props = { text: string }
function Subject(props : Props) {
    return (
        <div>
            <Button variant="outlined">{props.text}</Button>
        </div>
    )
}

const Subjects = () => {
    return (
        <>
            <Header accountName={"example"} subscriptionDaysLeft={"14"}></Header>
            {_subjects.map((subject, index) => (
                <Subject key={index} text={subject}></Subject>
            ))}
        </>
    )
}

export default Subjects;
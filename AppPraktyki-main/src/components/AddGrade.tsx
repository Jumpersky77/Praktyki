import React from 'react';
import "../style/styleR.css";
import {
    Button,
    Container,
    TextField,
} from "@mui/material";
import AnswerServ from '../service/AnswerServ';
import { useContext, useState } from "react";



const handleInputChange = () => {

}

type Props = { answerID: number }

function AddGrade(props: Props) {
    const [input, setInput] = useState("");
    async function handleAddGrade(answerID: number) {
        const grade = parseInt(input);
        console.log(grade);
        if(grade >= 1 && grade <= 10) {
            AnswerServ.saveGrade(grade, answerID);
        }
    }
    return (
        <div id="add-grade">
            <input className="grade-input" id='grade-number' type="number" min={1} max={10} step={1} value={input} onChange={e => setInput(e.target.value)}/>
            <Button
                variant="contained"
                id='add-grade-button'
                onClick={() => handleAddGrade(props.answerID)}
            >
                Dodaj ocenę
            </Button>
        </div>
    )
}

export default AddGrade;

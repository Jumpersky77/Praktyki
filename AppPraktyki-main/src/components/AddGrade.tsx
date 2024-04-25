import React, { useState } from 'react';
import "../style/styleR.css";
import {
    Button,
    Container,
    TextField,
} from "@mui/material";

const AddGrade = () => {
    return (
            <div id="add-grade">
                <input className="grade-input" type="number" min={1} max={10} step={1}/>
                <Button
                    variant="contained"
                    id='add-grade-button'
                    >
                    Dodaj ocenę
                </Button>
            </div>
    )
}

export default AddGrade;
import React, { useState } from 'react';
import Button from '@mui/material/Button';

type Props = { id: string, name: string, author: string, rating: number, onAnswerClick: (id: string) => void }
const Answer = (props : Props) => {
    return (
            <div>
                <Button className='BlockAnswers' variant="outlined" id={props.id} onClick={() => props.onAnswerClick(props.id)}>{props.name}, dodał: {props.author}, ocena: {props.rating}</Button>
            </div>
    )
}

export default Answer;
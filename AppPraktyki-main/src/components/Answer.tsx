import React, { useState } from 'react';
import Button from '@mui/material/Button';

type Props = { id: string, name: string, author: string, rating: number, onAnswerClick: (id: string) => void }
const Answer = (props : Props) => {
    const ratingRound = Math.round(props.rating * 10) / 10
    return (
            <div>
                <Button className='BlockAnswers' variant="outlined" id={props.id} onClick={() => props.onAnswerClick(props.id)}>{props.name}, dodał: {props.author}, ocena: {ratingRound}</Button>
            </div>
    )
}

export default Answer;
import React, { useState } from 'react';
import Button from '@mui/material/Button';

type Props = { id: string, name: string, author: string, rating: string }
const Answer = (props : Props) => {
    return (
            <div>
                <Button variant="outlined" id={props.id}>{props.name}, dodał: {props.author}, ocena: {props.rating}</Button>
            </div>
    )
}

export default Answer;
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Header from '../components/Header';

const _answers = [{
    id: "0",
    name: "Równania kwadratowe",
    author: "Miłosz",
    rating: "7.6",
},
{
    id: "1",
    name: "Planimetria",
    author: "Bartosz",
    rating: "4.9",
}]
type Props = { id: string, name: string, author: string, rating: string, onAnswerClick: (id:string)=> void}
const Answer = (props : Props) => {
    return (
            <div>
                <Button onClick={()=>props.onAnswerClick(props.id)} variant="outlined" id={props.id}>{props.name}, dodał: {props.author}, ocena: {props.rating}</Button>
            </div>
    )
}

const Teachers = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const subject = searchParams.get('subject');
    const teacher = searchParams.get('teacher')
    const navigate = useNavigate();
    const handleAnswerClick = (answerID: string) => {
        navigate(`/details?answerid=${answerID}`);
    };

    return (
        <>
            <Header accountName={"example"} subscriptionDaysLeft={"14"} />
            <div>
                <h2>Odpowiedzi</h2>
                {subject && <p>Przedmiot: {subject}</p>}
                {teacher && <p>Nauczyciel: {teacher}</p>}
                {subject === "Matematyka" && teacher === "Ewa Znamirowska" && _answers.map((answer, index) => (
                    <Answer id={answer.id} name={answer.name} author={answer.author} rating={answer.rating} onAnswerClick={handleAnswerClick}></Answer>
                ))}
            </div>
        </>
    );
}

export default Teachers;
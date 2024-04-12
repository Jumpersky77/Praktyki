import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Header from '../components/Header';
import Answer from '../components/Answer';
import "../style/styleR.css";

const _answers = [{
    id: "0",
    name: "Równania kwadratowe",
    author: "Miłosz",
    rating: "7.6",
    type: "kartkówka"
},
{
    id: "1",
    name: "Planimetria",
    author: "Bartosz",
    rating: "4.9",
    type: "sprawdzian"
},
{
    id: "2",
    name: "Ułamki zwykłe i niezwykłe",
    author: "Mikołaj",
    rating: "6.2",
    type: "inne"
}];

type Props = { value: string }


const Teachers = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const subject = searchParams.get('subject');
    const teacher = searchParams.get('teacher')
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [searchTypes, setSearchTypes] = useState<string[]>([]);

    const Checkbox = (props: Props) => {
        return (
            <div className='answer-search-checkbox'>
                <input
                    type="checkbox"
                    name='search-type'
                    value={props.value}
                    onChange={handleCheckboxChange}
                    checked={searchTypes.includes(props.value)}
                />
                {props.value}
            </div>
        )
    }

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchTypes(prevTypes => {
            if (prevTypes.includes(value)) {
                return prevTypes.filter(type => type !== value);
            } else {
                return [...prevTypes, value];
            }
        });
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleAnswerClick = (answerID: string) => {
        navigate(`/details?answerid=${answerID}`);
    };

    const filteredAnswers = _answers.filter(answer => {
        if (searchTypes.length > 0 && !searchTypes.includes(answer.type)) {
            return false;
        }
        return answer.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <>
            <Header accountName={"example"} subscriptionDaysLeft={"14"} />
            <div>
                <h2>Odpowiedzi</h2>
                <input
                    type="text"
                    placeholder="Szukaj odpowiedzi..."
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <Checkbox value={"kartkówka"}></Checkbox>
                <Checkbox value={"sprawdzian"}></Checkbox>
                <Checkbox value={"inne"}></Checkbox>
                <Button variant='outlined'>Dodaj odpowiedź</Button>
                {subject && <p>Przedmiot: {subject}</p>}
                {teacher && <p>Nauczyciel: {teacher}</p>}
                {subject === "Matematyka" && teacher === "Ewa Znamirowska" && filteredAnswers.map((answer, index) => (
                    <div key={answer.id}>
                    <Answer id={answer.id} name={answer.name} author={answer.author} rating={answer.rating} key={answer.id} onAnswerClick={handleAnswerClick}></Answer>
                    <br />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Teachers;

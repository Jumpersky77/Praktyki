import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Header from "../components/Header";
import "../style/styleR.css"
const _subjects = ["Matematyka", "Chemia", "Biologia", "Fizyka", "Wychowanie Fizyczne", "Język Polski", "Język Angielski"];

const Subjects = () => {
    const navigate = useNavigate();

    const handleSubjectClick = (subject: string) => {
        navigate(`/teachers?subject=${subject}`);
    };

    return (
        <>
            <Header accountName={"example"} subscriptionDaysLeft={"14"} />
            <h1 className='title'>Lista Przedmiotów</h1>
            {_subjects.map((subject, index) => (
                <div key={index} className='BlockContainer'>
                    <Button className='Block'
                        variant="outlined"
                        color="primary"
                        size="large"
                        onClick={() => handleSubjectClick(subject)}
                    >
                        {subject}
                    </Button>
                </div>
            ))}
        </>
    );
}

export default Subjects;

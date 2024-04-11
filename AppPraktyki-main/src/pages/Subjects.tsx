import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Header from "../components/Header";

const _subjects = ["Matematyka", "Chemia", "Biologia"];


const Subjects = () => {
    const navigate = useNavigate();

    const handleSubjectClick = (subject: string) => {
        navigate(`/teachers?subject=${subject}`);
    };

    return (
        <>
            <Header accountName={"example"} subscriptionDaysLeft={"14"} />
            <br />
            {_subjects.map((subject, index) => (
                <div key={index}>
                    <Button variant="outlined" onClick={() => handleSubjectClick(subject)}>{subject}</Button>
                </div>
            ))}
        </>
    );
}

export default Subjects;
import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import Header from '../components/Header';

const teachers = ["Ewa Znamirowska", "Dorota Gut"];

const Teachers = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const subject = searchParams.get('subject');

    return (
        <>
            <Header accountName={"example"} subscriptionDaysLeft={"14"} />
            <div>
                <h2>Lista nauczycieli</h2>
                {subject && <p>Przedmiot: {subject}</p>}
                {subject === "Matematyka" && teachers.map((teacher, index) => (<Button variant="outlined" key={index}>{teacher}</Button>))}
            </div>
        </>
    );
}

export default Teachers;
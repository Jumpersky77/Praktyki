import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Header from '../components/Header';

const teachers = ["Ewa Znamirowska", "Dorota Gut"];

const Teachers = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const subject = searchParams.get('subject');
    const navigate = useNavigate();
    const handleTeacherClick = (teacher: string) => {
        navigate(`/answers?subject=${subject}&teacher=${teacher}`);
    };

    return (
        <>
            <Header accountName={"example"} subscriptionDaysLeft={"14"} />
            <div>
                <h2>Lista nauczycieli</h2>
                {subject && <p>Przedmiot: {subject}</p>}
                {subject === "Matematyka" && teachers.map((teacher, index) => (
                    <div>
                        <Button variant="outlined" key={index} onClick={() => handleTeacherClick(teacher)}>{teacher}</Button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Teachers;
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Await } from "react-router-dom";
import Button from "@mui/material/Button";
import "../style/styleR.css";
import { Teacher } from "../model/teacher";
import { useAppNavigation } from "../router/router";
import { Subject } from "../model/subject";

const BASE_URL = "http://localhost:8080";

async function fetchTeachers(subject : Subject) {
  const response = await fetch(`${BASE_URL}/teachers?subjectID=${subject.id}`);
  const body: Teacher[] = await response.json();
  return body;
};
const Teachers = () => {
  const location = useLocation();
  const subject : Subject = location.state;
  const searchParams = new URLSearchParams(location.search);
  const navigate = useAppNavigation();
  const handleTeacherClick = (teacher: string) => {
    // TODO: how to handel null subject
    subject && navigate.toAnswersPage(subject, teacher);
  };

  return (
    <>
      <React.Suspense>
      <Await
        resolve={fetchTeachers(subject)}
        children={(teachers: Teacher[]) => {
          return (
            <>
              <h1 className="title">Lista Nauczycieli</h1>
              {subject && <p className="subtitle">Przedmiot: {subject.name}</p>}
              {teachers.map((teacher, index) => (
                <div key={index} className="BlockContainer">
                  <Button
                    className="Block"
                    variant="outlined"
                    color="primary"
                    size="large"
                    onClick={() => handleTeacherClick(teacher.firstName + " " + teacher.lastName)}
                  >
                    {teacher.firstName + " " + teacher.lastName}
                  </Button>
                </div>
              ))}
            </>
          );
        }}
      ></Await>
    </React.Suspense>
    </>
  );
};

export default Teachers;

import React, { useContext } from "react";
import { Await } from "react-router-dom";
import Button from "@mui/material/Button";
import "../style/styleR.css";
import { Subject } from "../model/subject";
import { useAppNavigation } from "../router/router";

const BASE_URL = "http://localhost:8080";

const fetchSubjects = async () => {
  const response = await fetch(`${BASE_URL}/subjects`);
  const body: Subject[] = await response.json();
  return body;
};

const Subjects = () => {
  const navigate = useAppNavigation();

  const handleSubjectClick = (subject: string) => {
    navigate.toTeacherPage(subject);
  };

  return (
    <React.Suspense>
      <Await
        resolve={fetchSubjects()}
        children={(subjects: Subject[]) => {
          return (
            <>
              <h1 className="title">Lista Przedmiotów</h1>
              {subjects.map((subject, index) => (
                <div key={index} className="BlockContainer">
                  <Button
                    className="Block"
                    variant="outlined"
                    color="primary"
                    size="large"
                    onClick={() => handleSubjectClick(subject.name)}
                  >
                    {subject.name}
                  </Button>
                </div>
              ))}
            </>
          );
        }}
      ></Await>
    </React.Suspense>
  );
};

export default Subjects;

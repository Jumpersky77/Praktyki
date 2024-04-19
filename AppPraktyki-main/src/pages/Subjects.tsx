import React, { useState } from "react";
import { Await, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Header from "../components/Header";
import "../style/styleR.css";
import { Subject } from "../model/subject";

const BASE_URL = "http://localhost:8080";

const fetchSubjects = () =>
  fetch(`${BASE_URL}/subjects`).then(
    (response) => response.json() as unknown as Subject[]
  );

const Subjects = () => {
  const navigate = useNavigate();

  const handleSubjectClick = (subject: string) => {
    navigate(`/teachers?subject=${subject}`);
  };

  return (
    <React.Suspense>
      <Await
        resolve={fetchSubjects()}
        children={(subjects: Subject[]) => {
          return (
            <>
              <Header accountName={"example"} subscriptionDaysLeft={"14"} />
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

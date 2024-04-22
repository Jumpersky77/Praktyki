import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import "../style/styleR.css";
import { useAppNavigation } from "../router/router";

const _teachers = ["Ewa Znamirowska", "Dorota Gut"];

const Teachers = () => {
  const [teachers] = useState(_teachers);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const subject = searchParams.get("subject");
  const navigate = useAppNavigation();
  const handleTeacherClick = (teacher: string) => {
    // TODO: how to handel null subject
    subject && navigate.toAnswersPage(subject, teacher);
  };

  return (
    <>
      <div>
        <h1 className="title">Lista nauczycieli</h1>
        {subject && <p className="subtitle">Przedmiot: {subject}</p>}
        {subject === "Matematyka" &&
          teachers.map((teacher, index) => (
            <div className="BlockContainer" key={index}>
              <Button
                className="Block"
                variant="outlined"
                onClick={() => handleTeacherClick(teacher)}
              >
                {teacher}
              </Button>
            </div>
          ))}
      </div>
    </>
  );
};

export default Teachers;

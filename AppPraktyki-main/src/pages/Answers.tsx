import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import Answer from "../components/Answer";
import Checkbox from "../components/Checkbox";
import { Await } from "react-router-dom";
import "../style/styleR.css";
import { useAppNavigation } from "../router/router";
import { Teacher } from "../model/teacher";
import { Subject } from "../model/subject";
import { AnswerModel } from "../model/answer";

const BASE_URL = "http://localhost:8080";

type Props = { value: string };

const Answers = () => {
  const location = useLocation();
  const { teacher, subject } = location.state as {
    teacher: Teacher;
    subject: Subject;
  };
  const navigate = useAppNavigation();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTypes, setSearchTypes] = useState<string[]>([]);
  const [answers, setAnswers] = useState<AnswerModel[]>([]);

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const response = await fetch(`${BASE_URL}/answers/teacher/${teacher.id}`);
        const data: AnswerModel[] = await response.json();
        setAnswers(data);
      } catch (error) {
        console.error("Error fetching answers:", error);
      }
    };
    fetchAnswers();
  }, [teacher.id]);

  // const CustomCheckbox = (props: Props) => {
  //   return (
  //     <div className="answer-search-checkbox">
  //       <input
  //         type="checkbox"
  //         name="search-type"
  //         value={props.value}
  //         onChange={handleCheckboxChange}
  //         checked={searchTypes.includes(props.value)}
  //       />
  //       {props.value}
  //     </div>
  //   );
  // };
  

  const handleCheckboxChange = (value: string) => {
    setSearchTypes((prevTypes) => {
      if (prevTypes.includes(value)) {
        return prevTypes.filter((type) => type !== value);
      } else {
        return [...prevTypes, value];
      }
    });
  };
  

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredAnswers = answers.filter((answer) => {
    if (searchTypes.length > 0 && !searchTypes.includes(answer.type)) {
      return false;
    }
    return answer.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <div>
        <h1 className="title">Odpowiedzi</h1>
        {subject && <p className="subtitle">Przedmiot: {subject.name}</p>}
        {teacher && (
          <p className="subtitle">
            Nauczyciel: {teacher.firstName + " " + teacher.lastName}
          </p>
        )}
        <Button
          id="ButtonAddAnswer"
          variant="outlined"
          onClick={() => navigate.toAddAnswerPage(subject, teacher)}
        >
          Dodaj odpowiedź
        </Button>
        <input
          className="SearchInput"
          type="text"
          placeholder="Szukaj odpowiedzi..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <Checkbox
          value={"Kartkówka"}
          checked={searchTypes.includes("KARTKÓWKA")}
          onChange={() => handleCheckboxChange("KARTKÓWKA")}
        />
        <Checkbox
          value={"Sprawdzian"}
          checked={searchTypes.includes("SPRAWDZIAN")}
          onChange={() => handleCheckboxChange("SPRAWDZIAN")}
        />
        <Checkbox
          value={"Inne"}
          checked={searchTypes.includes("INNE")}
          onChange={() => handleCheckboxChange("INNE")}
        />
        {filteredAnswers.map((answer, index) => (
          <div className="BlockAnswersContainer" key={answer.id}>
            <Answer
              id={String(answer.id)}
              name={answer.title}
              author={answer.studentName}
              rating={answer.rate}
              key={answer.id}
              onAnswerClick={(answerID) => navigate.toDetailsPage(answerID)}
            />
            <br />
          </div>
        ))}
      </div>
    </>
  );
};

export default Answers;

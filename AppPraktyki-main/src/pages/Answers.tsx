import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import Answer from "../components/Answer";
import "../style/styleR.css";
import { useAppNavigation } from "../router/router";

const _answers = [
  {
    id: "0",
    name: "Równania kwadratowe",
    author: "Miłosz",
    rating: "7.6",
    type: "kartkówka",
  },
  {
    id: "1",
    name: "Planimetria",
    author: "Bartosz",
    rating: "4.9",
    type: "sprawdzian",
  },
  {
    id: "2",
    name: "Ułamki zwykłe i niezwykłe",
    author: "Mikołaj",
    rating: "6.2",
    type: "inne",
  },
];

type Props = { value: string };

const Teachers = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const subject = searchParams.get("subject");
  const teacher = searchParams.get("teacher");
  const navigate = useAppNavigation();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTypes, setSearchTypes] = useState<string[]>([]);

  const Checkbox = (props: Props) => {
    return (
      <div className="answer-search-checkbox">
        <input
          type="checkbox"
          name="search-type"
          value={props.value}
          onChange={handleCheckboxChange}
          checked={searchTypes.includes(props.value)}
        />
        {props.value}
      </div>
    );
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
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

  const filteredAnswers = _answers.filter((answer) => {
    if (searchTypes.length > 0 && !searchTypes.includes(answer.type)) {
      return false;
    }
    return answer.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <div>
        <h1 className="title">Odpowiedzi</h1>
        {subject && <p className="subtitle">Przedmiot: {subject}</p>}
        {teacher && <p className="subtitle">Nauczyciel: {teacher}</p>}
        <Button
          id="ButtonAddAnswer"
          variant="outlined"
          onClick={() =>
            navigate.toDetailsPage(String(subject), String(teacher))
          }
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
        <Checkbox value={"kartkówka"}></Checkbox>
        <Checkbox value={"sprawdzian"}></Checkbox>
        <Checkbox value={"inne"}></Checkbox>

        {subject === "Matematyka" &&
          teacher === "Ewa Znamirowska" &&
          filteredAnswers.map((answer, index) => (
            <div className="BlockAnswersContainer" key={answer.id}>
              <Answer
                id={answer.id}
                name={answer.name}
                author={answer.author}
                rating={answer.rating}
                key={answer.id}
                onAnswerClick={(answerID) => navigate.toAddAnswerPage(answerID)}
              ></Answer>
              <br />
            </div>
          ))}
      </div>
    </>
  );
};

export default Teachers;

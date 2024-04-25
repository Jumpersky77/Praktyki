import { useLocation } from "react-router-dom";
import "../style/styleR.css";
import { useParams } from 'react-router-dom';
import AddComment from "../components/AddComment";
import AddGrade from "../components/AddGrade";
import { detailsModel } from "../model/details";
import { Await } from "react-router-dom";
import React from "react";
const _details = [
  {
    id: "0",
    name: "Równania kwadratowe",
    author: "Miłosz",
    rating: "7.6",
    text: "Zad1: a, zad2: b",
  },
  {
    id: "1",
    name: "Planimetria",
    author: "Bartosz",
    rating: "4.9",
    text: "Zad1: b, zad2: a",
  },
];

const _comments = [
  {
    id_User: 0,
    user_name: "MiloszTT",
    Text: "Dobra robota  d=====(￣▽￣*)b",
    id_details: 0,
  },
  {
    id_User: 1,
    user_name: "BartłomiejP",
    Text: "odp a w z. 1 w gr A jest zle",
    id_details: 0,
  },
  {
    id_User: 2,
    user_name: "Skowronek_andrzej",
    Text: "jakis kreatywny komentarz",
    id_details: 1,
  },
];

const commentblock = (id: number, aid: number) => {
  if (_comments[id].id_details === aid) {
    return (
      <div className="CommentContainer">
        <div className="user_name">{_comments[id].user_name}</div>
        <div className="Text">{_comments[id].Text}</div>
      </div>
    );
  }
};

const BASE_URL = "http://localhost:8080";

async function fetchAnswer(answerID:number) {
  const response = await fetch(`${BASE_URL}/answers/${answerID}`);
  const body: detailsModel = await response.json()
  return body;
};

const Details = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const { id } = useParams<{ id: string }>();
  const answerID = parseInt(id || '0');
  return (
    <>
    <React.Suspense>
      <Await
        resolve={fetchAnswer(answerID)}
        children={(Answer: detailsModel) => {
          return (
              <>
                <div id="detailsContainer">
                  <div>
                    <h2 className="title">{Answer.title}</h2>
                  </div>
                  <div className="subtitle">
                    {Answer.text}
                  </div>
                  {/* zdjęcia */}
                </div>
                <div className="add-grade-container">
                  <h4 className="grade">Ocena: {Math.round(Answer.grade * 10) / 10}</h4>
                  <AddGrade answerID={answerID}></AddGrade>
                </div>
                  <h2 className="CommentComponent">Komentarze</h2>
                  <div className="CommentComponent">
                    <AddComment></AddComment>
                  </div>
                  <div className="CommentComponent">
                    {_comments.map((com, index) => commentblock(index, answerID))}
                  </div>
              </>
          );
        }}
      ></Await>
    </React.Suspense>
    </>
  );
};

export default Details;

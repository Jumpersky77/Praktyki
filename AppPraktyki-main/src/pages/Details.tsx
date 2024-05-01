import { useLoaderData } from "react-router-dom";
import "../style/styleR.css";
import AddComment from "../components/AddComment";
import AddGrade from "../components/AddGrade";
import { DetailsModel } from "../model/details";
import { CommentModel } from "../model/comment";
import Comments from "../components/Comments";
import { useState } from "react";

const BASE_URL = "http://localhost:8080";

const Details = () => {
  const loaderData = useLoaderData() as {
    answer: DetailsModel;
    comments: CommentModel[];
  };
  console.log(loaderData)
  const answer = loaderData.answer;
  const [comments, setComments] = useState([...loaderData.comments]);

  const setComment = (comment: CommentModel) => {
    setComments([comment, ...comments]);
  };

  return (
    <>
      <div id="detailsContainer">
        <div>
          <h2 className="title">{answer.title}</h2>
        </div>
        <div className="answer-text">{answer.text}</div>
        <div className="img-container">
          {answer.imagePaths.map((img, index) => (
            <img src={`${BASE_URL}/answers${img}`} key={index}></img>
          ))}
        </div>
      </div>
      <div className="add-grade-container">
        <h4 className="grade">Ocena: {Math.round(answer.grade * 10) / 10}</h4>
        <AddGrade answerID={answer.id}></AddGrade>
      </div>
      <div className="CommentComponent">
        <h2>Komentarze</h2>
        <div id="comment-add-container">
          <AddComment
            studentID={1}
            answerID={answer.id}
            studentName={answer.studentName}
            onCommnetSet={setComment}
          ></AddComment>
        </div>
        <div>
          <Comments comments={comments} />
        </div>
      </div>
    </>
  );
};

export default Details;

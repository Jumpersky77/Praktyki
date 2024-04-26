import { useLoaderData } from "react-router-dom";
import "../style/styleR.css";
import AddComment from "../components/AddComment";
import AddGrade from "../components/AddGrade";
import { detailsModel } from "../model/details";
import { CommentModel } from "../model/comment";
import Comments from "../components/Comments";
import { useState } from "react";

const Details = () => {
  const loaderData = useLoaderData() as {
    answer: detailsModel;
    comments: CommentModel[];
  };
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

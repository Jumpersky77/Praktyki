import { useLocation } from "react-router-dom";
import "../style/styleR.css";
import { useParams } from 'react-router-dom';
import AddComment from "../components/AddComment";
import AddGrade from "../components/AddGrade";
import { detailsModel } from "../model/details";
import { CommentModel } from "../model/comment";
import { Await } from "react-router-dom";
import React from "react";

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

const BASE_URL = "http://localhost:8080";

async function fetchAnswer(answerID:number) {
  const response = await fetch(`${BASE_URL}/answers/${answerID}`);
  const body: detailsModel = await response.json();
  return body;
};
async function fetchComments(answerID:number): Promise<CommentModel[]> {
  const response = await fetch(`${BASE_URL}/answers/${answerID}/comments`);
  const body: CommentModel[] = await response.json();
  console.log(body);
  return body || [];
};


const Details = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const { id } = useParams<{ id: string }>();
  const answerID = parseInt(id || '0');
  const [comments, setComments] = React.useState<CommentModel[]>([]);

  React.useEffect(() => {
    const fetchCommentsData = async () => {
      try {
        const commentsData = await fetchComments(answerID);
        setComments(commentsData);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };
    fetchCommentsData();
  }, [answerID]);

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
                  <div className="answer-text">
                    {Answer.text}
                  </div>
                </div>
                <div className="add-grade-container">
                  <h4 className="grade">Ocena: {Math.round(Answer.grade * 10) / 10}</h4>
                  <AddGrade answerID={answerID}></AddGrade>
                </div>
                <div className="CommentComponent">
                  <h2>Komentarze</h2>
                  <AddComment studentID={1} answerID={Answer.id} />
                  {comments.map((comment, index) => (
                    <div key={index} className="CommentContainer">
                      <div className="user_name">{comment.studentName}</div>
                      <div className="Text">{comment.commentText}</div>
                    </div>
                  ))}
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

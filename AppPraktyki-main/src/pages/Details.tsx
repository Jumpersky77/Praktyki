import { useLocation } from "react-router-dom";

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
  if (_comments[id].id_details == aid) {
    return (
      <div>
        <div>{_comments[id].user_name}</div>
        <div>{_comments[id].Text}</div>
        <br />
      </div>
    );
  }
};

const Details = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const answerID = Number(searchParams.get("answerid"));
  return (
    <>
      <div>
        <h2>{_details[answerID].name}</h2>
      </div>
      <div>{_details[answerID].text}</div>
      <h4>{_details[answerID].rating}</h4>
      <div>{_comments.map((com, index) => commentblock(index, answerID))}</div>
    </>
  );
};
export default Details;

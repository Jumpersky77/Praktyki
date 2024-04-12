import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Header from '../components/Header';
import { List } from '@mui/material';

const _details = [{
    id: "0",
    name: "Równania kwadratowe",
    author: "Miłosz",
    rating: "7.6",
},
{
    id: "1",
    name: "Planimetria",
    author: "Bartosz",
    rating: "4.9",
}]

const _comments=[
    {
        id_User:0,
        Text: "Dobra robota  d=====(￣▽￣*)b",
        id_details:0
    },
    {
        id_User:1,
        Text: "odp a w z. 1 w gr A jest zle",
        id_details:0
    },
    {
        id_User:2,
        Text: "jakis kreatywny komentarz",
        id_details:1
    }
]

const commentblock=(id:number, aid:number)=>{
    if(_comments[id].id_details==aid){
            return  (
                <div >
                    <div>{_comments[id].id_User}</div>
                    <div>{_comments[id].Text}</div>
                </div>
            )
        }
}


const Details = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const subject = searchParams.get('subject');
    const teacher = searchParams.get('teacher');
    const answerID=Number(searchParams.get('answerid'));
    //const navigate = useNavigate();
    // const handleAnswerClick = (answerID: string) => {
    //     navigate(`/details?answerid=${answerID}`);
    // };

    return (
        <>
            <Header accountName={"example"} subscriptionDaysLeft={"14"} />
            <div>
                <h2>{_details[answerID].name}</h2>
            </div>
            <div>

            </div>
            <h4>{_details[answerID].rating}</h4>
            <div>
                {_comments.map((com, index) => (
                    commentblock(index, answerID)
            ))
                
                
                
                
                
                
                
                /* {_comments.map((com, index) => (
                    if(com.id_details==answerID){
                        commentblock(com.id_User)
                    }
                ))} */}
            </div>
        </>
    );
}
export default Details

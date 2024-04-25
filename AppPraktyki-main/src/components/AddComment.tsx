import React, { useState } from 'react';
import {
    Button,
    Container,
    TextField,
  } from "@mui/material";
  import "../style/styleR.css";
import { common } from '@mui/material/colors';
import AnswerServ from "../service/AnswerServ";

type Props = {studentID:number, answerID:number};
function AddComments(props:Props){
    const [Comment, setComment]= useState({
        studentID: props.studentID,
        answerID: props.answerID,
        comment: "",
    });

    const handleCommentChange = (e:any)=>{
        const value= e.target.value;
        setComment({ ...Comment, [e.target.name]: value });
        console.log(Comment)
    };
    const addComment= (e:any)=>{
        e.preventDefault();
        AnswerServ.saveComment(Comment)
        .then(() => {
            setComment({
                studentID: props.studentID,
                answerID: props.answerID,
                comment: "",
            })
        }).catch((error) => {
            console.log(error);
        });

    };
    return (
            <div id="Dodaj_Komentarz">
               <Container maxWidth="xs">
                   <TextField
                        name="comment"
                        required
                        fullWidth
                        label="Dodaj Komentarz"
                        autoFocus
                        id='AddComment_TextField'
                        onChange={handleCommentChange}
                        value={Comment.comment}
                            />
                    <Button
                    variant="contained"
                    id='AddComment_Button'
                    onClick={addComment}
                    >
                    Opublikuj
                    </Button>
                </Container>

                
            </div>

            
    )
}

export default AddComments;
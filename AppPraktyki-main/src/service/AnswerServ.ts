import { Api } from "@mui/icons-material";
import axios from "axios";
const API_URL = "http://localhost:8080";

class AnswerServ {
  saveAnswer(answer: FormData) {
    return fetch(`${API_URL}/answers`, {
      body: answer,
      method: "POST",
    });
  }
    saveGrade(grade:number, answerID:number) {
        const obj = {
            studentID: 1,
            answerID: answerID,
            grade: grade,
        }
        return axios.post(API_URL + "/grade/"+answerID, obj);
    }
    saveComment(comment:any){
        return axios.post(API_URL + `/answers/${comment.answerID}/comments`, comment);
    }
}

export default new AnswerServ();
